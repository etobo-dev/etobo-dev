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
};

export default nextConfig;
