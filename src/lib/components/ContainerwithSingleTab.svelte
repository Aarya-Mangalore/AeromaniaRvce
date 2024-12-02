<script>
    export let text = "write content";
    export let head = "write heading";
    export let path = "/images/plane.jpg";
    export let prize = 0;
    export let fee = 0;
    export let dis = "";
    export let form = "/placeholder";
    export let rule = "/placeholder";
    let button1text="Learn more";

    let showDescription = false;  // Variable to control the visibility of the description

    function toggleDescription() {
        if (dis){
    showDescription = !showDescription;  // Toggle the visibility
        
    if (button1text === "Learn more") {
        button1text = "read less";
    } else {
        button1text = "Learn more";
    }
}

else {
        // Redirect to another page if 'dis' is empty
        window.location.href = "/placeholder"; // Change '/other-page' to the desired URL
    }
}

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
                        <td class="label">Registration fee:</td>
                        <td>₹{fee}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br /><br />
        <div class="but-contain">
            <a on:click={toggleDescription}>
                <button class="space-button">{button1text}</button>
            </a>
            {#if showDescription}
            <div class="description">
                <p>{dis}</p>  <!-- This is the description that will appear when the button is clicked -->
            </div>
        {/if}
            <a href={form}>
                <button class="space-button">Apply now</button>
            </a>
        </div>
        
    </div>
</div>

<style>
    /* Button styling */
    .space-button {
        padding: 15px 30px;
        color: #00FFFF; /* Cyan text */
        background-color: #000;
        border: 2px solid #00FFFF; /* Cyan border */
        border-radius: 8px;
        font-size: 18px;
        font-family: sans-serif;
        cursor: pointer;
        transition: all 0.4s ease; /* Smooth transition */
        position: relative;
        overflow: hidden;
        z-index: 1;
    }

    /* Hover effect */
    .space-button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.4), transparent);
        transition: width 0.4s ease, height 0.4s ease, top 0.4s ease, left 0.4s ease;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: -1;
    }

    .space-button:hover::before {
        width: 150%;
        height: 150%;
        opacity: 1;
    }

    .space-button:hover {
        color: #fff; /* Change text to white on hover */
    }

    /* Styling for the container */
    .but-contain {
        display: flex;
        justify-content: center; /* Center buttons horizontally */
        align-items: center; /* Center buttons vertically */
        flex-direction: column; /* Stack buttons vertically */
        gap: 20px; /* Space between buttons */
        width: 100%; /* Ensure the container takes up full width */
    }

    /* Other styles for the container, text, etc., remain unchanged */

    .container {
        display: flex;
        flex-direction: column; /* Image on top, text below */
        align-items: center;
        justify-content: flex-start; /* Start from the top */
        width: 50vw; /* Mobile screen width - 80% of the viewport */
        max-width: 425px; /* Limit the width on larger screens */
        padding: 3%;
        box-sizing: border-box;
        background-color: rgba(190, 188, 188, 0.36);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        height: auto; /* Maintain consistent height */
        min-height: 970px;
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
        font-size: 1.25rem;
        color: rgb(255, 255, 255);
        text-align: center; /* Center the heading */
        transition: color 0.3s ease, background 0.3s ease;
        border-top: 2px solid rgba(255, 255, 255, 0.606); /* Line above the heading */
        border-bottom: 2px solid rgba(255, 255, 255, 0.606); /* Line below the heading */
        padding: 10px 0; /* Add spacing inside the borders */
    }

    p {
        color: whitesmoke;
        font-size: 1rem;
        padding-bottom: 15px;
        text-align: center; /* Center the text */
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .container:hover .head {
        background: linear-gradient(45deg, #1e04c4, #00b3cb);
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
        font-family: "Josefin Sans", sans-serif;
    }

    .description{
        padding: 10px;
    }

    /* Responsive Design for smaller screens */
    @media (max-width: 830px) {
        .container {
            width: 80vw; /* 80% width */
            height: auto; /* Auto height for smaller screens */
            min-height: 10px;
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
            font-size: 1rem; /* Adjust heading size for smaller screens */
        }

        p {
            font-size: 0.9rem; /* Adjust paragraph size for smaller screens */
        }

        .transparent-table td {
            font-size: 0.9rem; /* Adjust font size for smaller screens */
        }
    }
</style>
