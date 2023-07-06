module.exports = {
    async redirects() {
      return [
        {
          source: '/blog/android',
          destination: '/blog',
          permanent: true,
        },
      ]
    },
  }