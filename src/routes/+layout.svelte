<script>
  import Title from '../lib/components/Title.svelte';
  import Nav from '../lib/components/Navbar.svelte';
  import Foot from '../lib/components/Footer.svelte';
  import '../app.css';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();
</script>

<!-- Head section for meta tags -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<Title title="Aeromania" description="hosted by Aerospace engineering, in R.V College of Engineering" />
<Nav/>
<br><br><br><br>

<slot />

<br><br><br><br>
<Foot />
