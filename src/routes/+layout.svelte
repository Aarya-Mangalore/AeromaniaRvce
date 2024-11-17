<script>
    import Title from '../lib/components/Title.svelte';
    import Nav from '../lib/components/Navbar.svelte'
    import Foot from '../lib/components/Footer.svelte'
    import '../app.css'
  </script>
  
  <Title title="Aeromania" description="hosted by Aerospace engineering, in R.V College of Engineering" />
  <Nav/>
  <br><br><br><br>
  
  <slot />

  <Foot />
  