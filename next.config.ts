import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisation des images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
    // Formats modernes
    formats: ['image/webp', 'image/avif'],
    // Tailles réduites pour optimisation
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    // Désactiver l'optimisation serveur pour Vercel (économise du coût serveur)
    unoptimized: true,
  },

  // Compression gzip
  compress: true,

  // Masquer le header X-Powered-By
  poweredByHeader: false,

  // React Strict Mode
  reactStrictMode: true,

  // Désactiver les source maps en production
  productionBrowserSourceMaps: false,

  // SWC Minify est activé par défaut dans Next.js 14+, on supprime la clé explicite
  // isrMemoryCacheSize n'est plus nécessaire ou a changé de nom, on supprime experimental
};

export default nextConfig;
