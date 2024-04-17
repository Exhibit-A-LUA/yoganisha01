<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  // console.log(
  //   "In Calendar +page.swelte, data.records[0].expand is ",
  //   data.records[0].expand
  // );
</script>

<!-- <pre class="hljs">{JSON.stringify(data.records, null, 4)}</pre> -->

<div class="day">Tuesday</div>

{#each data.records as appointment}
  <div class="appointment">
    <details>
      <summary>
        {appointment.expand?.student.name} with
        {appointment.expand?.instructor.name}
      </summary>
      <div class="appointment-details">
        at {appointment.startTime.toString().slice(11, 16)} on {appointment.startTime
          .toString()
          .slice(0, 10)}
        <br />
        is {appointment.status}
        <br />
        {appointment.paymentStatus}
        {appointment.paymentDate.toString().slice(0, 10)}
      </div>
    </details>
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
    text-align: center;
    align-content: center;
    background-color: rgb(163, 241, 176);
    color: black;
  }
  .appointment {
    border: 1px solid black;
    font-size: small;
    height: auto;
    width: 200px;
    background-color: rgb(163, 241, 231);
    color: black;
  }
  details summary {
    color: black;
  }

  .appointment-details {
    color: blue;
  }
</style>
