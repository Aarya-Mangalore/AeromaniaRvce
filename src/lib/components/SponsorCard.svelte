<script>
  export let imageurl = '/sponser/lakshmiji.png';
  export let hrefURL;
  export let name = 'Sponsor Name';
</script>

<style>
  .card-container {
    max-width: 300px; /* Fixed maximum width */
    width: 100%; /* Make it responsive */
    margin: auto; /* Center the card horizontally */
  }

  .card {
    width: 100%; /* Responsive width */
    aspect-ratio: 1 / 1; /* Ensures a perfect square */
    padding: 10px;
    border-radius: 8px;
    background: transparent; /* Fully transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Stack image and text */
    overflow: hidden;
    position: relative; /* Ensure hover effects are confined to the card */
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .card-container:hover .card {
    transform: scale(1.05); /* Slight scaling effect for the card */
    background: radial-gradient(circle, rgba(0, 255, 255, 0.755) 0%, rgb(15, 15, 15) 75%);
    background-clip: padding-box; /* Ensure the gradient fits within the card container */
  }

  .image {
    width: 70%; /* Image takes 80% of the card's width */
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensures the image is scaled properly within its container */
    display: block;
    margin: auto;
    transition: transform 0.3s ease; /* Smooth transition */
  }

  .card-container:hover img {
    transform: scale(1.1); /* Slight zoom on the image */
  }

  .name-container {
    margin-top: 10px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff; /* Default text color */
    transition: color 0.3s ease; /* Prepare for hover effect */
  }

  @media (max-width: 830px){
    .card-container{
      width: 90%;
      max-width: 500px;
    }

    .image{
      width:70%
    }

    .card-container:hover .card {
    background: radial-gradient(circle, rgba(0, 255, 255, 0.755) 0%, rgba(15, 15, 15, 0) 70%);
  }
  }
</style>

<div class="card-container">
  <a class="card" href={hrefURL} target="_blank" rel="noopener noreferrer">
    <img class="image" src={imageurl} alt={name} />
  </a>
</div>
