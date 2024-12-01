<script>
    import PhotoGallery from "$lib/components/Photogallery.svelte";
    import Button from "./Button.svelte";
    export let staticImage; // URL for the static image
    export let galleryImages = []; // Array of gallery images
    export let price; // Item price
</script>

<div class="card">
    <div class="image-container">
        <img
            class="static-image"
            src={staticImage}
            alt="Static Image"
            style="display: {galleryImages.length ? 'block' : 'none'};"
        />
        {#if galleryImages.length > 0}
            <div class="gallery-wrapper">
                <PhotoGallery images={galleryImages} width="100%" height="auto" />
            </div>
        {/if}
    </div>
    <div class="details">
        <h2 class="price">₹{price}</h2>
        <Button Text="Buy Now" link="/placeholder" />
    </div>
</div>

<style>
    .card {
        width: 50vw;
        max-width: 300px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: rgba(190, 188, 188, 0.36);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        padding: 3%;
        margin-top: 30px;
        transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .card:hover::before{
        width: 150%;
        height: 150%;
        opacity: 1;
    }

    .card:hover {
        transform: scale(1.05);
        background-color: #719595;
        border-color: #00ddff;
        border-width: 3px;
    }

    .image-container {
        position: relative;
        width: 100%;
        height: auto;
    }

    .static-image {
        width: 100%;
        height: auto;
        border-radius: 20px;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }

    .card:hover .static-image {
        opacity: 0;
    }

    .gallery-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .card:hover .gallery-wrapper {
        opacity: 1;
        pointer-events: auto;
    }

    .details {
        padding: 20px;
        text-align: center;
        color: whitesmoke;
    }

    .price {
        font-weight: 800;
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: rgb(255, 255, 255);
        text-align: center;
        border-top: 2px solid rgba(255, 255, 255, 0.6);
        border-bottom: 2px solid rgba(255, 255, 255, 0.6);
        padding: 10px 0;
    }

    .card:hover .price {
        background: linear-gradient(45deg, #1e04c4c0, #00b3cbb6);
        -webkit-background-clip: text;
        color: transparent;
        text-decoration: underline;
    }

    /* Responsive Design */
    @media (max-width: 830px) {
        .card {
            width: 80vw;
        }

        .price {
            font-size: 1.2rem;
        }
    }
</style>
