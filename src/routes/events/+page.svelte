<script>
    import Containerl from "$lib/components/ContainerWithTab.svelte";
    import Containerr from "$lib/components/ContainerWithTab.svelte";
    import Button from "$lib/components/Button.svelte";
    import { text } from "@sveltejs/kit";
</script>

<main>
    <h1>Events</h1>
    <br /><br />
    <div class="super-container">
        <Containerl
            head="AEROGENESIS"
            path="/event/aerogenisis.jpg"
            text="An overnight hackathon unleashing creativity to tackle aerospace challenges and redefine the skies with innovative solutions."
            form="https://docs.google.com/forms/d/e/1FAIpQLSc5LyYmoQ6HTasaJjtLAjSjMfkmqTacVeja9fJtceQn4jQ51g/viewform"
            rule="https://drive.google.com/file/d/1QiotpYwQcixGVbT-G2_15svPjtEHOsXJ/view?usp=sharing"
            prize="30000"
            fee="1499"
        />
        <Containerr
            head="AEROCATACLYSM"
            path="/event/aerocataclysm.jpg"
            text="Analyze real cockpit recordings and lifelike scenarios to uncover the mystery of an aircraft crash."
            form="https://docs.google.com/forms/d/e/1FAIpQLSdnJ8boOy5YGdBiOowg_ltX7wSdgmNVeaDoBQ9HbraDX7bbMQ/viewform"
            rule="https://drive.google.com/file/d/1O_o0F5BXJjmI6D6BSh24WhFEjv98Y0cu/view?usp=sharing"
            prize="10000"
            fee="799"
        />
        <Containerl
            head="SKYFORGE"
            path="/event/skyforge.jpg"
            text="Compete in a thrilling design event where your team bids for parts and crafts a unique airliner. The best pitch and design will soar to victory!"
            form="https://forms.gle/dLWpK7ijWbWse31G6"
            rule="https://drive.google.com/file/d/16OJA4xHnTJNM286LSOLkkZKKHIKhEkIk/view?usp=sharing"
            prize="8000"
            fee="599"
        />
        <Containerr
            head="AERO ODYSSEY"
            path="/event/aeroodyssey.jpg"
            text="Embark on a thrilling treasure hunt, solve clues, and race to build and launch rockets in this ultimate test of teamwork, creativity, and engineering!"
            form="https://forms.gle/LQMYApXGjvBTdx2y6"
            rule="https://drive.google.com/file/d/1laKdsfiXnnUlVNyKizSYFRndefhPJsxI/view?usp=sharing"
            prize="5000"
            fee="399"
        />
        <Containerr
            head="PAYLOAD PARADOX"
            path="/event/payloadparadox.jpg"
            text="Showcase your ingenuity in this engineering challenge to create a groundbreaking drone payload drop mechanism. Precision, creativity, and compliance will lead you to victory!"
            prize="12000"
            fee="999"
            rule="https://drive.google.com/file/d/1zx0WxvlpDYhI12xw-whBEUncJKO6gziT/view?usp=sharing"
            form="https://forms.gle/wzPdSvcf2oca5zZn6"
        />
        <Containerr
            head="THE LOST ASTRONAUT"
            path="/event/lostastronaut.jpg"
            text="Test your problem-solving skills in a space-themed escape room, where deciphering clues will be the key to unlocking the final exit!"
            rule="https://drive.google.com/file/d/19UBNg1nZSHkwyBY5hxS2hZUdliRNas-n/view?usp=sharing"
            form="https://forms.gle/57dBW33Bonnd4ZVQ9"
            prize="3000"
            fee="299"
        />
        <Containerl
            head="DESIGN DYNAMO"
            path="/event/designdynamo.jpg"
            text="A high-speed design challenge where CAED enthusiasts create aerospace components from 2D layouts to 3D models, testing your speed and accuracy to the limit!"
            form="https://forms.gle/EQ2P5s48eCCmr4ws5"
            rule="https://drive.google.com/file/d/1xpv4d1q2EWZ_A0hSlKYVc5l19wjrlQAg/view?usp=sharing"
            prize="3000"
            fee="249"
        />
    </div>
    <div class="container">
        <h3>Looking for Pre-events?</h3>
        <p>Click below to continue</p>
        <Button
            Text="Pre-events"
            link="/pre-events"
        />
    </div>
</main>

<style>
    .super-container {
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

    .container {
        text-align: center; /* Center the pre-events text */
        margin-top: 20px; /* Add spacing between the super-container and this text */
        padding: 5%;
    }

    .container h3 {
        font-size: 2rem;
        padding-bottom: 30px;
    }

    .container p {
        color: whitesmoke;
        font-size: 1.3rem;
        padding-bottom: 30px;
        text-align: center; /* Center the text */
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
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

        .container h3{
            font-size: 1.4rem;
        }

        .container p{
            font-size: 1rem;
        }
    }
</style>
