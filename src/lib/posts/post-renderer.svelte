<script lang="ts">
  import type { PostData } from '.';

  interface Props {
    content: PostData['content'];
  }

  const { content }: Props = $props();
</script>

{#each content as block}
  {#if block.type == 'text'}
    {@html block.value}
  {:else if import.meta.env.DEV}
    <b>Warning: </b> Unsupported file type ({block.type})
  {/if}
{/each}
