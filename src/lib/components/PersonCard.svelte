<script>
    export let name = "Singh ka puttar";
    export let role = "Define Role";
    export let ph = "0000000000";
    export let imageurl;
</script>

<div class="card-container">
    <div class="image-container">
        <img src={imageurl} alt="{name}">
    </div>
    <div class="info-container">
        <h6>{name}</h6>
        <p>{role}</p>
        <div class="links">
            <a href="tel:{ph}">+91 {ph}</a>
        </div>
    </div>
</div>

<style>
    .card-container {
        width: 100%;
        max-width: 300px;
        background-color: #202020;
        border-radius: 10px;
        position: relative;
        transition: 0.7s ease-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .image-container {
        width: 75%;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid #cccccc; /* Add border around the image */
        margin-bottom: 10px;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .info-container {
        width: 100%;
        background-color: #282828; /* Background color for name and links */
        padding: 10px;
        border-radius: 0 0 10px 10px;
        text-align: center;
    }

    .info-container h6 {
        margin: 0;
        font-size: 1rem;
        color: #ffffff;
    }

    .info-container p {
        margin: 5px 0;
        font-size: 0.85rem;
        color: #cccccc;
    }

    .links {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 10px;
    }

    .links a {
        color: inherit;
        text-decoration: none;
    }

    svg {
        width: 20px;
        height: 20px;
    }

    svg path {
        fill: #dddddd;
    }

    .card-container:hover {
        transform: translateY(-10px);
    }

    .card-container:hover .image-container {
        border-color: #00fff0; /* Change border color on hover */
    }

    @media (max-width: 768px) {

        .card-container {
            max-width: 45%;
        }
    }
</style>
