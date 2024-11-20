<script>
    import { onMount } from 'svelte';
  
    let showVideo = true;
  
    onMount(() => {
      setTimeout(() => {
        showVideo = false;
      }, 6000); // Hide the container after 7 seconds
    });
  </script>
  
  {#if showVideo}
    <div class="overlay">
      <video autoplay>
        <source src="/video/Welcome.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  {/if}
  
  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999; /* Ensure it's on top of other components */
    }
  
    video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain; /* Adjusts the video size to maintain aspect ratio */
    }
  </style>
  