/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Twavo Technologies',
    description: 'My store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasm.twavo.be/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
