<script>
    import Containerl from "$lib/components/ContainerBoxleft.svelte";
    import Containerr from "$lib/components/ContainerBoxright.svelte";
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

        <Containerr 
        head="ALAAP & DJ SHOW" 
        path="/images/plane.jpg" 
        text="Prepare for an electrifying DJ show featuring a
        soulful set by Alaap, the esteemed music club of
        RVCE. Renowned for its blend of classical,
        rock, and pop, Alaap captivates audiences at
        national festivals. This evening promises an
        unforgettable fusion of rhythm and energy." 
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
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        gap:30px
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        padding: 10px;
        text-align: center;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }
</style>
