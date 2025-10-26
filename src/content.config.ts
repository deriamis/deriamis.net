import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    isDraft: z.boolean().default(false),
    title: z.string(),
    author: z.array(reference('authors')).nonempty(),
    description: z.string(),
    pubDate: z.coerce.date(),
    modifiedDate: z.coerce.date().optional(),
    previewImage: z.object({
      src: z.string().url(),
      alt: z.string(),
    }).optional(),
    relatedPosts: z.array(reference('posts')).optional(),
    relatedArticles: z.array(reference('articles')).optional()
  })
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/content/articles" }),
  schema: z.object({
    isDraft: z.boolean().default(false),
    title: z.string(),
    author: z.array(reference('authors')).nonempty(),
    description: z.string(),
    pubDate: z.coerce.date(),
    modifiedDate: z.coerce.date().optional(),
    previewImage: z.object({
      src: z.string().url(),
      alt: z.string(),
    }).optional(),
    relatedArticles: z.array(reference('articles')).optional()
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    email: z.string().email().optional(),
    shortBio: z.string().optional(),
    avatar: z.string().url().optional()
  })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts, articles, authors };