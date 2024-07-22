          // types/next-with-less.d.ts
          import { NextConfig } from 'next';

          declare module 'next-with-less' {
            function withLess(config: NextConfig & { lessLoaderOptions?: { [key: string]: any }}): NextConfig;
            export default withLess;
          }
      