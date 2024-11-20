<script>
    import Containerl from "$lib/components/ContainerBoxleftTab.svelte";
    import Containerr from "$lib/components/ContainerBoxrightTab.svelte";
</script>

<main>
    

    <h1>Events</h1>
    <br><br>
    <div class="super-container">
        <Containerl 
        head="AEROGENESIS" 
        path="/images/plane.jpg" 
        text="An overnight hackathon to tackle real-world aerospace challenges. Collaborate with industry experts to innovate and design solutions to a surprise challenge." 
        prize=10
        fee=0.5
        form=""
         />

        <Containerr 
        head="PAYLOAD PARADOX" 
        path="/images/plane.jpg" 
        text="Design an innovative payload drop mechanism for drones, ensuring safe release and compliance for victory." 
         />
        
        <Containerl 
        head="AEROCATACLYSM"
        path="/images/plane.jpg" 
        text="Solve the mystery of an aircraft crash using cockpit voice recordings and a lifelike scenario, perfect for logic and reasoning enthusiasts." 
         />

        

        <Containerl 
        head="SKYFORGE"
        path="/images/plane.jpg" 
        text="Unleash your inner entrepreneur by bidding for parts and designing a unique airliner; the best pitch and design wins!" 
         />

        <Containerr 
        head="PAPER PILOTS" 
        path="/images/plane.jpg" 
        text="
Test your engineering skills in the ultimate paper plane competition—design, fold, and compete for distance, height, and accuracy!" 
         />

        <Containerl 
        head="AERO ODYSSEY"
        path="/images/plane.jpg" 
        text="Join the treasure hunt challenge: find clues, build and launch rockets, and race to see whose rocket soars the farthest!" 
         />

        <Containerr 
        head="DESIGN DYNAMO" 
        path="/images/plane.jpg" 
        text="
A fast-paced CAED challenge where you design and assemble aerospace components to exact specs, with speed and accuracy determining the winner!" 
         />

        <Containerl 
        head="THE LOST ASTRONAUT"
        path="/images/plane.jpg" 
        text="A space-themed escape room where you solve complex clues to escape—only the sharpest minds make it to the final exit!" 
         />

    </div>
</main>
<style>
    .super-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        gap: 30px;
        
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
