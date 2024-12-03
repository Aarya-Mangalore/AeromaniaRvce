<script>
  export let imageurl = "/sponser/lakshmiji.png";
  export let hrefURL = "";
  export let name = "Sponsor Name";
</script>

<div class="card-container">
  <a class="card" href={hrefURL} target="_blank" rel="noopener noreferrer">
    <img class="image" src={imageurl} alt={name} />
    <div class="name-container">{name}</div>
  </a>
</div>

<style>
  .card-container {
    width: 100%; /* Full width for smaller screens */
    max-width: 350px; /* Max width for larger screens */
    margin: auto; /* Center the card horizontally */
    padding: 10px;
  }

  .card {
    width: 100%;
    min-height: 400px; /* Minimum height */
    padding: 10px;
    border-radius: 8px;
    background: transparent; /* Transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Stack image and text */
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .image {
    width: 150px; /* Set the width */
    height: 150px; /* Set the height equal to the width */
    object-fit: cover; /* Ensures the image fills the circle without distortion */
    display: block;
    margin: auto;
    border-radius: 50%; /* Circular shape */
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease; /* Smooth transition */
  }

  .card-container:hover img {
    transform: scale(1.1); /* Zoom in effect */
    box-shadow: 0 0 15px 4px rgba(0, 255, 255, 0.8); /* Glow effect */
  }

  .name-container {
    margin-top: 10px;
    text-align: center;
    font-size: 1.5rem; /* Font size for the sponsor's name */
    font-weight: bold;
    color: #ffffff;
    transition: color 0.3s ease;
  }

  @media (max-width: 800px) {
    .card-container {
      width: 45%; /* Two cards per row */
    }

    .card {
      min-height: auto; /* Smaller height for smaller screens */
    }
  }

  @media (max-width: 400px) {
    .card-container {
      width: 100%; /* Full width for very small screens */
      padding: 5%;
    }

    .card {
      min-height: auto; /* Even smaller height on small screens */
    }

    .name-container {
      font-size: 1rem; /* Smaller text on small screens */
    }

    .image {
      width: 40vw; /* Adjust width for very small screens */
      height: 40vw; /* Adjust height for very small screens */
    }
  }
</style>
