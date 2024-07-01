/** @type {import('next').NextConfig} */
const nextConfig = {
  //  react-draggable이 strictmode에서 에러
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
};

export default nextConfig;
