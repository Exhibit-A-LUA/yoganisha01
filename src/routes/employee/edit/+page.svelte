<!-- +page.svelte in employee/edit -->

<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Button from "$lib/components/Button.svelte";
  import type { ActionData, PageData } from "./$types";
  import { enhance } from "$app/forms";

  export let form: ActionData;
  export let data: PageData;

  console.log("data", data);

  let name = data.record?.name;
  let email = data.record?.email;
  let photo = data.record?.photo;
  let phone = data.record?.phone;
  let address1 = data.record?.address1;
  let address2 = data.record?.address2;
  let city = data.record?.city;
  let country = data.record?.country;
  let sex = data.record?.sex;
  let roles = data.record?.roles;

  $: error = form?.message;
</script>

<svelte:head>
  <title>Edit Employee</title>
</svelte:head>

<section class="container">
  <form
    class="form"
    method="post"
    autocomplete="off"
    use:enhance={({ formData }) => {
      formData.set("roles", JSON.stringify(roles));
      return async ({ update }) => {
        await update({ reset: false, invalidateAll: true });
      };
    }}
  >
    <div class="heading">
      <h1>Edit Employee</h1>
      <p>Edit your employee details YogaNisha</p>
    </div>
    <div class="input-fields">
      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="name" required bind:value={name} />
          <div class="labelline">Your Name</div>
        </div>
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input type="email" name="email" required bind:value={email} />
          <div class="labelline">Your e-mail</div>
        </div>
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="photo" required bind:value={photo} />
          <div class="labelline">Your Photo</div>
        </div>
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="phone" required bind:value={phone} />
          <div class="labelline">Your Phone</div>
        </div>
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="address1" required bind:value={address1} />
          <div class="labelline">Your address</div>
        </div>
      </div>

      <div>
        <input type="text" name="address2" bind:value={address2} />
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="city" required bind:value={city} />
          <div class="labelline">Your city</div>
        </div>
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="country" required bind:value={country} />
          <div class="labelline">Your country</div>
        </div>
      </div>

      <div class="input-container">
        <select name="sex" bind:value={sex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="input-container">
        <select name="roles" multiple bind:value={roles}>
          <option value="owner">Owner</option>
          <option value="trainer">Trainer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {#if error}
        <p class="error">{error}</p>
      {/if}
    </div>
    <Button
      variant="primary"
      size="large"
      disabled={name.length === 0 ||
        email.length === 0 ||
        phone.length === 0 ||
        address1.length === 0 ||
        city.length === 0 ||
        country.length === 0 ||
        sex.length < 4 ||
        roles.length < 1}
    >
      Confirm Your Changes
    </Button>
  </form>
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    flex-grow: 1;
    padding: 2rem;
    overflow: scroll;
    background-color: var(--primary-color);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .heading {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .heading h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .heading p {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
    line-height: 20px;
  }

  .input-fields {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  h1 {
    font-size: 16px;
    font-weight: 600;
  }

  input,
  select {
    width: 100%;
    border: solid 1px var(--tertiary-color);
    background-color: var(--secondary-color);
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
  }

  .error {
    color: var(--destructive-color);
    font-size: 12px;
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .link p {
    font-size: 14px;
    opacity: 0.6;
  }

  p.terms {
    font-size: 12px;
    opacity: 0.5;
  }

  /* floating lables */

  .entryarea {
    position: relative;
  }

  .labelline {
    position: absolute;
    top: 20%;
    left: 10px;
    color: bisque;
    font-weight: 100;
    pointer-events: none;
    /* font-size: medium; */
  }

  /* input:focus {
    color: #66ff00;
    border: 3px solid #66ff00;
  } */

  input:focus + .labelline,
  input:valid + .labelline {
    transform: translate(-10px, -18px) scale(0.9);
    font-weight: bold;
    transition: 0.2s ease all;
    background-color: var(--secondary-color);
    z-index: 1111;
  }

  input:invalid + .labelline {
    background-color: var(--secondary-color);
    color: var(--accent-color);
    font-weight: 200;
  }
</style>
