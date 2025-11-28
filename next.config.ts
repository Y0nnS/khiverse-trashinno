import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['lwxrrnhgosyashwkmhou.supabase.co'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
export default nextConfig;
