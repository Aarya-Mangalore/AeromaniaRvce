<script>
    export let name = "Name of the Sponsor";
    export let imageurl = "/sponser/lakshmiji.png";
    export let hrefURL = "https://youtu.be/uHgt8giw1LY?si=_LzxDtjyruB9HVqb";
</script>

<div class="card-container">
    <a href={hrefURL} target="_blank" rel="noopener noreferrer">
        <div class="text-container">
            <h6 class="head">{name}</h6>
        </div>
        <div class="img-container" onclick={() => console.log("CLICKED")}>
            <img src={imageurl} alt="Sponsor Image">
        </div>
    </a>
</div>

<style>
    .card-container {
        width: min(100%, 300px);
        padding: 10px;
        border: 2px solid gray;
        border-radius: 20px;
        overflow: hidden;
        background-color: rgba(190, 188, 188, 0.36);
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        position: relative;
        
    }

    .card-container:hover {
        transform: scale(1.05);
        background-color: rgba(240, 255, 255, 0.5);
        border-color: #00ddff;
    }

    .card-container::before {
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

    .card-container:hover::before {
        width: 150%;
        height: 150%;
        opacity: 1;
    }

    .text-container {
        text-align: center;
        padding: 10px 0;
    }

    .head {
        font-size: 1.7rem;
        font-weight: 800;
        color: white; /* Default text color */
        background: none; /* Ensure no unwanted background effects */
        transition: color 0.3s ease, background 0.3s ease;
    }

    .card-container:hover .head {
        background: linear-gradient(45deg, #2200ff, #ff0084);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; /* Ensures gradient is applied to text */
        text-decoration: underline;
    }

    .img-container {
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    img {
        width: 70%; /* Reduce image size to 70% of the container */
        height: 70%;
        object-fit: contain;
        transition: transform 0.5s ease-out;
    }


    @media (max-width: 830px) {
        .card-container {
            width: 40vw;
            flex-direction: column-reverse;
            justify-content: flex;
        }

        .img-container {
            margin-bottom: 20px;
        }

        .text-container {
            text-align: center;
        }

        .head {
            font-size: 1.2rem;
        }
    }
</style>
