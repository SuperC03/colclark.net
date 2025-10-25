<script lang="ts">
  import ThemeButton from '../elements/theme-button.svelte';
  import { page } from '$app/state';

  const linkItems: Array<{
    title: string;
    path: string;
  }> = [
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Posts', path: '/posts' }
  ];
</script>

<div class="fixed w-full">
  <nav
    class="navbar mx-auto min-h-17 w-11/12 border-b-4 bg-base-100/95 p-0 align-middle font-mono sm:max-w-4xl"
  >
    <div class="flex-1">
      <a
        href="/"
        class="p-4 text-2xl font-bold transition-colors duration-400 hover:bg-primary hover:text-base-100"
        >C<sup>2</sup></a
      >
    </div>
    <div class="flex-none uppercase">
      {#each linkItems as link}
        <a
          aria-current={page.url.pathname == link.path}
          href="/"
          data-tip="Coming soon..."
          class={`tooltip tooltip-bottom mx-1 transition-colors duration-200 hover:text-primary sm:mx-2 sm:text-lg ${page.url.pathname == link.path ? 'text-primary' : null}`}
          >{link.title}</a
        >
      {/each}
      <ThemeButton />
    </div>
  </nav>
</div>

<!-- Spacer (if needed) -->
<!-- <div class="navbar sm:invisible"></div> -->
