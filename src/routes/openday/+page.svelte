<script>
    import Button from "$lib/components/Button.svelte";
    import Content from "$lib/components/Content.svelte";
    import Photos from "$lib/components/Photogallery.svelte";

    const galleryImages = [
        "/images/2023/img1.jpg",
        "/images/2023/img2.jpg",
        "/images/2023/img3.jpg",
        "/images/2023/img4.jpg",
        "/images/2023/img5.jpg",
    ];
</script>

<main>
    <Content
        Head="About aeromania"
        text="AeroMania is a 3-day Aero Technical fest organized by the
                    Department of Aerospace Engineering at RV College of
                    Engineering, Bangalore. AeroMania aims to bring together
                    enthusiasts from various engineering colleges, providing a
                    platform for participants to learn, grow, and showcase their
                    creativity in the field of aerospace engineering."
        Image="/images/comingsoon.png"
    />

    <div class="container">
        <div class="text-container">
            <h1>why attend open day?</h1>
            <p>
                To get more info about us please check the facilities in our
                department continue by clicking the button below
            </p>
        </div>
        <br /><br />
        <Button Text="Learn more" link="/facility" />
    </div>

    <div class="container">
        <h1>Key take aways</h1>
        <div class="container-container">
            <div class="box"><p>Enhanced vision in aerospace field</p></div>
            <div class="box"><p>Witness the marvel of aerospace engineering</p></div>
            <div class="box"><p>better understanding of let alone therory studied in your class</p></div>
            <div class="box"><p>Good to see RVU girls</p></div>
        </div>
    </div>
</main>

<style>
    /* General container settings */
    .container {
        display: flex;
        align-items: center;
        padding: 5%;
        flex-direction: column;
        padding-bottom: 5%;
    }

    .text-container {
        width: 45%;
        padding-left: 20px;
        color: aliceblue;
        text-align: center;
    }

    h1 {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 500;
        padding: 0px;
        font-weight: 800;
        align-items: center;
        text-align: center;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    h3{
        font-size: 1.3rem;
    }

    .box:hover h3{
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    .box:hover{
        transform: scale(1.05);
        background-color: rgba(240, 255, 255, 0.5);
        border-color: #00ddff;
        border-width: 3px;
        transition: 0.3s;
    }

    p {
        font-size: 1.5rem;
        padding: 0;
        user-select: none;
    }

    img {
        max-width: 90%;
    }

    /* Adjustments for smaller screens */
    @media (max-width: 768px) {
        .container {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 10%;
        }

        .text-container {
            width: 90%;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 1.4rem;
            font-weight: 100;
            font-weight: 800;
        }

        p {
            font-size: 1rem;
            padding: 0;
            user-select: none;
        }

        /* Container for boxes: Stacked on smaller screens */
        .container-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .box {
            width: 100%; /* Full width on small screens */
        }
    }

    /* Default for larger screens: 2 boxes per row */
    .container-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        padding: 30px;
    }

    .box {
        width: 35%; /* 2 boxes per row on large screens */
        background-color: #444;
        padding: 20px;
        color: white;
        border-radius: 20%;
        text-align: center;
    }
</style>
