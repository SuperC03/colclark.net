import * as z from 'zod';
import archieml from 'archieml';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

marked.use(
  markedKatex({
    throwOnError: false
  })
);

marked.use({
  renderer: {
    link({ href, title, text }) {
      if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) {
        return `<a title="${title}" target="_blank" rel="noopener noreferrer" href="${href}">${text}</a>`;
      }
      return `<a title="${title}" href="${href}">${text}</a>`;
    }
  }
});

export const PostData = z.object({
  type: z.literal(['project', 'blog', 'external']),
  url: z.url().optional(),
  title: z.string(),
  description: z.string().optional(),
  content: z.array(
    z.object({
      type: z.literal(['text', 'image']),
      value: z.union([z.string(), z.looseObject({})])
    })
  ).default([])
});

export type PostData = z.infer<typeof PostData>;

export const getSlugs = async (): Promise<Array<string>> => {
  const slugs: Array<string> = [];
  try {
    const files = await import.meta.glob('../../../posts/*.post.txt', { query: '?raw' });
    Object.keys(files).forEach((f) => {
      const splitPath = f.split('/');
      const fileName = splitPath[splitPath.length - 1];
      if (fileName.endsWith('.post.txt')) {
        
        slugs.push(fileName.split('.post.txt')[0]);
      }
    });
  } catch (e) {
    console.error(e);
  }

  return slugs;
};

export const getPost = async (slug: string): Promise<PostData | null> => {
  let data;
  try {
    // Pull all posts from $posts
    const allPosts = await import.meta.glob('../../../posts/*.post.txt', {
      query: '?raw',
      import: 'default'
    });

    // Find post matching slug
    const matchedPosts = Object.entries(allPosts).filter(([k, _]) => k.includes(slug));
    if (matchedPosts.length != 1) {
      return null;
    }
    const post = String(await matchedPosts[0][1]());

    // Process post with ArchieML
    const parsedText = archieml.load(post);
    // Verify post data with Zod
    data = await PostData.parseAsync(parsedText);

    // Go through each text block, parse markdown into html
    data.content.forEach(async (block) => {
      if ((block.type = 'text')) {
        block.value = await marked.parse(block.value as string);
      }
    });
  } catch (e) {
    console.error(e);
    data = null;
  }
  return data;
};
