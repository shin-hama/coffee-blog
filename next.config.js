/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'] //　←外部ファイルによって記述が変わります
  }
}

module.exports = nextConfig
