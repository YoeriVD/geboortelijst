<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let name = "";
  function next() {
    console.log("dispatch");
    dispatch("name", {
      text: name,
    });
  }
</script>

<main>
  <h1>Ik ben Archimedes</h1>
  <p>Wie ben jij?</p>
  <form on:submit|preventDefault={next}>
    <input bind:value={name} placeholder="(voornaam)" />
  </form>
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
