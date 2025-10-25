<script lang="ts">
  import '../app.css';

  import Navbar from '$lib//layout/navbar.svelte';
  import Footer from '$lib/layout/footer.svelte';

  let { children } = $props();
</script>

<Navbar />
{@render children?.()}
<Footer />
