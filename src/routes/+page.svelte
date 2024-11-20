<script>
    import Logo from "$lib/assets/logos/Aeromania3.png";
    import Button from "$lib/components/Button.svelte"; 
    import Count from "$lib/components/Counter.svelte"; 
    import Video from "$lib/components/video.svelte";
    import '../app.css';
</script>

<main>
    <Video />
    <div class="container">
        <div class="welcome-text-container">
            <h1>
                Hello Aeromaniacs
            </h1>
            <p>
                Get thrilled to enjoy the aero events conducted by aerospace students of R.V College of Engineering.
            </p>
            <br><br>
            <h1>
                Coming Soon
            </h1>
        </div>
    </div>

    <div class="container">
        <div class="text-container">
            <h1> 
                Who Are we?
            </h1>
            <p>
                We are aerospace engineering students, providing insights into the aerospace industry and the workings of certain models 
                through some fun activities... join us in this venture by exploring our <a href="./events">Events</a> section
            </p>
        </div>
    </div>

    <div class="container">
        <div class="image-container">
            <img alt="Aeromania video" src="https://youtu.be/uHgt8giw1LY?si=G2foSsvGU5exnAjC">
        </div>
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
    </div>

    <div class="container">
        <div class="text-container">
            <h1> 
               Title sponsor
            </h1>
            <img alt="Sponsor image" src="/images/plane.jpg">
        </div>
    </div>

    <!-- REGISTER Button (Circle) -->
    <a href="/events">
        <div class="registercirlce">
            <div class="register_main">
                <video class="register_video" autoplay muted loop>
                    <source src="/video/radar.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>Get into lobby</p>
            </div>
        </div>
    </a>
</main>

<style>
    /* General container settings */
    .container {
        display: flex; 
        align-items: left; 
        padding: 2%; 
        flex-direction: column;
    }

    .image-container {
        width: 100%; 
        display: flex; 
        justify-content: center; 
        height: 30vh;
        padding: 0;
        padding-bottom: 10%;
    }

    .text-container {
        width: 100%;
        padding-left: 20px; 
        color: aliceblue;
        text-align: center;
    }

    .welcome-text-container {
        width: 100%;
        padding-left: 20px; 
        color: aliceblue;
        text-align: left;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        padding: 10px;
    }

    p {
        font-size: 1rem;
        padding: 0;
        user-select: none;
    }

    img {
        max-width: 90%; 
        height: 50%;
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
    }
</style>
