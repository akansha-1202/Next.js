
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [
     { 
      source:"/profile",
      destination : "/about",
      permanent:false
      }
    ]
  }
};

export default nextConfig;
