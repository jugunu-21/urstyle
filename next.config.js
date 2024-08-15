
// next.config.mjs

import withLess from 'next-with-less';

const config = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  ...config,
});