const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const cspHeader = `
    default-src 'self';
    script-src 'self' https://www.googletagmanager.com https://va.vercel-scripts.com https://waw.gallabox.com https://checkout.razorpay.com https://maps.googleapis.com 'unsafe-eval' 'unsafe-inline';
    style-src 'self' https://maps.gstatic.com https://fonts.googleapis.com 'unsafe-inline';
    img-src 'self' blob: data: https://www.google.co.in/ads/ga-audiences https://maps.gstatic.com https://maps.googleapis.com https://www.googletagmanager.com;
    font-src 'self' data: https://maps.googleapis.com https://fonts.gstatic.com; 
    object-src 'self' data:;
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    connect-src 'self' https://launch-api1.vercel.app https://analytics.google.com https://lumberjack-cx.razorpay.com https://lumberjack.razorpay.com https://maps.googleapis.com;
    frame-src 'self' https://waw.gallabox.com https://api.razorpay.com;
`;


const nextConfig = {
  images: {
    domains: ['localhost', 'imgtr.ee', 'bpu-images-v1.s3.eu-north-1.amazonaws.com','lh3.googleusercontent.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*', 
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ' ').trim(), 
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/_next/image(.*)', 
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/_next/image', 
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
        has: [
          {
            type: 'query',
            key: 'url',
          },
        ],
      },
    ];
  },
  
  
  async redirects() {
    return [
      {
        source: '/backpacking-tours',
        destination: '/tours',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/condition',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/work-with-us',
        destination: '/career',
        permanent: true,
      },
      {
        source: '/tours/kudremukh-trek-t4to',
        destination: '/trek/kudremukh-trek',
        permanent: true,
      },
      {
        source: '/tours/nethravathi-trek',
        destination: '/trek/nethravathi-trek',
        permanent: true,
      },
      {
        source: '/tours/bandaje-falls-trek',
        destination: '/trek/bandaje-falls-trek',
        permanent: true,
      },
      {
        source: '/tours/gokarna-beach-trek-arz1',
        destination: '/trek/gokarna-beach-trek',
        permanent: true,
      },
      {
        source: '/tour/gokarna-beachtrek-newyear',
        destination: '/tour/gokarna-murudeshwar-3day',
        permanent: true,
      },
      {
        source: '/tours/kumara-parvatha-trek',
        destination: '/trek/kumara-parvatha-coorg-trek',
        permanent: true,
      },
      {
        source: '/tours/tadiandamol-trek',
        destination: '/trek/tadiandamol-trek',
        permanent: true,
      },
      {
        source: '/tours/etthina-bhuja-sunrise-trek',
        destination: '/trek/ethina-bhuja-trek',
        permanent: true,
      },
      {
        source: '/tours/skandagiri-trek',
        destination: '/trek/skandagiri-trek',
        permanent: true,
      },
      {
        source: '/tours/didupe-and-ermayi-falls-trek',
        destination: '/trek/ermayi-and-didupe-falls-trek',
        permanent: true,
      },
      {
        source: '/tours/kurinjal-trek',
        destination: '/trek/kurinjal-trek',
        permanent: true,
      },
      {
        source: '/tours/huttari-betta-trek',
        destination: '/trek/uttari-betta-trek',
        permanent: true,
      },
      {
        source: '/tours/paithalmala-trek',
        destination: '/trek/paithalmala-trek',
        permanent: true,
      },
      {
        source: '/tours/wayanad-backpacking-tour',
        destination: '/tour/wayanad-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/chikmagaluru-backpacking-tour',
        destination: '/tour/chikmagalur-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/hampi-backpacking-tour',
        destination: '/tour/hampi-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/munnar-backpacking-tour',
        destination: '/tour/munnar-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/coorg-backpacking-tour',
        destination: '/tour/coorg-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/pondicherry-backpacking-tour',
        destination: '/tour/podicherry-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/dandeli-tour-package-from-bangalore',
        destination: '/tour/dandeli-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/w',
        destination: '/tour/sakleshpur-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/gokarna-murudeshwar-backpacking-tour',
        destination: '/tour/gokarna-murudeshwar-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tours/hampi-backpacking-tour-3-days-2-nights',
        destination: '/tour/hampi-heritage-tour',
        permanent: true,
      },
      {
        source: '/tours/chikmagaluru-tour-long-weekend-3-days-and-2-nights',
        destination: '/tour/chikmagalur-tour-package',
        permanent: true,
      },
      {
        source: '/tours/coorg-backpacking-tour-long-weekend-3-days-and-2-nights',
        destination: '/tour/coorg-tour-package',
        permanent: true,
      },
      {
        source: '/tours/kodaikanal-backpacking-tour',
        destination: '/tour/kodaikanal-weekend-getaway',
        permanent: true,
      },
      {
        source: '/tour/wayanad-3-days-tour',
        destination: '/tours/wayanad-backpacking-tour-long-weekend-3-days-and-2-nights',
        permanent: true,
      },
      {
        source: '/tour/goa-3-days-tour',
        destination: '/tours/goa-backpacking-tour',
        permanent: true,
      },
      {
        source: '/tour/munnar-3-days-tour',
        destination: '/tours/munnar-alleppey-backpacking-tour',
        permanent: true,
      },
      {
        source: '/tours/phuket-phi-phi-3-nights-4-days',
        destination: '/tour/phuket-phi-phi-island-trip',
        permanent: true,
      },
      {
        source: '/tours/pattaya-phuket-4-night-5-days',
        destination: '/tour/pattaya-phuket-tour',
        permanent: true,
      },
      {
        source: '/tours/best-of-phuket-and-krabi-tour-package',
        destination: '/tour/phuket-krabi-tour',
        permanent: true,
      },
      {
        source: '/tour/bangkok-backpacking-getaway',
        destination: '/tours/best-of-bangkok-3-nights-4-days',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer, dev }) => {
    // Do not perform custom minification in development mode
    if (dev) {
      return config;
    }

    // Ensure the Webpack 5 is used
    config.resolve.fallback = { fs: false, path: false };

    // Modify existing minimizer configuration or add if not present
    if (!isServer) {
      config.optimization.minimize = true; // Ensure minimizing is enabled

      // Find and replace TerserPlugin and CssMinimizerPlugin if they exist, or add them
      const terserIndex = config.optimization.minimizer.findIndex(minimizer => minimizer.constructor.name === 'TerserPlugin');
      if (terserIndex > -1) {
        config.optimization.minimizer[terserIndex] = new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true },
            format: { comments: false },
          },
          extractComments: false,
        });
      } else {
        config.optimization.minimizer.push(new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true },
            format: { comments: false },
          },
          extractComments: false,
        }));
      }

      const cssMinimizerIndex = config.optimization.minimizer.findIndex(minimizer => minimizer.constructor.name === 'CssMinimizerPlugin');
      if (cssMinimizerIndex > -1) {
        // Replace existing CssMinimizerPlugin with custom configuration
        config.optimization.minimizer[cssMinimizerIndex] = new CssMinimizerPlugin();
      } else {
        // Add CssMinimizerPlugin if it doesn't exist
        config.optimization.minimizer.push(new CssMinimizerPlugin());
      }
    }

    return config;
  },
  
};

module.exports = nextConfig;
