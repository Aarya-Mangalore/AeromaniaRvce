<script>
    import Containerl from "$lib/components/ContainerwithSingleTab.svelte";
    import Containerr from "$lib/components/ContainerBoxrightTab.svelte";
    import Placer from "$lib/components/placeholder.svelte";
</script>

<main>
    <h1>Workshops</h1>
    <br><br>
    <div class="super-container">
        <Containerl 
            head="STATIC FIRE FIESTA" 
            path="/event/sft.png" 
            text="Join a hands-on workshop to create solid rocket propellants and put your skills to the test in a thrilling live thrust showdown!"
            fee=1199
            dis="Join us for an exhilarating journey into the world of rocketry with our Solid Rocket Motor Workshop! This hands-on event offers participants the unique opportunity to delve into the science of propulsion, craft their own solid propellant grains, and fire them under supervision. Discover the principles that power rockets, gain practical experience in motor fabrication, and feel the thrill of testing your creation in action. Perfect for aspiring aerospace engineers, science enthusiasts, or anyone curious about the mechanics of space exploration, this workshop promises an unforgettable blend of learning, creativity, and excitement."
            />

            <Containerl 
            head="BLACK HOLE SPACE TECH" 
            path="/event/Blackhole.jpeg" 
            text="Join a hands-on workshop on satellite simulations, recognized by ISRO, and dive into the tech shaping the future of space exploration!"
            rule="https://drive.google.com/file/d/1P8u46iAvlgvz_FeXBv87X0nHkc8ZAj6s/view?usp=sharing"
            fee=550
            />
        <Placer />
    </div>
</main>

<style>
    .super-container {
        position: absolute;
        display: flex; /* Use flexbox for layout */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
        flex-wrap: wrap; /* Wrap items if the screen is too small */
        width: 100%;
        gap: 70px; /* Space between the items */
        padding: 20px; /* Add padding around the container */
    }

    h1 {
        font-size: 3rem;
        font-weight: 500;
        padding-top: 20px;
        text-align: center;
        text-transform: uppercase;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    @media (max-width: 830px) {
        .super-container {
            flex-direction: column; /* Stack items vertically on smaller screens */
            align-items: center; /* Center the items horizontally */
            gap: 20px; /* Reduce gap for better space utilization */
        }

        h1 {
        font-size: 1.4rem;
        font-weight: 500;
        padding: 0px;
        text-align: center;
    }
    }
</style>
