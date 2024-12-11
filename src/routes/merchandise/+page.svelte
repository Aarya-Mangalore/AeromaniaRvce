<script>
    import Photo from "$lib/components/Photogallery.svelte";
    import ItemCard from "$lib/components/ItemCard.svelte";

    const shirtImages = [
        "/images/merch/shirt/front.jpg",
        "/images/merch/shirt/back.jpg",
    ];

    const hoodieImages = [
        "/images/merch/hoodie/front.jpg",
        "/images/merch/hoodie/back.jpg",
    ];

    const Trend = [
        "/images/merch/shirt/front.jpg",
        "/images/merch/shirt/back.jpg",
        "/images/merch/hoodie/front.jpg",
        "/images/merch/hoodie/back.jpg",
    ];
</script>

<main>
    <h1>
        Merchandise
    </h1>

    <div class="container">
        <div class="text-container">
            <h1>
                Currently Trending
            </h1>
            <h3>
                Grab yours now!!!!
            </h3>
        </div>
        <div class="photo">
            <Photo images={Trend} width="500px" height="500px" interval=1sec />
        </div>
    </div>

    <h1>
        Buy our best of the deals
    </h1>

    <div class="item-list">

        <ItemCard
            Itemname="Aeromania T-shirt"
            staticImage="/images/merch/shirt/front.jpg"
            galleryImages={shirtImages}
            price="400"
        />

        <ItemCard
            Itemname="Aeromania Hoodie"
            staticImage="/images/merch/hoodie/front.jpg"
            galleryImages={hoodieImages}
            price="999"
        />

    </div>
</main>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 20px auto;
    }

    /* Keep 'Merchandise' on top */
    h1 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 10px;
        padding: 20px;
        text-transform: uppercase;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding: 20px;
        text-align: center;
    }

    .text-container h1 {
        font-size: 1.8rem;
        margin-bottom: 10px;
    }

    .text-container h3 {
        font-size: 1.2rem;
    }

    .photo {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }

    .item-list {
        display: flex;
        gap: 20px;
        justify-content: space-evenly; /* Spread out cards evenly */
        margin-top: 20px;
        flex-wrap: wrap; /* Allow wrapping if there are too many cards */
        width: 90%; /* Ensure cards don't go beyond container width */
        margin: auto;
    }

    .item-list > * {
        flex: 1 1 calc(25% - 20px); /* Flex items take up 25% of the width minus gap */
        max-width: 300px; /* Limit card width */
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.8rem;
        }

        /* Stack items vertically on smaller screens */
        .container {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .text-container h1 {
            font-size: 1.7rem;
        }

        .text-container h3 {
            font-size: 1.5rem;
        }

        .photo {
            width: 100%;
            justify-content: center;
        }

        .item-list {
            flex-direction: column; /* Stack cards vertically */
            align-items: center;
            gap: 10px;
        }

        .item-list > * {
            flex: 1 1 100%; /* Full width for smaller screens */
            max-width: 100%; /* Remove max-width limit */
        }
    }
</style>

