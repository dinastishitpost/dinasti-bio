<script context="module">
  export const prerender = true
</script>

<script>
</script>

<svelte:head>
  <title>Survey | DSI</title>
</svelte:head>

<section>
  Coming soon!
  <!--<a class="card" href="">
    <img src="/damcc.jpg" alt="" />
    <span>Dikala anda menjadi<br>konten kreator</span>
  </a>
  
  <a class="card" href="">
    <img src="/damgg.jpg" alt="" />
    <span>Dikala anda menjadi gamer</span>
  </a>
  
  <a class="card" href="">
    <img src="/kkkm.jpg" alt="" />
    <span>Keluh Kesah<br>Kehidupan Manusia</span>
  </a>-->
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
