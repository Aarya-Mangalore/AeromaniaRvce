<script>
    import Spons from "$lib/components/SponsorCard.svelte";
    import CirSpons from "$lib/components/CircleSponsorCard.svelte";
</script>

<main>
    <h1>Meet our Sponsors</h1>
    <div class="super-duper-container">
        <div class="super-container">
            <h3>Type 1 Persons</h3>
            <div class="container">
                <CirSpons name="Spons 1" />
                <CirSpons name="Spons 2" />
                <CirSpons name="Spons 3" />
                <CirSpons name="Spons 4" />
                <CirSpons name="Spons 5" />
            </div>
        </div>

        <div class="super-container">
            <h3>Type 2 Persons</h3>
            <div class="container">
                <CirSpons name="Spons 1" />
                <CirSpons name="Spons 2" />
                <CirSpons name="Spons 3" />
                <CirSpons name="Spons 4" />
            </div>
        </div>

        <div class="super-container">
            <h3>Type 3 Persons</h3>
            <div class="container">
                <CirSpons name="Spons 1" />
                <CirSpons name="Spons 2" />
                <CirSpons name="Spons 3" />
            </div>
        </div>

        <div class="super-container">
            <h3>OUR PAST SPONSORS</h3>
            <div class="container">
                <Spons name="Spash hospital" imageurl="/sponser/sparsh.png" hrefURL="https://www.sparshhospital.com/" />
                <Spons name="Boeing" imageurl="/sponser/Boeing.png" hrefURL="https://www.boeing.co.in/"/>
                <Spons name="IIT GATE classes" imageurl="/sponser/IITgate.png" hrefURL="https://www.iitiansgateclasses.com/"/>
                <Spons name="Spartificial" imageurl="/sponser/Spartificial.jpeg" hrefURL="https://spartificial.com/"/>
                <CirSpons name="Aeronautical society of India" imageurl="/sponser/ASI.png" hrefURL="https://www.aerosocietyindia.co.in/"/>
            </div>
        </div>
    </div>
</main>

<style>
    /* General container settings */
    .super-duper-container {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center all children horizontally */
        justify-content: center; /* Center content vertically */
        width: 80%;
        margin: 0 auto; /* Center the container horizontally */
    }

    .super-container {
        padding: 2% 0;
        width: 100%; /* Ensure the container takes full width of the parent */
        text-align: center; /* Center the heading text */
    }

    .container {
        display: flex;
        flex-wrap: wrap; /* Enables wrapping for rows */
        justify-content: center; /* Center items in the row */
        gap: 20px; /* Space between items */
        margin-top: 20px; /* Space between title and items */
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

    h3 {
        font-size: 2rem;
        font-weight: 500;
        padding: 10px;
        text-align: center;
        text-transform: uppercase;
    }

    h3:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    /* Responsive design for larger screens */
    @media (min-width: 600px) {
        .container {
            gap: 30px; /* Larger gap for larger screens */
        }

        h1 {
            font-size: 3rem;
        }

        h3 {
            font-size: 2.5rem;
        }
    }

    /* Responsive design for smaller screens */
    @media (max-width: 400px) {
        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
</style>
