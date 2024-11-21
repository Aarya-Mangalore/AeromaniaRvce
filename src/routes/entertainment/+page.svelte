<script>
    import Containerl from "$lib/components/Container.svelte";
    import Containerr from "$lib/components/Container.svelte";
</script>

<main>

    <h1>
        Entertainments
    </h1>
    <br><br>
    <div class="super-container">
        <Containerl 
        head="FPV V/S ASHWA & HELIOS" 
        path="/images/plane.jpg" 
        text="Witness the aerial agility of FPV drones take on Ashwa's precision and Helios's off-road prowess in this high-energy event of engineering excellence." 
         />

        
        
        <Containerl 
        head="SOLID & HYBRID MOTOR DEMOSNTRATION"
        path="/images/plane.jpg" 
        text="Experience the dynamic world of rocketry at our
        Hybrid and Solid Motor Demonstration. Explore
        solid and hybrid rocket motor technologies through
        static tests, gaining insights into thrust and
        propulsion. Don't miss this engaging showcase of
        aerospace engineering!" 
         />


        <Containerr 
        head="Jet-Set Giggles" 
        path="/images/plane.jpg" 
        text="Enjoy a hilarious evening of stand-up comedy, blending aviation themes with witty punchlines and sky-high humor for an unforgettable laugh-out-loud experience!" 
         />

         <Containerl 
        head="Cosmic watch"
        path="/event/cosmicwatch.jpg" 
        text="Join us for a stargazing adventure and discover the wonders of the night sky with a captivating solar watch, perfect for astronomy lovers and curious minds alike!" 
         />

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
        font-size: 2rem;
        font-weight: 500;
        padding: 0px;
        text-align: center;
    }
    }
</style>
