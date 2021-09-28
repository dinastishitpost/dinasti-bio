<script context="module">
  export const prerender = true
</script>

<script>
</script>

<svelte:head>
  <title>Donate | DSI</title>
</svelte:head>

<section>
  <a class="card" target="_blank" href="https://trakteer.id/yarns">
    <img src="/trakteer.png" alt="" />
    <span>Trakteer</span>
  </a>

  <a class="card" target="_blank" href="https://saweria.co/billytuber">
    <img src="/sawer.png" alt="" />
    <span>Saweria</span>
  </a>
</section>

<style lang="scss">
  section {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
    place-content: center;
    margin: auto;

    @media (min-width: 992px) {
      width: 80vw;
    }

    @media (min-width: 768px) {
      width: 90vw;
    }

    .card {
      margin: 0 0.5rem;
      height: 75px;
      background-color: rgba(20, 20, 20, 0.5);
      border: 3px solid rgb(240, 240, 240);
      padding: 5px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      img,
      .svg {
        height: 100%;
        width: auto;
        border-radius: 10px;
      }

      .svg {
        width: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;

        svg {
          width: 80%;

          .discord-logo {
            fill: #5865f2;
          }
        }
      }

      span {
        display: block;
        text-align: center;
        margin: auto;
        font-size: 20px;
      }

      &:hover {
        background-color: rgb(240, 240, 240);
        color: rgb(20, 20, 20);

        .svg {
          background-color: #5865f2;

          .discord-logo {
            fill: #f7f7f7;
          }
        }
      }
    }
  }
</style>
