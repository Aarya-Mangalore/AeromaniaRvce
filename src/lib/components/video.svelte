<div class="video-container">
  <video autoplay muted loop id="background-video">
      <source src="/video/Welcome.mp4" type="video/mp4">
      Your browser does not support the video tag.
  </video>
</div>



<style>
.video-container {
  position: relative; /* Position the video relative to the normal document flow */
  width: 100vw; /* Full width of the viewport */
  height: 120vh; /* Full height of the viewport */
  overflow: hidden;
}

#background-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the full screen */
  opacity: 0.7;
}



@media (max-width: 700px) {
  .video-container {
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
  }
  #background-video {
    object-fit: cover; /* Ensures the video covers the full screen even on small devices */
  }
}
</style>
