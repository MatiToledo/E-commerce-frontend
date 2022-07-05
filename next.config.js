/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "cdn.contentful.com",
      "assets.vercel.com",
      "images.ctfassets.net",
    ],
    formats: ["image/avif", "image/webp"],
  },
});

module.exports = nextConfig;
