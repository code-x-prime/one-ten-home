import type { MetadataRoute } from 'next'
export const dynamic = 'force-static'
const aiBots = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
]
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/', disallow: '/api/' })),
    ],
    sitemap: 'https://onetenhomesolutions.com/sitemap.xml',
    host: 'https://onetenhomesolutions.com',
  }
}
