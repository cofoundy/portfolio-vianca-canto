const withAnalyzer = require("@next/bundle-analyzer")({
  enabled:
    process.env.ANALYZE === "true" && process.env.NODE_ENV !== "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.weserv.nl",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: "https://vianca-canto.cofoundy.dev",
  },
};

module.exports = withAnalyzer(nextConfig);
