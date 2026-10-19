const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/CV_Personal' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? '/CV_Personal/' : undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
