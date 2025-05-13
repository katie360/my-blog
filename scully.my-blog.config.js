"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("@scullyio/scully-plugin-markdown");
require("@scullyio/scully-plugin-puppeteer");
exports.config = {
    projectRoot: './src',
    projectName: 'my-blog',
    distFolder: './dist/static',
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: './src/assets/posts', // Adjust the path to your posts directory
            },
        },
    },
    extraRoutes: [],
    defaultPostRenderers: [],
};
