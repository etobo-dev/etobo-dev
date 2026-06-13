import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required when accessing `next dev` through ngrok or another tunnel.
  // Without this, client JS may not load on real devices and interactivity breaks.
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "*.ngrok-free.dev",
    "*.ngrok.app",
    "*.ngrok.io",
    "*.ngrok.dev",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "images.credly.com",
      },
      {
        protocol: "https",
        hostname: "static.platzi.com",
      },
      {
        protocol: "https",
        hostname: "cdn.efset.org",
      },
      {
        protocol: "https",
        hostname: "import.cdn.thinkific.com",
      },
      {
        protocol: "https",
        hostname: "images.coursestack.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
      {
        protocol: "https",
        hostname: "icon.icepanel.io",
      },
    ],
  },
};

export default nextConfig;
