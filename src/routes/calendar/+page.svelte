<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<pre>{JSON.stringify(data.records, null, 4)}</pre>

<style>
  :global(body) {
    background-color: black;
  }
</style>
