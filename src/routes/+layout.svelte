<script lang="ts">
  import { themeChange } from 'theme-change';
  import { onMount } from 'svelte';

  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/navbar.svelte';

  let { children } = $props();

  onMount(() => {
    themeChange(false);
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />x
{@render children?.()}
