<script>
    import logo from '$lib/assets/logos/Aeromania4.png';
  </script>
  
  <!-- Top Left Container -->
  <div class="top-left">
    <a href="/" class="button">Home</a>
    <a href="/about" class="button">About</a>
    <a href="/sponser" class="button sponsor">Sponsors</a>
  </div>
  
  <!-- Top Right Container -->
  <div class="top-right">
    <a href="/events" class="button events">Events</a>
    <a href="/workshops" class="button">Workshops</a>
    <a href="/entertainment" class="button">Entertainment</a>
  </div>
  
  <!-- Bottom Left Container -->
  <div class="bottom-left">
    
    <a href="https://www.instagram.com/aeromania_rvce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="button">Instagram</a>
  </div>
  
  <!-- Bottom Right Container -->
  <div class="bottom-right">
    <a href="/contact" class="button">contact us</a>
  </div>
  
  <!-- Logo -->
  <div class="logo">
    <a href="/"><img src="{logo}" alt="Logo" /></a>
  </div>
  
  <style>
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      color: white;
    }
  
    /* Container Styling with Cut Corner */
    .top-left,
    .top-right,
    .bottom-left,
    .bottom-right {
      position: fixed;
      background: #222222;
      padding: 20px;
      display: flex;
      flex-direction: row; /* Horizontal layout */
      justify-content: flex;
      align-items: center;
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
      z-index: 1; /* Ensure content is above the pseudo-element */
      overflow: hidden; /* Prevent the content from overflowing outside the clipped area */
    }
  
    .top-left::before,
    .top-right::before,
    .bottom-left::before,
    .bottom-right::before {
      content: '';
      position: absolute;
      top: -2px; /* Adjust to compensate for the border */
      left: -2px;
      right: -2px;
      bottom: -2px;
      border: 25px rgba(194, 194, 194, 0.716); /* Border for the clipped shape */
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 20px) 100%, 0 100%);
      z-index: -1; /* Ensure the border is behind the content */
    }
  
    /* Logo Styling (Make anchor tag functional but without hover effect) */
    .logo a {
      background: transparent;
      display: inline-block;
      pointer-events: auto; /* Ensure the anchor is clickable */
    }
  
    /* No hover effect on logo */
    .logo a:hover {
      background: transparent;
      box-shadow: none;
      color: inherit;
    }
  
    /* Top Left Container */
    .top-left {
      top: 0px;
      left: 0px;
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 40px) 100%, 0 100%);
    }
  
    /* Top Right Container with top-right cut */
    .top-right {
      top: 0px;
      right: 0px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 20px));
    }
  
    /* Bottom Left Container with bottom-left cut */
    .bottom-left {
      bottom: 0px;
      left: 0px;
      clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 20px, 100% 100%, 0 100%);
    }
  
    /* Bottom Right Container with bottom-right cut */
    .bottom-right {
      bottom: 0px;
      right: 0px;
      clip-path: polygon(100% 100%, 0 100%, 0 calc(20px), calc(40px) 0, 100% 0);
    }
  
    /* Common Button Styling */
    a,
    button {
      padding: 15px 25px;
      background: #222222;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 1rem;
      border-radius: 0;
      margin: 0 5px;
      transition: all 0.3s ease;
      cursor: pointer;
      height: 100%;
    }
  
    /* Hover Effects for other buttons */
    a:hover,
    button:hover {
      background: radial-gradient(circle, #00ffee79, black);
      border-color: cyan;
      box-shadow: inset 0px 0px 10px cyan, 0px 0px 15px cyan;
      color: white;
    }
  
    /* Logo Styling */
    .logo {
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 200;
      

    }
  
    .logo img {
      height: auto;
      width: 20vw;
    }
  
    /* Responsive Layout */
    @media (max-width: 768px) {
      .top-left,
      .top-right,
      .bottom-left,
      .bottom-right {
        flex-direction: column; /* Stack buttons vertically on small screens */
        justify-content: center;
        align-items: center;
        width: 100%;
      }
  
      .top-left a,
      .top-right a,
      .bottom-left button,
      .bottom-right a {
        padding: 12px 20px;
      }
    }
  </style>
  