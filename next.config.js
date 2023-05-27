/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zluncbhyhpxonqhigbhn.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/images-restaurant/**',
      },
    ],
  },
  future: {
    webpack5: true
},
webpack: function (config, options) {
    console.log(options.webpack.version); // 5.18.0
    config.experiments = {};
    return config;
},
}

module.exports = nextConfig
