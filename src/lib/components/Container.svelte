<script>
    export let text = "write content";
    export let head = "write heading";
    export let path = "/images/plane.jpg";
    export let prize = 0;
    export let fee = 0;
    export let dis = head;

    import Button from "$lib/components/Button.svelte";
</script>

<div class="container">
    <img alt={dis} src={path} class="image" />
    <div class="text-container">
        <h1 class="head">{head}</h1>
        <br />
        <p>{text}</p>
        <!-- Transparent Table Below Text -->
        <div class="table-container">
            <table class="transparent-table">
                <tbody>
                    <tr>
                        <td class="label">Prize Money:</td>
                        <td>₹{prize}</td>
                    </tr>
                    <tr>
                        <td class="label">Registration fee:</td>
                        <td>₹{fee}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .but-contain {
        display: flex;
        justify-content: center; /* Center buttons horizontally */
        align-items: center; /* Center buttons vertically */
        flex-direction: column; /* Stack buttons vertically */
        gap: 20px; /* Space between buttons */
        width: 100%; /* Ensure the container takes up full width */
    }

    .container {
        display: flex;
        flex-direction: column; /* Image on top, text below */
        align-items: center;
        justify-content: flex-start; /* Start from the top */
        width: 80vw; /* Mobile screen width - 80% of the viewport */
        max-width: 500px; /* Limit the width on larger screens */
        padding: 3%;
        box-sizing: border-box;
        background-color: rgba(190, 188, 188, 0.36);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        height: 1050px; /* Maintain consistent height */
        margin-top: 30px; /* Add a gap to the top */
    }

    .container:hover {
        transform: scale(1.05);
        background-color: rgba(240, 255, 255, 0.5);
        border-color: #00ddff;
        border-width: 3px;
    }

    .container::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 600%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent);
        transition: width 0.4s ease, height 0.4s ease, top 0.4s ease, left 0.4s ease;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: -1;
    }

    .container:hover::before {
        width: 150%;
        height: 150%;
        opacity: 1;
    }

    .text-container {
        width: 100%; /* Full width for text */
        padding: 20px;
        text-align: center;
        color: whitesmoke;
        margin-top: 30px; /* Add gap below image */
        margin-bottom: 20px; /* Add gap above the button section */
    }

    .image {
        width: 100%;
        height: auto;
        border-radius: 20px;
        object-fit: cover; /* Ensure the image covers the container */
        padding-top: 30px;
    }

    .head {
        font-weight: 800;
        font-size: 1.8rem;
        color: white;
        text-align: center; /* Center the heading */
        transition: color 0.3s ease, background 0.3s ease;
    }

    p {
        color: whitesmoke;
        font-size: 1.3rem;
        padding-bottom: 15px;
        text-align: center; /* Center the text */
        text-shadow: 
            1px 1px 0 black, 
            -1px -1px 0 black,
            1px -1px 0 black, 
            -1px 1px 0 black;
    }

    .container:hover .head {
        background: linear-gradient(45deg, #2200ff, #ff0084);
        -webkit-background-clip: text;
        text-decoration: underline;
        color: transparent;
    }

    /* Transparent table styles */
    .table-container {
        width: 100%; /* Full width for table */
        margin-top: 20px; /* Space between content and table */
    }

    .transparent-table {
        width: 100%;
        border-collapse: collapse;
        background-color: rgba(255, 255, 255, 0.0); /* Transparent background */
        border-radius: 10px;
    }

    .transparent-table td {
        padding: 10px;
        text-align: center;
        color: white;
        font-size: 1rem;
    }

    /* Responsive Design for smaller screens */
    @media (max-width: 830px) {
        .container {
            width: 80vw; /* 80% width */
            height: auto; /* Auto height for smaller screens */
        }

        .image {
            width: 70%; /* Center the image */
            margin-bottom: 20px; /* Space between image and text */
        }

        .text-container {
            width: 100%; /* Full width for the text container */
            text-align: center; /* Center the text */
            font-size: 0.8rem;
        }

        .head {
            text-align: center;
            font-size: 1.2rem; /* Adjust heading size for smaller screens */
        }

        p {
            font-size: 0.9rem; /* Adjust paragraph size for smaller screens */
        }

        .transparent-table td {
            font-size: 0.9rem; /* Adjust font size for smaller screens */
        }
    }
</style>
