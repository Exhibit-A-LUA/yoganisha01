<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div>
  {#if !data.authenticated}
    Not Authenticated
  {:else if data.authCollection === "students"}
    student
  {:else}
    employee
  {/if}

  <!-- {JSON.stringify(data)} -->
</div>

<style>
  :global(body) {
    background-color: black;
  }
</style>
