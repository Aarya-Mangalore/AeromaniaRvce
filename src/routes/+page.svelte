<script>
    import Logo from "$lib/assets/logos/Aeromania3.png";
    import Button from "$lib/components/Button.svelte"; 
    import Count from "$lib/components/Timer.svelte"; 
    import Video from "$lib/components/video.svelte";
    import { text } from "@sveltejs/kit";
    import '../app.css';
    const targetDate = new Date("2024-12-31T23:59:59");
    import Foot from '../lib/components/Footer.svelte';
    import Photos from "$lib/components/Photogallery.svelte";
    const galleryImages = [
        "/images/2023/img1.jpg",
        "/images/2023/img2.jpg",
        "/images/2023/img3.jpg",
        "/images/2023/img4.jpg",
        "/images/2023/img5.jpg"
    ];

    // Scroll to "Hello Aeromaniacs" after 6 seconds
    import { onMount } from 'svelte';

    onMount(() => {
        setTimeout(() => {
            const helloAeromaniacs = document.querySelector('h1');
            if (helloAeromaniacs) {
                helloAeromaniacs.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 6000); // Scroll after 6 seconds
    });
</script>

<main>
    <Video />
    <div class="container">
        <div class="text-container">
            <h1>
                Hello Aeromaniacs
            </h1>
            <p>
                Get thrilled to enjoy the aero events conducted by aerospace students of R.V College of Engineering.
            </p>
            <br><br><br><br><br><br>

            <div class="Timer">
                <h1>
                    We are coming Soon
                </h1>
                <Count />
            </div>
            <br><br><br><br><br><br>
        </div>
    </div>

    <h1>
        About Aeromania
    </h1>
    <div class="container">
        <div class="content-container">
            <div class="text-container">
                <p>
                    AeroMania is a 3-day Aero Technical fest organized
                    by the Department of Aerospace Engineering at RV
                    College of Engineering, Bangalore. AeroMania aims
                    to bring together enthusiasts from various engineering
                    colleges, providing a platform for participants to
                    learn, grow, and showcase their creativity in the field
                    of aerospace engineering.
                </p>
            </div>
            <div class="video-container">
                <img src="/images/comingsoon.png" alt="A visual placeholder for the video">
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="text-container">
            <h1> 
               Title sponsor
            </h1>
            <h3>
                Loading.....
            </h3>
        </div>
    </div>

    <div class="container">
        <h1>
            Photo Gallery
        </h1>
        <Photos images={galleryImages} />
    </div>

    <div class="container">
        <div class="text-container">
            <h1> 
               Learn more
            </h1>
            <p>
                To get more info about us please check the brochure given below
            </p>
        </div>
        <br><br>
        <Button Text="Brochure" link="https://drive.google.com/file/d/1Rq2L39_z-mfKqQ24Ogqlip2mS6qzvPsp/view?usp=sharing" />
    </div>

    <Foot />
</main>

<style>
    /* General container settings */

    .Timer{
        pointer-events: none;
    }
    .container {
        display: flex; 
        align-items: center; 
        padding: 2%; 
        flex-direction: column;
        padding-bottom: 10%;
    }

    .content-container {
        display: flex; 
        justify-content: space-between;
        align-items: flex;
        width: 100%;
    }

    .text-container {
        width: 45%;
        padding-left: 20px; 
        color: aliceblue;
        text-align: center;
    }

    .video-container {
        width: 50%;
        padding-left: 20px; 
        display: flex;
        justify-content: center;
        height: auto;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        padding: 10px;
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
        transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
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
        .register_main {
            width: clamp(150px, 20vw, 200px);
            height: clamp(150px, 20vw, 200px);
        }

        .register_main p {
            font-size: 1.2rem;
        }

        .content-container {
            flex-direction: column;
            align-items: center;
        }

        .text-container, .video-container {
            width: 90%;
            margin-bottom: 20px;
        }

        h1 {
        font-size: 2rem;
        font-weight: 500;
        padding: 10px;
        font-weight: 800;
    }

    p {
        font-size: 1.25rem;
        padding: 0;
        user-select: none;
    }
    }
</style>
