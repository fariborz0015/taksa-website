/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    TIMEOUT: process.env.TIMEOUT,
    MEDIAA_BASE_URL: process.env.MEDIAA_BASE_URL,
    EVENT_MEDIA_BASE_URL: process.env.EVENT_MEDIA_BASE_URL,
    DASHBOARD_URL: process.env.DASHBOARD_URL,
    METAVERSE_URL: process.env.METAVERSE_URL,
  },
}

module.exports = nextConfig
