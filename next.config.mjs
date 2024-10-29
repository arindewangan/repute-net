/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTRACT_NAME: process.env.CONTRACT_NAME,
  },
}

export default nextConfig;