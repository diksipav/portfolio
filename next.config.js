module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },
};
