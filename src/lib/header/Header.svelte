<script>
  import {
    library
  } from '@fortawesome/fontawesome-svg-core';

  import {
    faDonate,
    faUmbrella,
    faFlag
  } from '@fortawesome/free-solid-svg-icons'

  import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText
  } from 'fontawesome-svelte';

  import {
    page
  } from '$app/stores';
  import Logo from './dsi.svelte';
</script>

<header>
  <!--
      	<div class="corner">
      		<a href="https://kit.svelte.dev">
      			<img src={logo} alt="SvelteKit" />
      		</a>
      	</div>

      	<nav>
      		<ul>
      			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
      			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
      		</ul>
      	</nav>
      	-->
  <div class="logo">
    <Logo />
  </div>

  <nav>
      <a sveltekit:prefetch href="/" class:active={$page.path === '/'}><FontAwesomeIcon icon={faFlag} fixedWidth={true} /></a>
      <a sveltekit:prefetch href="/donate" class:active={$page.path === '/donate'}><FontAwesomeIcon icon={faDonate} fixedWidth={true} /></a>
      <a sveltekit:prefetch href="/yarn" class:active={$page.path === '/yarn'}><FontAwesomeIcon icon={faUmbrella} fixedWidth={true} /></a>
  </nav>
</header>

<style lang="scss">
  header {
    width: 100vw;
    height: 300px;
    display: grid;
    grid-template-columns: 40vw;
    grid-template-rows: 5fr 1fr;
    row-gap: 15px;
    place-content: center;
    margin-bottom: 20px;

    .logo {
    align-self: end;
  }

    nav {
      place-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 20px;
      
      a {
        font-size: 30px;
        padding: 6px;
        border-radius: 10px;
        
        &.active {
          background-color: #fff;
          color: rgb(100,100,100);
        }
      }
    }
  }
</style>