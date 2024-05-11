/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.API_HOST.replace('http://', '').replace('https://', '').replace('/api', ''),
        port: '',
        pathname: '/storage/*',
      },
    ],
  },
};

export default nextConfig;
