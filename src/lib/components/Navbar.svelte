<script>
  import { onMount } from 'svelte';
  import logo from '$lib/assets/logos/aerologo.png';

  let menuActive = false;
  let menuRef;
  let toggleRef;

  function toggleMenu() {
    menuActive = !menuActive;
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
      <h1>Aeromania</h1>
    </div>
  </a>

  <!-- Menu with toggle based on menuActive -->
  <ul bind:this={menuRef} class:active={menuActive} class="menu">
    <li><a href="/" on:click={closeMenu}>Home</a></li>
    <li><a href="/about" on:click={closeMenu}>About</a></li>
    <li><a href="/events" on:click={closeMenu}>Events</a></li>
    <li><a href="/entertainment" on:click={closeMenu}>Entertainment</a></li>
    <li><a href="#footer" on:click={closeMenu}>Contact</a></li>
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
    z-index: 100;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo img {
    height: 5vh;
    width: auto;
  }

  .logo h1 {
    color: #fff;
    font-size: 1.5em;
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
  @media (max-width: 992px) {
    .menu {
      display: none;
    }

    .navbar-toggler {
      display: flex;
    }

    .menu.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 75px;
      right: 40px;
      background-color: rgba(0, 0, 0, 0.9);
      padding: 15px;
      border-radius: 5px;
    }
  }

  body {
    padding-top: 75px;
  }
</style>
