<script lang="ts">
  import List from "./List.svelte";
  import Form from "./Form.svelte";
  import type { User } from "./user";
  export let user: User = {
    name: null,
  };
  function setName(e) {
    user.name = e.detail.text;
    console.log("name", user);
  }
</script>

{#if !user.name}
  <Form on:name={setName} />
{:else}
  <List name={user.name} />
{/if}
