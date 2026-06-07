import { defineCollection, reference } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ base: "./content/posts/", pattern: "**/index.mdoc" }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const projects = defineCollection({
  loader: file("./content/projects/index.json"),
  schema: () =>
    z.object({
      title: z.string(),
      relatedPost: reference("posts").optional(),
    }),
});

export const collections = { posts, projects };
