<script>
    import Logo from "$lib/assets/logos/Aeromania3.png";
    import Button from "$lib/components/Button.svelte"; 
    import Count from "$lib/components/Counter.svelte"; 
    import '../app.css'
</script>

<main>
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

    <!-- Video with 60% width and black transparent overlay -->
    <div class="video-container">
        <video autoplay muted loop id="background-video">
            <source src="/logos/AeromaniaVid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="video-overlay"></div>
    </div>

    <br><br><br><br><br>

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
                The fest features a variety of technical competitions, workshops, and guest
                lectures, fostering collaboration and innovation among aspiring engineers.
                Sponsorships by various organisations act as meaningful partnerships and
                facilitate the successful conduction of the event.
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
                <div class="register_image"></div>
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
        flex-direction: column; /* Stacks elements vertically on smaller screens */
    }

    .image-container {
        width: 100%; 
        display: flex; 
        justify-content: center; 
        height: 30vh; /* Reduced height for smaller screens */
        padding: 0;
        padding-bottom: 10%;
    }

    .text-container {
        width: 100%;
        padding-left: 20px; 
        color: aliceblue;
        text-align: center; /* Centered text for smaller screens */
    }

    .welcome-text-container {
        width: 100%;
        padding-left: 20px; 
        color: aliceblue;
        text-align: left; /* Centered text for smaller screens */
    }

    h1 {
        font-size: 2.5rem; /* Default font size */
        font-weight: 500; /* Make heading slightly bolder */
        padding: 10px;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.03);
        text-decoration-skip-ink:auto;
        transition: 0.3s;
        user-select: none;
    }

    p {
        font-size: 1rem; /* Reduced font size for paragraphs */
        padding: 0;
        user-select: none;
    }

    img {
        max-width: 90%; /* Limit image size on small screens */
        height: 50%; 
    }

    /* Video container and overlay */
    .video-container {
        position: relative;
        width: 50%;
        margin: 0 auto;
        height: auto;
    }

    #background-video {
        width: 100%;
        height: auto;
        object-fit: cover;
        opacity: 0.7;
    }

    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Black transparent overlay */
        z-index: 1;
    }

    /* Media query for larger screens */
    @media (min-width: 600px) {
        .container {
            flex-direction: row; /* Switch back to row layout on larger screens */
        }

        .image-container {
            height: 70vh; /* Keep the larger height on bigger screens */
        }

        h1 {
            font-size: 3rem; /* Slightly larger font size on bigger screens */
        }

        p {
            font-size: 1.2rem;
        }
    }

    /* Additional style adjustments for small screens */
    /* Tablet screens (e.g., 768px to 992px) */
    @media (max-width: 992px) and (min-width: 769px) {
        nav {
            flex-direction: column;
            align-items: center;
            padding: 15px 30px;
        }

        .logo {
            margin-bottom: 15px;
            justify-content: center;
        }

        .menu {
            flex-direction: row; /* Keep menu items in a single row for tablets */
            gap: 15px;
            justify-content: center;
        }

        .navbar-toggler {
            display: none; /* Hide toggler on tablets */
        }
    }

    /* Phone screens (less than 768px) */
    @media (max-width: 768px) {
        .image-container {
            height: 40vh; /* Keep the larger height on bigger screens */
            padding-top: 0%;
        }

        nav {
            flex-direction: column;
            align-items: center;
            padding: 10px 20px;
        }

        .logo {
            margin-bottom: 10px;
            justify-content: center;
            align-items: center;
        }

        .menu {
            flex-direction: column; /* Stack menu items vertically on phones */
            gap: 10px;
            text-align: center;
            align-items: center;
        }

        .navbar-toggler {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
        }

        .menu.active {
            position: absolute;
            top: 80px; /* Adjust menu dropdown position for small screens */
            right: 20px;
            background-color: rgba(0, 0, 0, 0.9);
            border-radius: 8px;
            padding: 15px;
        }

        
    }

/* Circle button styles */
.registercirlce {
    position: fixed;
    bottom: 100px; /* Adjust to 100px above the bottom of the screen */
    left: 3%;
    z-index: 9;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.register_main {
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(100px, 15vw, 200px); /* Adapts size between 100px and 200px */
    height: clamp(100px, 15vw, 200px); /* Adapts size between 100px and 200px */
    position: relative;
    background: none; /* No background or glow initially */
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.register_image {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(from 180deg at 50% 50%, #5b5a5a 0deg, #000 1turn);
    animation: rotateCircle 5s linear infinite;
    flex-shrink: 0;
    transition: filter 0.3s ease, transform 0.3s ease;
}

.register_main p {
    font-size: clamp(0.8rem, 1.2vw, 1.5rem); /* Dynamic text size */
    font-weight: bold;
    color: white;
    z-index: 10;
    position: relative;
    transition: color 0.3s ease, transform 0.3s ease;
}

/* Keyframes for rotating the gradient */
@keyframes rotateCircle {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Hover effects */
.registercirlce:hover .register_main {
    transform: scale(1.1); /* Slightly enlarge on hover */
    background: rgba(0, 255, 255, 0.2); /* Cyan overlay on hover */
    box-shadow: 0 0 20px 10px rgba(0, 255, 255, 0.5); /* Cyan glow effect */
}

.registercirlce:hover .register_image {
    filter: hue-rotate(180deg) brightness(1.5); /* Add cyan tint to the rotating image */
    transform: scale(1.05); /* Slightly enlarge the image on hover */
}

/* Adjustments for smaller screens */
@media (max-width: 768px) { /* Mobile screens */
    .register_main {
        width: clamp(150px, 20vw, 200px); /* Larger minimum radius for smaller screens */
        height: clamp(150px, 20vw, 200px);
    }

    .register_main p {
        font-size: clamp(1rem, 3vw, 1.5rem); /* Slightly larger text on smaller screens */
    }
}


</style>
