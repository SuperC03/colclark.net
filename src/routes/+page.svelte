<script>
  import Link from '$lib/components/elements/link.svelte';
</script>

<svelte:head>
  <title>Colin Clark | Home</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
  <main class="mx-auto flex min-h-screen w-9/10 flex-col justify-center font-mono sm:min-h-156">
    <p class="my-8 text-lg/relaxed sm:text-xl/loose">
      Hi, I'm <b>Colin Clark</b>, a senior at <Link href="https://web.mit.edu" external>MIT</Link> studying
      <Link href="https://www.eecs.mit.edu" external>Electrical Engineering</Link> and <Link
        href="https://physics.mit.edu"
        external>Physics</Link
      >
    </p>
    <p class="my-8 text-lg/relaxed sm:text-xl/loose">
      I work at MIT's <Link href="https://www.rle.mit.edu" external
        >Research Labratory of Electronics</Link
      > under <Link href="https://florianmetzler.com/" external>Dr. Florian Metzler</Link>, <Link
        href="https://duhanzhang.com/"
        external>Dr. Duhan Zhang</Link
      >, and principal investigator
      <Link href="https://www.rle.mit.edu/people/peter-l-hagelstein/" external
        >Prof. Peter Hagelstein</Link
      >
    </p>
  </main>
</div>
