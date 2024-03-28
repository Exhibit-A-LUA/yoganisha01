<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Button from "$lib/components/Button.svelte";
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";

  export let form: ActionData;

  let name = "";
  let email = "";
  let password = "";
  let phone = "";
  let address1 = "";
  let address2 = "";
  let city = "";
  let country = "";
  let sex = "";

  $: error = form?.message;
</script>

<svelte:head>
  <title>Create Account</title>
</svelte:head>

<section class="container">
  <form
    class="form"
    method="post"
    autocomplete="off"
    use:enhance={() => {
      return async ({ update }) => {
        await update({ reset: false, invalidateAll: true });
      };
    }}
  >
    <div class="heading">
      <h1>Create an Account</h1>
      <p>Create an account and get started with YogaNisha</p>
    </div>
    <div class="input-fields">
      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="name" required bind:value={name} />
          <div class="labelline">Your Name</div>
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
        <div class="entryarea">
          <input type="email" name="email" required bind:value={email} />
          <div class="labelline">Your e-mail</div>
        </div>
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input
            type="password"
            name="password"
            required
            bind:value={password}
          />
          <div class="labelline">Your password (at least 8 characters)</div>
        </div>
      </div>

      <div class="input-container">
        <div class="entryarea">
          <input type="text" name="phone" required bind:value={phone} />
          <div class="labelline">Your phone number</div>
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

      {#if error}
        <p class="error">{error}</p>
      {/if}
    </div>
    <Button
      variant="primary"
      size="large"
      disabled={name.length === 0 ||
        email.length === 0 ||
        password.length < 8 ||
        phone.length === 0 ||
        address1.length === 0 ||
        city.length === 0 ||
        country.length === 0 ||
        sex.length < 4}
    >
      Finish Creating Your Account
    </Button>
  </form>
  <div class="link">
    <p>Already have an account?</p>

    <Link href="/auth/login">Log in</Link>

    <p class="terms">
      By creating an account you accept YogaNisha's privacy policy and terms of
      service.
    </p>
  </div>
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
