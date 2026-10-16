import nodemailer from 'nodemailer'

export type ServiceRequest = {
  name: string
  phone: string
  email: string
  service: string
  date: string
  message: string
}

const BRAND = { orange: '#F36D2B', blue: '#0877D9', ink: '#111111', muted: '#666666' }

function esc(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function toronto(date: Date) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)
}

// Long emails, URLs, or unbroken text must wrap instead of stretching the layout on phones.
const WRAP = 'word-break:break-word;overflow-wrap:anywhere;'

// Each field stacks its label above its value so nothing is squeezed on narrow screens.
function field(label: string, valueHtml: string) {
  return `<tr><td style="padding:14px 0;border-bottom:1px solid #eeeeee;">
    <div style="font:700 11px Arial,sans-serif;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};padding-bottom:4px;">${label}</div>
    <div style="font:16px/1.5 Arial,sans-serif;color:${BRAND.ink};${WRAP}">${valueHtml}</div>
  </td></tr>`
}

// Full-width, table-based button: renders the same in Gmail, Outlook and Apple Mail.
function button(href: string, label: string, bg: string, color: string, border?: string) {
  const borderCss = border ? `border:1px solid ${border};` : ''
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
    <td align="center" bgcolor="${bg}" style="border-radius:999px;${borderCss}">
      <a href="${href}" style="display:block;padding:15px 20px;font:700 14px Arial,sans-serif;letter-spacing:1px;color:${color};text-decoration:none;">${label}</a>
    </td></tr></table>`
}

export function buildRequestEmail(req: ServiceRequest, receivedAt = new Date()) {
  const when = toronto(receivedAt)
  const phoneDigits = req.phone.replace(/[^\d+]/g, '')
  const message = esc(req.message).replace(/\r?\n/g, '<br>')
  const first = esc(req.name.split(' ')[0])

  const emailValue = req.email
    ? `<a href="mailto:${esc(req.email)}" style="color:${BRAND.blue};text-decoration:none;">${esc(req.email)}</a>`
    : '<span style="color:#999999;">Not provided</span>'
  const dateValue = req.date ? esc(req.date) : '<span style="color:#999999;">Flexible</span>'
  const phoneValue = `<a href="tel:${esc(phoneDigits)}" style="color:${BRAND.blue};text-decoration:none;font-weight:700;">${esc(req.phone)}</a>`

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting"><title>New service request</title></head>
<body style="margin:0;padding:0;background:#f4f1e8;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New ${esc(req.service)} request from ${esc(req.name)} — ${esc(req.phone)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1e8;">
    <tr><td align="center" style="padding:16px 10px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;">
        <tr><td style="height:6px;line-height:6px;font-size:0;background:${BRAND.orange};border-radius:16px 16px 0 0;">&nbsp;</td></tr>
        <tr><td style="padding:24px 20px 6px;">
          <div style="font:800 12px Arial,sans-serif;letter-spacing:2px;color:${BRAND.orange};">ONE TEN HOME SOLUTIONS</div>
          <h1 style="margin:10px 0 6px;font:700 24px/1.25 Arial,sans-serif;color:${BRAND.ink};">New service request</h1>
          <div style="font:13px/1.5 Arial,sans-serif;color:${BRAND.muted};">Received ${esc(when)}</div>
        </td></tr>
        <tr><td style="padding:6px 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${field('Service', `<strong>${esc(req.service)}</strong>`)}
            ${field('Name', esc(req.name))}
            ${field('Phone', phoneValue)}
            ${field('Email', emailValue)}
            ${field('Preferred date', dateValue)}
            ${field('Message', message)}
          </table>
        </td></tr>
        <tr><td style="padding:10px 20px 24px;">
          ${button(`tel:${esc(phoneDigits)}`, `CALL ${first.toUpperCase()}`, BRAND.orange, '#ffffff')}
          ${req.email ? button(`mailto:${esc(req.email)}`, 'REPLY BY EMAIL', '#ffffff', BRAND.ink, '#dddddd') : ''}
        </td></tr>
        <tr><td style="padding:16px 20px;background:#faf8f2;border-radius:0 0 16px 16px;font:12px/1.6 Arial,sans-serif;color:${BRAND.muted};">
          Internal notification from the service request form on onetenhomesolutions.com. The visitor agreed to be contacted about this request. Personal information is handled under PIPEDA — please do not forward it or use it for marketing.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  const text = [
    'NEW SERVICE REQUEST — One Ten Home Solutions',
    `Received: ${when}`,
    '',
    `Service: ${req.service}`,
    `Name: ${req.name}`,
    `Phone: ${req.phone}`,
    `Email: ${req.email || 'Not provided'}`,
    `Preferred date: ${req.date || 'Flexible'}`,
    '',
    'Message:',
    req.message,
    '',
    'Internal notification. The visitor agreed to be contacted about this request (PIPEDA/CASL). Do not use for marketing.',
  ].join('\n')

  return { html, text, subject: `New ${req.service} request — ${req.name}` }
}

function transporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error('SMTP settings are missing in .env')
  }
  const port = Number(SMTP_PORT || 587)
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  })
}

export async function sendRequestEmail(req: ServiceRequest, to?: string) {
  const from = process.env.FROM_EMAIL
  const recipient = to || process.env.CONTACT_TO_EMAIL
  if (!from || !recipient) throw new Error('FROM_EMAIL or CONTACT_TO_EMAIL is missing in .env')

  const { html, text, subject } = buildRequestEmail(req)
  return transporter().sendMail({
    from: `"One Ten Home Solutions Website" <${from}>`,
    to: recipient,
    replyTo: req.email ? `"${req.name.replace(/["\r\n]/g, '')}" <${req.email}>` : undefined,
    subject,
    text,
    html,
  })
}
