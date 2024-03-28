<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Button from "$lib/components/Button.svelte";
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";

  export let form: ActionData;

  let email = form?.email ?? "";
  let password = form?.password ?? "";

  $: error = form?.message;
</script>

<svelte:head>
  <title>Login</title>
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
      <h1>Login to your Account</h1>
      <p>Login to your Account and get back to your practice with YogaNisha</p>
    </div>

    <div class="input-fields">
      <div class="input-container">
        <div class="entryarea">
          <input type="email" name="email" required bind:value={email} />
          <div class="labelline">Enter Your e-mail</div>
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
          <div class="labelline">Enter your password</div>
        </div>
      </div>

      {#if error}
        <p class="error">{error}</p>
      {/if}
    </div>

    <Button
      variant="primary"
      size="large"
      disabled={email.length === 0 || password.length < 8}
    >
      Log in!
    </Button>
  </form>

  <div class="link">
    <p>Don't have an account?</p>

    <Link href="/auth/create-account">Create Account</Link>

    <p class="terms">
      By logging into your account you accept YogaNisha's privacy policy and
      terms of service.
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

  input {
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

  /* floating lables attempt 3 */

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
