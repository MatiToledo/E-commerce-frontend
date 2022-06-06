/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/webp"],
  },
});

module.exports = nextConfig;
