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
        display: flex;
        flex-wrap: wrap; /* Allow content to wrap when screen size is smaller */
        justify-content: center; /* Center the items */
        align-items: center;
        gap: 30px;
        width: 100vw;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        padding: 10px;
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

    @media (max-width: 768px) {
        .super-container {
            flex-direction: column; /* Stack items vertically on smaller screens */
        }

        h1 {
            font-size: 2rem; /* Adjust font size for smaller screens */
        }
    }
</style>
