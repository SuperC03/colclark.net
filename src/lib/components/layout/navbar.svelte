<script lang="ts">
  import ThemeButton from "../elements/theme-button.svelte";
  import { page } from "$app/state";

  const linkItems: Array<{
    title: string;
    path: string;
  }> = [
    {title: 'About', path: '/about'},
    {title: 'Projects', path: '/projects'},
    {title: 'Posts', path: '/posts'},
  ];
</script>

<nav class="navbar border-b-4 min-h-17 p-0 mx-auto w-11/12 sm:max-w-4xl font-mono align-middle">
  <div class="flex-1">
    <a href="/" class="font-bold text-2xl hover:bg-primary hover:text-base-100 p-4 transition-colors duration-400">C<sup>2</sup></a>
  </div>
  <div class="flex-none uppercase">
    {#each linkItems as link }
      <a aria-current={page.url.pathname == link.path} href="{link.path}" class={`mx-1 sm:mx-2 sm:text-lg hover:text-primary transition-colors duration-200 ${page.url.pathname == link.path ? 'text-primary' : null}`}>{link.title}</a>
    {/each}
    <ThemeButton />
  </div>
</nav>

<!-- <nav class="navbar border-b-4 border-b-neutral-content font-[RobotoMono] py-0">
  <div class="flex-1 h-full">
    <a href="/" class="btn rounded-none bg-base-content btn-ghost btn-lg hover:btn-primary my-0 h-full"
      >C<sup>2</sup></a
    >
  </div>
</nav> -->
