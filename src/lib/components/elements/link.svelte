<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    external?: boolean;
    children: Snippet;
    class?: string;
  }

  const props: Props = $props();
</script>

<span class="sm:whitespace-nowrap">
{#if props.external}
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    class={`${props.class} underline-offset-5 rounded-sm px-1 py-1 underline decoration-2 transition-colors duration-100 hover:bg-primary hover:text-white hover:decoration-primary hover:font-semibold`}
    >{@render props.children?.()}</a
  >
{:else}
  <a
    href={props.href}
    class={`${props.class} underline-offset-5 rounded-sm px-1 py-1 underline decoration-2 transition-colors duration-100 hover:bg-primary hover:text-white hover:decoration-primary hover:font-semibold`}
    >{@render props.children?.()}</a
  >
{/if}
</span>