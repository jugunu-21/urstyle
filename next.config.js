module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/:path*',

        },
        
      ];
    },
    env: {
      API_URL: 'http://localhost:8000',
    },
  };