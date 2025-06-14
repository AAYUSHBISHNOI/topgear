module.exports = {
  async redirects() {
    return [
      {
        source: "/aboutus",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};
