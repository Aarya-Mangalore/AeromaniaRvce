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
      width: 350px; /* Adjust width as needed */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #202020;
  }

  .social-card:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .social-logo {
      width: 60px; /* Smaller image */
      height: 60px;
      object-fit: contain;
      margin-right: 15px; /* Space between image and text */
  }

  .social-heading {
      font-size: 1rem;
      text-align: left;
      color: #e5e5e5;
      flex-grow: 1; /* Ensures the text takes available space */
  }
</style>
