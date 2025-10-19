<script lang="ts">
  import { themeChange } from 'theme-change';
  import { onMount } from 'svelte';

  import '../app.css';
  import Navbar from '$lib/components/layout/navbar.svelte';

  let { children } = $props();

  onMount(() => {
    themeChange(false);
  });
</script>

<Navbar />x
{@render children?.()}
