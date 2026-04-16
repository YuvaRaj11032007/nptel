/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./src/content/**/*'],
    },
  },
};

export default nextConfig;
