<script>
  import { library } from "@fortawesome/fontawesome-svg-core"

  import {
    faDonate,
    faUmbrella,
    faFlag,
    faChartPie,
  } from "@fortawesome/free-solid-svg-icons"

  import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
  } from "fontawesome-svelte"

  import { page } from "$app/stores"
  import Logo from "./dsi.svelte"
</script>

<header>
  <div class="logo">
    <Logo />
  </div>

  <nav>
    <a sveltekit:prefetch href="/" class:active={$page.path === "/"}
      ><FontAwesomeIcon icon={faFlag} fixedWidth={true} /></a
    >
    <a sveltekit:prefetch href="/donate" class:active={$page.path === "/donate"}
      ><FontAwesomeIcon icon={faDonate} fixedWidth={true} /></a
    >
    <a sveltekit:prefetch href="/yarn" class:active={$page.path === "/yarn"}
      ><FontAwesomeIcon icon={faUmbrella} fixedWidth={true} /></a
    >
    <a sveltekit:prefetch href="/survey" class:active={$page.path === "/survey"}
      ><FontAwesomeIcon icon={faChartPie} fixedWidth={true} /></a
    >
  </nav>
</header>

<style lang="scss">
  header {
    width: 100vw;
    height: 260px;
    display: grid;
    grid-template-columns: 47vw;
    grid-template-rows: 5fr 1fr;
    row-gap: 15px;
    place-content: center;
    margin-bottom: 20px;

    .logo {
      justify-self: center;
      align-self: end;
      width: 70%;

      @media (min-width: 768px) {
        width: 30%;
      }
    }

    nav {
      justify-self: center;
      place-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 10px;

      // @media (min-width: 992px) {
      //   display: none;
      // }

      a {
        font-size: 25px;
        padding: 6px;
        border-radius: 10px;
        background-color: rgba($color: #fff, $alpha: 0.2);

        @media (prefers-color-scheme: light) {
          background-color: rgba($color: #000, $alpha: 0.2);
        }

        &.active {
          background-color: #fff;
          color: rgb(51, 51, 51);
          
          @media (prefers-color-scheme: light) {
            background-color: rgb(51, 51, 51);
            color: rgb(228, 228, 228);
          }
        }
      }
    }
  }
</style>
