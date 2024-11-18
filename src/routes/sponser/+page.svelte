<script>
    import Spons from "$lib/components/SponsorCard.svelte";
</script>

<main>
    <h1>Meet our Sponsors</h1>
    
    <div class="super-container">
        <h3>Type 1 Persons</h3>
        <div class="container">
            <Spons name="Spons 1" />
            <Spons name="Spons 2" />
            <Spons name="Spons 3" />
            <Spons name="Spons 4" />
            <Spons name="Spons 5" /> <!-- Add an odd number for testing -->
        </div>
    </div>

    <div class="super-container">
        <h3>Type 2 Persons</h3>
        <div class="container">
            <Spons name="Spons 1" />
            <Spons name="Spons 2" />
            <Spons name="Spons 3" />
            <Spons name="Spons 4" />
        </div>
    </div>

    <div class="super-container">
        <h3>Type 3 Persons</h3>
        <div class="container">
            <Spons name="Spons 1" />
            <Spons name="Spons 2" />
            <Spons name="Spons 3" />
        </div>
    </div>
</main>

<style>
    /* General container settings */
    .super-container {
        padding: 2% 0;
    }

    .container {
        display: flex;
        flex-wrap: wrap; /* Enables wrapping for rows */
        justify-content: center; /* Center items in the row */
        gap: 20px; /* Space between items */
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

    h3 {
        font-size: 2rem;
        font-weight: 500;
        padding: 10px;
        text-align: center;
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
