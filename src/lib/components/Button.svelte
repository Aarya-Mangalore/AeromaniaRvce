<script>
  // You can add any necessary JavaScript here if needed
  export let Text = "";
  export let link ="";
</script>

<style>
  /* Button styling */
  .space-button {
      padding: 15px 30px;
      color: #00FFFF; /* Cyan text */
      background-color: #000;
      border: 2px solid #00FFFF; /* Cyan border */
      border-radius: 8px;
      font-size: 18px;
      font-family: sans-serif;
      cursor: pointer;
      transition: all 0.4s ease; /* Smooth transition */
      position: relative;
      overflow: hidden;
      z-index: 1;
  }

  /* Hover effect */
  .space-button::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.4), transparent);
      transition: width 0.4s ease, height 0.4s ease, top 0.4s ease, left 0.4s ease;
      transform: translate(-50%, -50%);
      opacity: 0;
      z-index: -1;
  }

  .space-button:hover::before {
      width: 150%;
      height: 150%;
      opacity: 1;
  }

  .space-button:hover {
      color: #fff; /* Change text to white on hover */
  }
</style>
<a href={link} target="_blank" rel="noopener noreferrer">
<button class="space-button">{Text}</button>
</a>