<script>
  import NavbarSmall from './NavbarSmall.svelte';
  import NavbarBig from './NavbarBig.svelte';
</script>

<div class="NavBig">
  <NavbarBig />
</div>
<div class="NavSmall">
  <NavbarSmall />
</div>

<style>
  /* Default: Show NavbarSmall, hide NavbarBig */
  .NavBig {
    display: none;
  }
  .NavSmall {
    display: block;
  }

  /* For screens larger than 1220px: Show NavbarBig, hide NavbarSmall */
  @media (min-width: 1220px) {
    .NavBig {
      display: block;
    }
    .NavSmall {
      display: none;
    }
  }
</style>
