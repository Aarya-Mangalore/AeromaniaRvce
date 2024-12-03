<script>
    import Logo from "$lib/assets/logos/Aeromania3.png";
    import Button from "$lib/components/Button.svelte";
    import Count from "$lib/components/Timer.svelte";
    import Video from "$lib/components/video.svelte";
    import Content from "$lib/components/Content.svelte";
    import "../app.css";
    import Foot from "../lib/components/Footer.svelte";
    import Photos from "$lib/components/Photogallery.svelte";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition"; // Import fade transition

    const galleryImages = [
        "/images/2023/img1.jpg",
        "/images/2023/img2.jpg",
        "/images/2023/img3.jpg",
        "/images/2023/img4.jpg",
        "/images/2023/img5.jpg",
    ];

    let showVideo = true;

    onMount(() => {
        // Hide the video component after 5 seconds
        setTimeout(() => {
            showVideo = false;
        }, 5000);

        // Scroll to "Hello Aeromaniacs" after 6 seconds
        setTimeout(() => {
            const helloAeromaniacs = document.querySelector("h1");
            if (helloAeromaniacs) {
                helloAeromaniacs.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 6400);
    });
</script>

<main>
    {#if showVideo}
        <div transition:fade={{ duration: 900 }}>
            <!-- Apply fade transition -->
            <Video path="/video/Welcome.mp4" />
        </div>
    {/if}
    <br /><br />
    <div class="container">
        <div class="text-container">
            <br /><br /><br /><br /><br /><br />

            <div class="Timer">
                <h1>Pre-events</h1>
                <h1>launching in</h1>
                <h1>T-minus</h1>
                <Count />
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    </div>

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
            <h1>Title sponsor</h1>
            <h3>Loading.....</h3>
        </div>
    </div>

    <div class="container">
        <h1>Photo Gallery</h1>
        <Photos images={galleryImages} width="600px" height="800px" />
    </div>

    <a href="/events">
        <div class="registercirlce">
            <div class="register_main">
                <video class="register_video" autoplay muted loop>
                    <source src="/video/radar.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p>Get into lobby</p>
            </div>
        </div>
    </a>

    <div class="container">
        <div class="text-container">
            <h1>Learn more</h1>
            <p>
                To get more info about us please check the brochure given below
            </p>
        </div>
        <br /><br />
        <Button
            Text="Brochure"
            link="https://drive.google.com/file/d/1Rq2L39_z-mfKqQ24Ogqlip2mS6qzvPsp/view?usp=sharing"
        />
    </div>

    <Foot />
</main>

<style>
    /* General container settings */

    .Timer {
        pointer-events: none;
    }
    .container {
        display: flex;
        align-items: center;
        padding: 2%;
        flex-direction: column;
        padding-bottom: 10%;
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

    p {
        font-size: 1.5rem;
        padding: 0;
        user-select: none;
    }

    img {
        max-width: 90%;
    }

    /* Circle button styles */
    .registercirlce {
        position: fixed;
        z-index: 10;
        cursor: pointer;
        bottom: 0; /* Align the button at the very bottom */
        left: 50%;
        transform: translateX(-50%); /* Horizontally center the button */
        margin: 0; /* Ensure no gaps */
    }

    .register_main {
        border-radius: 50%;
        overflow: visible;
        display: flex;
        justify-content: center;
        align-items: center;
        width: clamp(100px, 15vw, 200px);
        height: clamp(100px, 15vw, 200px);
        position: relative;
        background: none;
        transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
    }

    /* Video inside the circular button */
    .register_video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        z-index: 5;
    }

    .register_main p {
        font-size: clamp(0.8rem, 1.2vw, 1.5rem);
        font-weight: bold;
        color: white;
        z-index: 10;
        position: relative;
        text-align: center;
        margin: 0;
    }

    .registercirlce:hover .register_main {
        transform: scale(1.1);
        background: rgba(0, 255, 255, 0.2);
        box-shadow: 0 0 20px 10px rgba(0, 255, 255, 0.5);
    }

    .registercirlce:hover .register_video {
        filter: hue-rotate(180deg) brightness(1.5);
        transform: scale(1.05);
    }

    /* Adjustments for smaller screens */
    @media (max-width: 768px) {
        .registercirlce {
            bottom: 23px; /* Align the button at the very bottom */
        }

        .container {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 10%;
        }

        .register_main {
            width: clamp(150px, 20vw, 200px);
            height: clamp(150px, 20vw, 200px);
        }

        .register_main p {
            font-size: 1.2rem;
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

    }
</style>
