/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {

    API_URL: "http://localhost:8000/api/",
    IMAGE_URL: "http://localhost:8000/api/",

  },
  images: {
    domains: ['localhost', 'ezev.sg', "api.ezev.sg", "localhost:8000"],
  },
};

export default nextConfig;