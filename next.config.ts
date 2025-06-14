import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [process.env.DATABASE_DOMAIN_NAME!],
  },
  
   experimental: {
    serverActions: {
      bodySizeLimit: '40mb',
    },
  },

    api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },

};

export default nextConfig;
