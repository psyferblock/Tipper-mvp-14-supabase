/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zluncbhyhpxonqhigbhn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};

module.exports = nextConfig;
