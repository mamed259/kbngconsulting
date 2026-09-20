import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/blog/articles/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      // Legacy URLs that still appear in canonicals / external links
      {
        source: "/about-kbng",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/kbng-innovation-studio",
        destination: "/innovation-studio",
        permanent: true,
      },
      {
        source: "/kbng-innovation-studio/vision-ai",
        destination: "/vision-ai",
        permanent: true,
      },
      {
        source: "/contacts",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/blog/burnout-in-constructio-stats-in-2026-what-the-numbers-say-about-modern-work",
        destination:
          "/blog/burnout-stats-in-2026-what-the-numbers-say-about-modern-work",
        permanent: true,
      },
      // Consolidate www → non-www (hosting should also redirect HTTP→HTTPS)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kbngconsulting.com" }],
        destination: "https://kbngconsulting.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**.strapiapp.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
