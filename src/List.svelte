<script lang="ts">
  export let name: string;
</script>

<main>
  <h1>Bram, wil jij mijn peter zijn?</h1>
  {#if name.toLowerCase() != "bram"}
    <p>
      dan zal ik u op termijn uwe naam leren schrijven ... {name}?!
    </p>
  {/if}
  <img src="img/echo.jpeg" alt="echo van de baby" />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
