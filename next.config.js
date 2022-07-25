/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.simplilearn.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
