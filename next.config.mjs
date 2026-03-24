/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  async redirects() {
    return [
      { source: "/services", destination: "/work-with-me", permanent: true },
      { source: "/constructive", destination: "/work-with-me#structured-model-building", permanent: true },
      { source: "/fees", destination: "/contact#fees", permanent: true },
      { source: "/faq", destination: "/contact#questions", permanent: true },
      { source: "/resources", destination: "/ideas", permanent: true },
      { source: "/definitions", destination: "/frameworks", permanent: true }
    ];
  }
};

export default nextConfig;
