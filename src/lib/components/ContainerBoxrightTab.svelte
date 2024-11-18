<script>
    export let text = "write content";
    export let head = "write heading";
    export let path = "/images/plane.jpg";
    export let prize = 0
    export let fee = 0;
    export let dis = head;
    export let form = "https://youtu.be/uHgt8giw1LY?si=G2foSsvGU5exnAjC";

    import Button from "$lib/components/Button.svelte";
</script>

<div class="container">
    <div class="text-container">
        <h1 class="head">{head}</h1>
        <br>
        <p>{text}</p>
        <!-- Transparent Table Below Text -->
        <div class="table-container">
            <table class="transparent-table">
                <tbody>
                    <tr>
                        <td class="label">Prize Money:</td>
                        <td>
                            ₹{prize}
                        </td>
                    </tr>
                    <tr>
                        <td class="label">Registration fee:</td>
                        <td>
                            ₹{fee}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <Button Text="Apply now" link={form}></Button>
    </div>
    
    <img alt={dis} src={path} class="image" />
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 70vw;
        padding: 3%;
        box-sizing: border-box;
        background-color: rgba(190, 188, 188, 0.36);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        height: auto;
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
        height: 300%;
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
        width: 50%;
        padding: 20px;
        text-align: left;
    }

    .image {
        width: 50%;
        height: auto;
        border-radius: 20px;
    }

    .head {
        font-weight: 800;
        text-decoration: none;
        font-size: 1.7rem;
        text-align: left;
        color: white;
        transition: color 0.3s ease, background 0.3s ease;
    }

    p {
        color: whitesmoke;
        padding-bottom: 15px;
        text-align: left;
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
        width: 50%; /* Same width as text-container */
        margin-top: 20px; /* Space between content and table */
        text-align: center; /* Center content in table */
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

    .transparent-table td:hover {
        background-color: rgba(0, 255, 255, 0.2); /* Light hover effect */
    }

    /* Responsive Design for smaller screens */
    @media (max-width: 830px) {
        .container {
            width: 80vw; /* 80% width */
            flex-direction: column-reverse; /* Reverse the order of image and text */
            justify-content: center; /* Center content vertically */
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
            width: 70%; /* Set width to 70% of container */
            margin: 0 auto; /* Center the heading horizontally */
            font-size: 1.2rem; /* Adjust heading size for smaller screens */
        }

        p {
            font-size: 0.9rem; /* Adjust paragraph size for smaller screens */
        }

        .table-container {
            width: 100%; /* Full width for table on smaller screens */
            margin-top: 20px;
        }

        .transparent-table td {
            font-size: 0.9rem; /* Adjust font size for smaller screens */
        }
    }
</style>
