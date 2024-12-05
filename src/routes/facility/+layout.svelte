<script>
  import Title from '../../lib/components/Title.svelte';
  import Nav from '../../lib/components/Navbar.svelte';
  import Foot from '../../lib/components/Footer.svelte';
  import '../../app.css';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();
</script>

<!-- Head section for meta tags -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>




<main class="content">
  <br />
  <br />
  <br />
  <br />
  <br />
  <slot />
  <br />
  <br />
</main>



<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }

  .content {
    flex-grow: 1;
    /* Ensures the content fills the remaining space above the footer */
  }

  /* Ensure the footer stays at the bottom */
  .footer {
    position: relative; /* Allows for the footer content to be on top */
    z-index: 10;
  }
</style>