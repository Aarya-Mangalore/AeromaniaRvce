<script>
    import Containerl from "$lib/components/ContainerBoxleft.svelte";
    import Containerr from "$lib/components/ContainerBoxright.svelte";
</script>

<main>
    

    <h1>Events</h1>
    <br><br>
    <div class="super-container">
        <Containerl 
        head="AEROGENESIS" 
        path="/images/plane.jpg" 
        text="Dive into an exhilarating overnight hackathon
        where you and your team will tackle real-world
        challenges in the aerospace industry. Guided by
        industry experts, you'll brainstorm, innovate, and
        design a solution to a surprise challenge that tests
        your skills and creativity." 
         />

        <Containerr 
        head="PAYLOAD PARADOX" 
        path="/images/plane.jpg" 
        text="Put your engineering skills to the test by designing
        an innovative payload drop mechanism for drones.
        Ensure your design keeps the payload intact upon
        release from altitude. The most creative and
        dimension-compliant design will claim victory!" 
         />
        
        <Containerl 
        head="AEROCATACLYSM"
        path="/images/plane.jpg" 
        text="Embark on a thrilling journey to solve the mystery of
        an aircraft crash. Using real cockpit voice recordings
        and a lifelike crash scenario, your team will analyze,
        deduce, and explore the intricate details of aviation
        safety. Ideal for those who love logic and reasoning." 
         />

        <Containerr 
        head="STATIC FIRE FIESTA" 
        path="/images/plane.jpg" 
        text="A rare blend of workshop and competition
        where teams learn to create solid rocket
        propellants and put their skills to the test. The
        grand finale? A live thrust showdown to see
        which team's propellant packs the most power!" 
         />

        <Containerl 
        head="SKYFORGE"
        path="/images/plane.jpg" 
        text="Get ready to unleash your inner entrepreneur!
        In this competitive design event, your team will
        bid for parts in an auction and create a unique
        airliner for a specific purpose. The team with
        the best pitch and design takes the crown." 
         />

        <Containerr 
        head="PAPER PILOTS" 
        path="/images/plane.jpg" 
        text="Test your engineering skills and creativity in
        our ultimate paper plane competition. Learn
        innovative folding techniques, customize
        your designs, and compete against fellow
        aviators. Will your plane fly the farthest,
        highest, or most accurately? It's time to take
        flight and claim victory!" 
         />

        <Containerl 
        head="AERO ODYSSEY"
        path="/images/plane.jpg" 
        text="Calling all clue-hunters! This high-stakes
        treasure hunt challenges your team to go on a
        quest to find clues and treasure. Qualifying
        teams race to build, launch, and see whose
        rocket soars the farthest. The ultimate test of
        teamwork, creativity, and engineering!" 
         />

        <Containerr 
        head="DESIGN DYNAMO" 
        path="/images/plane.jpg" 
        text="CAED enthusiasts, this one's for you! A rapid-fire,
        high-precision design challenge where you'll create
        and assemble aerospace components to exact specs,
        developing a precise 3D model from a 2D layout.
        The fastest, most accurate designer wins in this
        intense showcase of skill." 
         />

        <Containerl 
        head="THE LOST ASTRONAUT"
        path="/images/plane.jpg" 
        text="Immerse yourself in a space-themed escape
        room that tests your problem-solving abilities.
        Move through a series of rooms, deciphering
        complex clues to escape. Only the sharpest
        minds make it to the final exit!" 
         />

        <Containerr 
        head="Event 4" 
        path="/images/plane.jpg" 
        text="IDK" 
         />

    </div>
</main>
<style>
    .super-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        
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
