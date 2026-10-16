/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // Photos are resized and served as WebP by Next, so phones never download desktop-size files.
    formats: ['image/webp'],
    qualities: [75, 90],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
}

export default nextConfig
