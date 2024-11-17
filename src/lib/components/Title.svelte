<script>
    export let title = "Default Title";
    export let description = "Default description for the page.";
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </svelte:head>
  