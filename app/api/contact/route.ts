import { requestServices } from '@/lib/content'
import { sendRequestEmail, type ServiceRequest } from '@/lib/mailer'

export const runtime = 'nodejs'

// Simple in-memory limiter: 5 requests per 10 minutes per IP (single pm2 process).
const hits = new Map<string, number[]>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 5

function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key)
  }
  return recent.length > MAX_HITS
}

const clean = (v: unknown, max: number) =>
  typeof v === 'string'
    ? v
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
        .trim()
        .slice(0, max)
    : ''

const json = (body: Record<string, unknown>, status = 200) => Response.json(body, { status })

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (limited(ip)) {
    return json({ ok: false, error: 'Too many requests. Please call us instead.' }, 429)
  }

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400)
  }

  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (clean(data.company, 200)) return json({ ok: true })

  const req: ServiceRequest = {
    name: clean(data.name, 100).replace(/[\r\n]+/g, ' '),
    phone: clean(data.phone, 30).replace(/[\r\n]+/g, ' '),
    email: clean(data.email, 150).replace(/[\r\n]+/g, ''),
    service: clean(data.service, 60),
    date: clean(data.date, 10),
    message: clean(data.message, 2000),
  }

  const errors: string[] = []
  if (req.name.length < 2) errors.push('name')
  if (!/^[0-9+().\s-]{7,30}$/.test(req.phone)) errors.push('phone')
  if (req.email && !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/.test(req.email)) errors.push('email')
  if (!(requestServices as readonly string[]).includes(req.service)) errors.push('service')
  if (req.date && !/^\d{4}-\d{2}-\d{2}$/.test(req.date)) errors.push('date')
  if (req.message.length < 5) errors.push('message')
  if (errors.length)
    return json({ ok: false, error: 'Please check your details.', fields: errors }, 400)

  try {
    await sendRequestEmail(req)
    return json({ ok: true })
  } catch (err) {
    console.error('[contact] email failed:', err instanceof Error ? err.message : err)
    return json({ ok: false, error: 'We could not send your request. Please call us.' }, 502)
  }
}
