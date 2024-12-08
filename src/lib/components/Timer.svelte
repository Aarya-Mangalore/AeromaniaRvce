<script>
  export let smallIframe;
  export let bigIframe;
</script>

<div class="NavBig">
  <slot name="big">{#if bigIframe}{@html bigIframe}{/if}</slot>
</div>

<div class="NavSmall">
  <slot name="small">{#if smallIframe}{@html smallIframe}{/if}</slot>
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
