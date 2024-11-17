<script>
    export let text = "write content";
    export let head = "write heading";
    export let path = "/images/plane.jpg";
    export let dis = head;
    export let form = "";

    import Button from "$lib/components/Button.svelte";
</script>

<div class="container">
    <img alt={dis} src={path} class="image" />
    <div class="text-container">
        <h1 class="head">{head}</h1>
        <br>
        <p>{text}</p>

        <Button Text="Apply now" link={form}></Button>
    </div>
</div>

<br><br>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start; /* Ensures left alignment */
        width: 70vw;
        padding: 3%;
        box-sizing: border-box;
        background-color: rgba(190, 188, 188, 0.36);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease; /* Smooth transition */
        height: auto; /* Let the height adjust dynamically */
    }

    .container:hover {
        transform: scale(1.05); /* Slight scale on hover */
        background-color: rgba(240, 255, 255, 0.5); /* Lighter background */
        border-color: #00ddff; /* Cyan border */
        border-width: 3px;
    }

    .container::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent); /* Radial gradient */
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
        text-align: center;
    }

    .image {
        width: 50%;
        height: auto;
        border-radius: 20px;
    }

    .head {
        font-weight: 800;
        text-decoration: none;
        text-align: left;
        color: white;
        transition: color 0.3s ease, background 0.3s ease; /* Transition for the text */
    }

    p {
        color: whitesmoke; /* Text color */
        text-align: left;
        text-shadow: 
            1px 1px 0 black, 
            -1px -1px 0 black,
            1px -1px 0 black, 
            -1px 1px 0 black; /* Creates a black border around the text */
    }

    /* Add gradient effect on hover */
    .container:hover .head {
        background: linear-gradient(45deg, #2200ff, #ff0084); /* Gradient colors */
        -webkit-background-clip: text;
        text-decoration: underline;
        color: transparent; /* Make the text color transparent to show gradient */
    }

    /* Responsive Design for smaller screens */
    @media (max-width: 768px) {
        .container {
            width: 80vw; /* 80% width */
            height: auto; /* Let height adjust automatically */
            flex-direction: column; /* Stack the image and text vertically */
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
    }
</style>
