// next.config.mjs

export default {
  async redirects() {
    return [
      {
        source: '/aboutus',
        destination: '/about-us',
        permanent: true,
      },

      
    ];
  },
};
