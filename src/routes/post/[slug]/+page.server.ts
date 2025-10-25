import { getPost, getSlugs } from '$lib/posts';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
  const slugs = await getSlugs();
  console.log(`Found ${slugs.length} post ${slugs.length == 1 ? 'entry' : 'entries'}!`);
  return slugs.map((s) => ({ slug: s }));
};

export const load: PageServerLoad = async ({ params }) => {
    const post = await getPost(params.slug);
    if (!post) {       
        return error(404, 'Post not found...');
    }
  return post;
};
