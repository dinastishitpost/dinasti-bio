<script>
  import Header from "$lib/header/Header.svelte"
  import "../app.css"
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>2021 © DSI (made by <a href="https://kit.svelte.dev">sveltekit</a>)</p>
</footer>

<style>
  footer {
    margin-top: 4em;
    text-align: center;
    font-size: 13px;
    margin-bottom: 4em;
  }
</style>
