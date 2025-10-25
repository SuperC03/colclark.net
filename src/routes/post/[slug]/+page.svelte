<script lang="ts">
  import 'katex/dist/katex.min.css';

  import PostRenderer from '$lib/posts/post-renderer.svelte';
  import type { PageProps } from './$types';
  import { onMount } from 'svelte';

  let { data }: PageProps = $props();
  onMount(() => {
    if (data.type == 'external' && data.url) {
        window.location.replace(data.url);
    } 
  });
</script>

<div class="navbar sm:invisible"></div>

<main class="prose font-mono">
    <PostRenderer content={data.content} />
</main>
