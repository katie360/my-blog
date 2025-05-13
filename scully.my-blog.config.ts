import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-markdown';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'my-blog',
  distFolder: './dist/static',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './src/assets/posts',  // Adjust the path to your posts directory
      },
    },
  },
  extraRoutes: [],
  defaultPostRenderers: [],
};
