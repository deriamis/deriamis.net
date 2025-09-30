import { defineStudioCMSConfig } from 'studiocms/config';
import blog from '@studiocms/blog';
import md from '@studiocms/md';
import mdx from '@studiocms/mdx';
import markdoc from '@studiocms/markdoc';
import html from '@studiocms/html';

export default defineStudioCMSConfig({
    dbStartPage: false,
    base: "/blog",
    plugins: [md(), blog(), mdx(), markdoc(), html()],
});
