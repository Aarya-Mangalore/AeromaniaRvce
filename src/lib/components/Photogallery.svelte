<script>
    export let images = []; // Accept an array of image URLs
    let currentIndex = 0; // Track the currently displayed image
    let interval;

    // Function to go to the next image
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
    };

    // Function to go to the previous image
    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    };

    // Start automatic sliding
    const startAutoSlide = () => {
        interval = setInterval(nextImage, 2000);
    };

    // Stop automatic sliding
    const stopAutoSlide = () => {
        clearInterval(interval);
    };

    // Start the auto-slide on component mount
    startAutoSlide();
</script>

<div class="gallery" on:mouseenter={stopAutoSlide} on:mouseleave={startAutoSlide}>
    {#if images.length > 0}
        <img src={images[currentIndex]} alt="Image gallery" class="image" />
        <button class="nav-button prev" on:click={prevImage}>❮</button>
        <button class="nav-button next" on:click={nextImage}>❯</button>
    {/if}
</div>

<style>
    .gallery {
        position: relative;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 10px;
    }

    .image {
        width: 100%;
        height: auto;
        display: block;
        transition: opacity 0.5s ease;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 1.5rem;
        border-radius: 50%;
    }

    .nav-button.prev {
        left: 10px;
    }

    .nav-button.next {
        right: 10px;
    }

    .nav-button:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>
