<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/layout/navbar.svelte';

  let { children } = $props();
</script>

<Navbar />
{@render children?.()}
