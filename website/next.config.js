/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages deployment
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slash for static export
  trailingSlash: true,
  
  // Configure asset prefix for GitHub Pages (update with your repo name)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/template-repo' : '',
  
  // Enable experimental features
  experimental: {
    // Enable app directory (App Router)
    appDir: true,
  },
  
  // Configure webpack for better performance
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
  
  // Environment variables that should be available in the browser
  env: {
    SITE_NAME: 'Template Repository',
    SITE_DESCRIPTION: 'A comprehensive template repository for modern software projects',
    GITHUB_REPO: 'https://github.com/manastalukdar/template-repo',
  },
  
  // Configure redirects (if needed)
  async redirects() {
    return [
      // Example redirect
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },
  
  // Configure headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;