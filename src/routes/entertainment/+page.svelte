<script>
    import Containerl from "$lib/components/Container.svelte";
    import Container from "$lib/components/ContainerwithSingleTab.svelte";
</script>

<main>
    <h1>Entertainments</h1>
    <br /><br />
    <div class="super-container">
        <Container
            head="FIFA FIGHT"
            path="/event/fifafight.png"
            text="Join the ultimate FIFA 18 knockout tournament on PS4! Players go head-to-head in single-elimination matches, with each victory bringing them closer to the championship. Prove your skills and claim the title"
            dis="Take control of your favorite teams and players, including legends like Cristiano Ronaldo, Lionel Messi, Neymar, and more! From high-speed counterattacks with Real Madrid to silky skills with Barcelona, every playstyle is at your fingertips. Will you choose the powerhouse teams, or surprise your opponent with an underdog victory?"
            fee="50"
        />

        <Containerl
            head="FPV V/S ASHWA & HELIOS"
            path="/event/fpvvsdrone.jpg"
            text="Experience the thrilling competition between FPV drones and two engineering marvels, 
        Ashwa and Helios cars, in this high-energy event. Watch as FPV drones showcase their impressive aerial agility, 
        navigating through challenging obstacles with unmatched precision and speed. Meanwhile, Ashwa, 
        known for its exceptional precision, demonstrates superior control and performance, while Helios takes on 
        tough terrains, showcasing its off-road prowess. This event highlights the incredible engineering capabilities of 
        each machine, celebrating cutting-edge technology and innovation in a spectacular showdown of speed, control, and 
        durability."
        />

        <Containerl
            head="SOLID MOTOR DEMONSTRATION"
            path="/event/solidmotordemo.jpg"
            text="Step into the exciting world of rocketry at our Solid Motor Demonstration.
            Watch solid rocket motors in action during static tests, offering a fascinating look into the science of thrust, fuel combustion, and propulsion efficiency.
            Discover how solid motors provide reliable, straightforward propulsion, making them a key technology in space exploration.
            With expert explanations and live demonstrations, this showcase offers a deeper understanding of the engineering and innovation driving the future of rocketry and aerospace engineering."
        />

        <Containerl
            head="JET-SET GIGGLES"
            path="/event/jetsetgiggles.jpg"
            text="Prepare for an evening full of laughter at 'Jet-set Giggles,' 
        a stand-up comedy event that combines aviation themes with sharp wit and hilarious punchlines. 
        Enjoy an unforgettable night as comedians take you on a high-flying journey, mixing sky-high humor with clever 
        aviation references. From turbulence in the skies to the quirky world of pilots and passengers, 
        this event promises a perfect blend of lighthearted comedy and aviation antics.
         Don't miss out on this uproarious experience that will have you laughing all the way to the runway!"
        />

        <Containerl
            head="COSMIC WATCH"
            path="/event/cosmicwatch.jpg"
            text="Embark on a mesmerizing stargazing adventure with 'Cosmic Watch.' 
        Explore the mysteries of the night sky while using a captivating solar watch, designed to enhance your celestial 
        journey. Whether you're an avid astronomy enthusiast or simply curious about the cosmos, this experience offers a 
        unique opportunity to gaze at stars, planets, and constellations while learning about the wonders of the universe. 
        With expert guidance, this event promises to ignite your curiosity and deepen 
        your appreciation for the vastness of space!"
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
