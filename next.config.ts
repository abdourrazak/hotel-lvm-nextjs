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
    // Formats modernes pour réduire la taille
    formats: ['image/webp'],
    // Tailles d'images réduites pour économiser la RAM
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Cache court pour économiser l'espace
    minimumCacheTTL: 60,
    // Désactiver l'optimisation pour économiser la RAM
    unoptimized: true,
  },

  // Optimisation de la compilation
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Réduire l'utilisation de la RAM pendant le build
  experimental: {
    // Désactiver le pre-rendering pour économiser la RAM
    isrMemoryCacheSize: 0,
  },

  // Optimisation du build
  swcMinify: true,

  // Désactiver les source maps en développement pour économiser la RAM
  productionBrowserSourceMaps: false,
};

export default nextConfig;
