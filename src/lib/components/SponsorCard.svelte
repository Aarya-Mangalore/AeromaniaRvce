<script>
  export let imageurl = '/sponser/lakshmiji.png';
  export let hrefURL = '';
  export let name = 'Sponsor Name';
</script>

<style>
  .card-container {
    max-width: 300px; /* Fixed maximum width */
    width: 100%; /* Make it responsive */
    margin: auto; /* Center the card horizontally */
  }

  .card {
    width: 100%;
    height: auto; /* Auto-adjusting height */
    min-height: 400px; /* Default min-height for larger screens */
    padding: 10px;
    border-radius: 8px;
    background: transparent; /* Fully transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Stack image and text */
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  /* Add hover effects for image */
  .image {
    width: 90%;
    height: auto;
    display: block;
    margin: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  }

  /* Hover effect on image */
  .card-container:hover img {
    transform: scale(1.1); /* Slight zoom on the image */
    box-shadow: 0 0 15px 4px rgba(0, 255, 255, 0.8); /* Cyan glow effect on the image */
  }

  .card:hover .name-container {
    color: #1f9cb3; /* Change text color */
    transition: color 0.3s ease; /* Smooth color transition */
  }

  .name-container {
    margin-top: 10px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff; /* Default text color */
    transition: color 0.3s ease; /* Prepare for hover effect */
  }

  /* Ensure two cards per row on smaller screens */
  @media (max-width: 800px) {
    .super-duper-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .card-container {
      width: 45%; /* Make cards take up 45% of the width */
      margin-bottom: 20px; /* Space between cards */
    }

    .card {
      min-height: 350px; /* Reduced min-height for smaller screens */
    }

  }

  /* On very small screens, adjust card size */
  @media (max-width: 500px) {
    .card-container {
      width: 100%; /* Cards take full width on very small screens */
    }

    .card {
      min-height: 300px; /* Further reduced min-height for very small screens */
    }
    
    .name-container{
      font-size: 1rem;
    }
  }
</style>

<div class="card-container">
  <a class="card" href={hrefURL} target="_blank" rel="noopener noreferrer">
    <img class="image" src={imageurl} alt={name} />

  </a>
</div>
