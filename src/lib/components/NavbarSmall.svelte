<script>
    import { onMount } from 'svelte';
    import logo from '$lib/assets/logos/aerologo.png';
  
  
    let menuActive = false;
    let menuRef;
    let toggleRef;
  
    function toggleMenu() {
      console.log("Toggle function called");
      menuActive = !menuActive;
      console.log('Menu toggled', menuActive);
    }
  
    function closeMenu() {
      menuActive = false;
    }
  
    // Close the menu if clicked outside of it
    onMount(() => {
      function handleClickOutside(event) {
        if (menuRef && !menuRef.contains(event.target) && toggleRef && !toggleRef.contains(event.target)) {
          closeMenu();
        }
      }
  
      document.addEventListener('click', handleClickOutside);
      
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  </script>
  
  <nav>
    <a href="/">
      <div class="logo">
        <img src="{logo}" alt="Aeromania Logo" />
        <h1>AEROMANIA</h1>
      </div>
    </a>
  
    <!-- Menu with toggle based on menuActive -->
    <ul bind:this={menuRef} class="menu" class:active={menuActive}>
      <li><a href="/" on:click={closeMenu}>Home</a></li>
      <li><a href="/pre-events" on:click={closeMenu}>Pre-Events</a></li>
      <li><a href="/events" on:click={closeMenu}>Events</a></li>
      <li><a href="/entertainment" on:click={closeMenu}>Entertainment</a></li>
      <li><a href="/workshops" on:click={closeMenu}>Workshops</a></li>
      <li><a href="/results" on:click={closeMenu}>Results</a></li>
      <li><a href="/talks" on:click={closeMenu}>Keynote Talks</a></li>
      <li><a href="/merchandise" on:click={closeMenu}>Merchandise</a></li>
      <li><a href="/openday" on:click={closeMenu}>Open day</a></li>
      <li><a href="/sponser" on:click={closeMenu}>Our Sponsors</a></li>
      <li><a href="/contact" on:click={closeMenu}>Contact us</a></li>
    </ul>
  
    <!-- Toggler for smaller screens -->
    <div bind:this={toggleRef} class="navbar-toggler" on:click={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
  
  <style>
    /* Reset, navbar, and logo styling */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 75px;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 13000;
    }
  
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  
    .logo img {
      height: 7vh;
      width: auto;
    }
  
    .logo h1 {
      color: #fff;
      font-size: 0.9em;
      user-select: none;
    }
  
    /* Menu styling */
    .menu {
      display: flex;
      gap: 20px;
      list-style: none;
      transition: opacity 0.3s ease;
    }
  
    .menu li a {
      color: #fff;
      text-decoration: none;
      font-size: 1em;
      padding: 10px;
      transition: color 0.3s;
    }
  
    .menu li a:hover {
      color: #00ddff;
    }
  
    /* Toggler button for mobile */
    .navbar-toggler {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
    }
  
    .navbar-toggler div {
      width: 25px;
      height: 3px;
      background-color: #fff;
    }
  
    /* Responsive styling */
    @media (max-width: 1145px) {
      .menu {
        position: absolute;
        top: 75px;
        right: 10px;
        background-color: rgba(0, 0, 0, 0.9);
        padding: 10px;
        border-radius: 5px;
        flex-direction: column;
        display: none;  /* Hide menu initially */
      }
  
      .navbar-toggler {
        display: flex;
      }
  
      /* Display menu when active */
      .menu.active {
        display: flex;
      }
    }
  
    body {
      padding-top: 75px;
    }
  </style>