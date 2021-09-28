<script context="module">
	export const prerender = true;
</script>

<script>
	
</script>

<svelte:head>
	<title>Donate | DSI</title>
</svelte:head>

<section>
  <!--<a class="card" target="_blank" href="">
    <img src="/trakteer-icon.png" alt="" />
    <span>Trakteer</span>
  </a>-->
  
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
	
  	.card {
  	  margin: 0 0.5rem;
  	  height: 75px;
  	  background-color: rgba(20,20,20,0.5);
  	  border: 3px solid rgb(240,240,240);
  	  padding: 5px;
  	  border-radius: 10px;
  	  display: flex;
      align-items: center;
  	  
  	  img, .svg{
  	    height: 100%;
  	    width: auto;
  	    border-radius: 10px;
  	  }
  	  
  	  .svg {
  	    width: 88px;
  	    display: flex;
  	    justify-content: center;
  	    align-items: center;
  	    background-color: #F7F7F7;
  	    
  	    svg {
  	      width: 80%;
  	      
  	        .discord-logo {
              fill: #5865F2;
            }
  	    }
  	  }
  	  
  	  span {
  	    display: inline-block;
  	    text-align: center;
  	    width: 100%;
  	    font-size: 22px;
  	  }
  	  
  	  &:hover {
  	    background-color: rgb(240,240,240);
  	    color: rgb(20,20,20);
  	    
  	    .svg {
  	      background-color: #5865F2;
  	      
  	      .discord-logo {
  	        fill: #F7F7F7;
  	      }
  	    }
  	  }
  	}
	}
</style>
