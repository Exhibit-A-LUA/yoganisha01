<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<pre class="hljs">{JSON.stringify(data.records, null, 4)}</pre>

<div class="day">Tuesday</div>

{#each data.records as appointment}
  <div class="appointment">
    {appointment.id}
    {appointment.expand?.student.name}
    <!-- {appointment.student.name}
    {appointment.instructor.name} -->
  </div>
{/each}

<!-- <style>
  :global(body) {
    background-color: black;
  }
</style> -->

<style>
  .day {
    border: 1px solid black;
    height: 40px;
    width: 200px;
    background-color: rgb(163, 241, 176);
    color: black;
  }
  .appointment {
    border: 1px solid black;
    height: 40px;
    width: 200px;
    background-color: rgb(163, 241, 231);
    color: black;
  }
</style>
