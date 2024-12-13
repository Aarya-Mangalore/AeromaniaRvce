<script>
    import PhotoGallery from "$lib/components/Photogallery.svelte";
    import Button from "./Button.svelte";
    export let staticImage; // URL for the static image
    export let galleryImages = []; // Array of gallery images
    export let link="/placeholder"
    export let Itemname="not decided yet" 
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
        <h2 class="price">{Itemname}</h2>
        <div class="table-container">
        <table class="transparent-table">
            <tbody>
                <tr>
                    <td class="label">Price:</td>
                    <td>₹{price}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
        <Button Text="Buy Now" link={link} />
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

    .table-container {
        width: 100%; /* Full width for table */
        margin-top: 20px; /* Space between content and table */
    }

    .transparent-table {
        width: 100%;
        border-collapse: collapse;
        background-color: rgba(255, 255, 255, 0.0); /* Transparent background */
        border-radius: 10px;
    }

    .transparent-table td {
        padding: 10px;
        text-align: center;
        color: white;
        font-size: 1rem;
        font-family: "Josefin Sans", sans-serif;
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
