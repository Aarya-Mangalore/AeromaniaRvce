<script>
    import Containerl from "$lib/components/ContainerWithTab.svelte";
    import Containerr from "$lib/components/ContainerWithTab.svelte";
</script>

<main>
    <h1>Events</h1>
    <br /><br />
    <div class="super-container">
        <Containerl
            head="AEROGENESIS"
            path="/event/aerogenisis.jpg"
            text="An overnight hackathon unleashing creativity to tackle aerospace challenges and redefine the skies with innovative solutions."
            form="https://forms.gle/ycC4XDrYP7u7JDvx6 "
            prize="30000"
            fee="1499"
        />
        <Containerr
            head="AEROCATACLYSM"
            path="/event/aerocataclysm.jpg"
            text="Analyze real cockpit recordings and lifelike scenarios to uncover the mystery of an aircraft crash."
            form="https://forms.gle/7R7wTHMUJ5o5BrtM8 "
            rule="https://drive.google.com/file/d/1CZgPROFoy6RH6GwjWxgMcZAwjrE9mWMa/view?usp=drive_link"
            prize="10000"
            fee="799"
        />
        <Containerl
            head="SKYFORGE"
            path="/event/skyforge.jpg"
            text="Compete in a thrilling design event where your team bids for parts and crafts a unique airliner. The best pitch and design will soar to victory!"
            form="https://forms.gle/dLWpK7ijWbWse31G6"
            prize="8000"
            fee="599"
        />
        <Containerr
            head="AERO ODYSSEY"
            path="/event/aeroodyssey.jpg"
            text="Embark on a thrilling treasure hunt, solve clues, and race to build and launch rockets in this ultimate test of teamwork, creativity, and engineering!"
            form="https://forms.gle/NcV6udRcBfQdDext5"
            rule="https://drive.google.com/file/d/1lFuO7gEmmUDcNXlaSLDuo_1867ktXcze/view?usp=drive_link"
            prize="5000"
            fee="399"
        />

        <Containerr
            head="PAYLOAD PARADOX"
            path="/event/payloadparadox.jpg"
            text="Showcase your ingenuity in this engineering challenge to create a groundbreaking drone payload drop mechanism. Precision, creativity, and compliance will lead you to victory!"
            prize="12000"
            fee="999"
            rule="https://drive.google.com/file/d/13RJRHRKv1CEQMuYE3Um95t6CsinRBmiv/view?usp=drive_link"
        />

        <Containerr
            head="THE LOST ASTRONAUT"
            path="/event/lostastronaut.jpg"
            text="Test your problem-solving skills in a space-themed escape room, where deciphering clues will be the key to unlocking the final exit!"
            rule="https://drive.google.com/file/d/1ni1GEa7ZF8balrYbYWLrBA3bhMFLQV-2/view?usp=drive_link"
            form="https://forms.gle/57dBW33Bonnd4ZVQ9"
            prize="3000"
            fee="299"
        />

        <Containerl
            head="PAPER PILOTS"
            path="/event/Paperpilots.jpg"
            text="Unleash your creativity in the ultimate paper plane competition! Design, fold, and customize to outfly the competition and claim the win."
            prize="3000"
            fee="29"
        />

        <Containerl
            head="DESIGN DYNAMO"
            path="/event/designdynamo.jpg"
            text="A high-speed design challenge where CAED enthusiasts create aerospace components from 2D layouts to 3D models, testing your speed and accuracy to the limit!"
            form="https://forms.gle/EQ2P5s48eCCmr4ws5"
            rule="https://drive.google.com/file/d/1FW8hS2Qi4s7shyS4Ua-ZOPvEgzGmWuzn/view?usp=drive_link"
            prize="3000"
            fee="249"
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
