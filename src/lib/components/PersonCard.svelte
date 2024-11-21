<script>
    export let name = "Singh ka puttar";
    export let role = "Define Role";
    export let ph = "0000000000";
    export let imageurl;
  </script>
  
  <div class="card-container">
    <div class="image-container">
      <img src={imageurl} alt="{name}">
    </div>
    <div class="info-container">
      <h6>{name}</h6>
      <p>{role}</p>
      <p>R.V College of engineering</p>
      <div class="links">
        <a href="tel:{ph}">+91 {ph}</a>
      </div>
      
    </div>
  </div>
  
  <style>
    .card-container {
      width: 100%;
      max-width: 300px;
      background-color: #1e1e1e;
      border-radius: 10px;
      position: relative;
      transition: 0.7s ease-out;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      overflow: hidden;
    }
  
    .image-container {
      width: 75%;
      aspect-ratio: 1;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid #4e4e4e; /* Soft metallic border color */
      margin-bottom: 10px;
    }
  
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  
    .info-container {
      width: 100%;
      background-color: #282828; /* Slightly lighter dark background for info */
      padding: 5px;
      border-radius: 0 0 10px 10px;
      text-align: center;
    }
  
    .info-container h6 {
      margin: 0;
      font-size: 1rem;
      color: #e5e5e5; /* Light text color */
      font-weight: 600;
      letter-spacing: 1px; /* Adds a techy, spaced feel */
    }
  
    .info-container p {
      margin: 5px 0;
      font-size: 0.85rem;
      color: #bbbbbb; /* Soft gray text */
    }
  
    .links {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 10px;
    }
  
    .links a {
      color: #ffffff; /* Neon cyan accent color */
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  
    .links a:hover {
      color: #00e6cc; /* Slightly darker hover effect */
    }
  
    .card-container:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2); /* Soft neon shadow */
    }
  
    .card-container:hover .image-container {
      border-color: #017e75; /* Neon border on hover */
    }
  
    @media (max-width: 768px) {
      .card-container {
        max-width: 45%;
      }

    .info-container h6 {
      font-size: 0.95rem;
    }
  
    .info-container p {
      font-size: 0.85rem;
    }

    .links a {
      font-size: 0.8rem;
    }
    }
  </style>
  