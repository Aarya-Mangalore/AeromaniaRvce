<script>
  export let logo; // URL for the logo image
  export let name; // Name or description of the logo
  export let link;
</script>

<a href={link}>
  <div class="social-card">
    <img src={logo} alt="{name} logo" class="social-logo" />
    
    <h2 class="social-heading">{name}</h2>
  </div>
</a>

<style>
  .social-card {
      display: flex;
      flex-direction: row; /* Aligns content horizontally */
      align-items: center; /* Centers items vertically */
      border-radius: 10px;
      padding: 15px 20px;
      width: 350px; /* Default width for larger screens */
      max-width: 70%; /* Ensures consistent width relative to screen size */
      background-color: #1e1e1e; /* Match the dark background style */
      position: relative;
      transition: transform 0.7s ease-out, box-shadow 0.3s ease; /* Smooth transitions */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .social-card:hover {
      transform: translateY(-10px); /* Lift on hover */
      box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2); /* Neon shadow effect */
  }

  .social-card:hover .social-logo {
      border-bottom: 5px solid #017e75; /* Neon border for the logo */
      border-radius: 20%; /* Add rounded border for hover effect */
  }

  .social-logo {
      width: 60px; /* Logo size */
      height: 60px;
      object-fit: contain;
      margin-right: 15px; /* Space between image and text */
      border: 2px solid #4e4e4e00; /* Default border */
      border-radius: 20%; /* Round logo appearance */
      transition: border-color 0.3s ease; /* Smooth border change on hover */
  }

  .social-heading {
      font-size: 1rem;
      text-align: left;
      color: #ffffff;
      flex-grow: 1; /* Ensures the text takes available space */
      transition: color 0.3s ease; /* Smooth color transition */
  }

  .social-card:hover .social-heading {
      color: #00e6cc; /* Neon text color on hover */
  }

  /* Responsive Design */
  @media (max-width: 600px) {
      .social-card {
          width: 30vh; /* Consistent width for small screens */
          max-width: none; /* Remove max-width restriction */
          padding: 10px 15px; /* Adjust padding for smaller screens */
      }

      .social-logo {
          width: 50px; /* Smaller logo on small screens */
          height: 50px;
      }

      .social-heading {
          font-size: 0.9rem; /* Slightly smaller font size */
      }
  }
</style>
