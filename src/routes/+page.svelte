<script lang="ts">
  // import { record } from "zod";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="hljs">
  {#if !data.authenticated}
    Not Authenticated
  {:else if data.authCollection === "students"}
    student {data.name} {data.record.city}
  {:else}
    employee {data.name} {data.record.city}
  {/if}

  <!-- {JSON.stringify(data)} -->
</div>

<!-- <style>
  :global(body) {
    background-color: black;
  }
</style> -->
