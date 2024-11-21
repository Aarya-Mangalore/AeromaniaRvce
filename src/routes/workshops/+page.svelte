<script>
    import Containerl from "$lib/components/ContainerWithTab.svelte";
    import Containerr from "$lib/components/ContainerBoxrightTab.svelte";
    import Placer from "$lib/components/placeholder.svelte";
</script>

<main>
    <h1>Workshops</h1>
    <br><br>
    <div class="super-container">
        <Containerl 
            head="STATIC FIRE FIESTA" 
            path="/images/plane.jpg" 
            text="Join a hands-on workshop to create solid rocket propellants and put your skills to the test in a thrilling live thrust showdown!"
        />

        <Placer />
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
