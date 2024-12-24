<script>
    import Container from "$lib/components/ContainerBoxwithvariabletab.svelte";
    import Button from "$lib/components/Button.svelte";
    import { text } from "@sveltejs/kit";
</script>

<main>
    <h1>Events</h1>
    
    <div class="super-container">
        <Container
            head="AEROCATACLYSM"
            path="/event/aerocataclysm.jpg"
            text="Analyze real cockpit recordings and lifelike scenarios to uncover the mystery of an aircraft crash."
            tab1text="Prize:"
            tab1val="₹ 10000"
            tab2text="Registration fee:"
            tab2val="₹ 799"
            Button2text="Results"
            form="/results#aerocataclysm"
            rule="https://drive.google.com/file/d/1O_o0F5BXJjmI6D6BSh24WhFEjv98Y0cu/view?usp=sharing"
            title1="Round 1"
            date="19th December 2024"
            time="3:30 PM"
            title2="Round 2"
            date2="20th December 2024"
            time2="3:30 PM"
        />

        <Container
            head="AERO ODYSSEY"
            path="/event/aeroodyssey.jpg"
            Button2text="Results"
            form="/results#aeroodessy"
            text="Embark on a thrilling treasure hunt, solve clues, and race to build and launch rockets in this ultimate test of teamwork, creativity, and engineering!"
            tab1text="Prize:"
            tab1val="₹ 5000"
            tab2text="Registration fee:"
            tab2val="₹ 399"
            rule="https://drive.google.com/file/d/1X4GEvMaePzVqVTKaxsZFmv9IiEutNkVm/view?usp=drive_link"
            date="19th December 2024"
            time="11:30 AM"
        />

        <Container
            head="SKYFORGE"
            path="/event/skyforge.jpg"
            text="Compete in a thrilling design event where your team bids for parts and crafts a unique airliner. The best pitch and design will soar to victory!"
            tab1text="Prize:"
            tab1val="₹ 8000"
            tab2text="Registration fee:"
            tab2val="₹ 599"
            Button2text="Results"
            form="/results#skyforge"
            rule="https://drive.google.com/file/d/16OJA4xHnTJNM286LSOLkkZKKHIKhEkIk/view?usp=sharing"
            title1="Round 1"
            date="19th December 2024"
            time="2:00 PM"
            title2="Round 2"
            date2="20th December 2024"
            time2="10:30 AM"
        />

        <Container
            head="AEROGENESIS"
            path="/event/aerogenisis.jpg"
            text="An overnight hackathon unleashing creativity to tackle aerospace challenges and redefine the skies with innovative solutions."
            tab1text="Prize:"
            tab1val="₹ 30000"
            tab2text="Registration fee:"
            tab2val="₹ 1499"
            Button2text="Results"
            form="/results#aerogenesis"
            rule="https://drive.google.com/file/d/1QiotpYwQcixGVbT-G2_15svPjtEHOsXJ/view?usp=sharing"
            date="20th December 2024"
            time="9:00 PM"
        />

        <Container
            head="DESIGN DYNAMO"
            path="/event/designdynamo.jpg"
            text="A high-speed design challenge where CAED enthusiasts create aerospace components from 2D layouts to 3D models, testing your speed and accuracy to the limit!"
            tab1text="Prize:"
            tab1val="₹ 3000"
            Button2text="Results"
            form="/results#design-dynamo"
            tab2text="Registration fee:"
            tab2val="₹ 249"
            rule="https://drive.google.com/file/d/1YAHogYW54cEJYqw9-jh2ymPIU1TXkVPy/view?usp=drive_link"
            date="20th December 2024"
            time="9:30 AM"
        />

        <!--<Container
            head="PAYLOAD PARADOX"
            path="/event/payloadparadox.jpg"
            text="Showcase your ingenuity in this engineering challenge to create a groundbreaking drone payload drop mechanism. Precision, creativity, and compliance will lead you to victory!"
            tab1text="Prize:"
            tab1val="₹ 12000"
            tab2text="Registration fee:"
            tab2val="₹ 999"
            form="https://forms.gle/wzPdSvcf2oca5zZn6"
            rule="https://drive.google.com/file/d/1WdLgnJcOIN-De8cKGSaFw9iXplY54WGc/view?usp=drive_link"
            date="20th December 2024"
        />-->

        
        <Container
            head="THE LOST ASTRONAUT"
            path="/event/lostastronaut.jpg"
            text="Test your problem-solving skills in a space-themed escape room, where deciphering clues will be the key to unlocking the final exit!"
            tab1text="Prize:"
            tab1val="₹ 3000"
            tab2text="Registration fee:"
            tab2val="₹ 299"
            Button2text="Results"
            form="/results#thelostastronaut"
            rule="https://drive.google.com/file/d/1gpghVb6chKZtZ0tv3UJMcm5VpDhTs_uB/view?usp=sharing"
            date="20th December 2024"
            time="3:15 PM"
        />
    </div>

    <div class="container">
        <h3>Looking for Pre-events?</h3>
        <p>Click below to continue</p>
        <Button Text="Pre-events" link="/pre-events" />
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

        .container h3 {
            font-size: 1.4rem;
        }

        .container p {
            font-size: 1rem;
        }
    }
</style>
