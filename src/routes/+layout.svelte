<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/layout/navbar.svelte';
  import Footer from '$lib/components/layout/footer.svelte';

  let { children } = $props();
</script>

<Navbar />
{@render children?.()}
<Footer />