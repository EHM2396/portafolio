import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" es para el Dockerfile (self-hosting). Vercel tiene su propio
  // formato de build optimizado, así que en Vercel (env VERCEL=1) lo omitimos.
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
