<script>
    export let name = "Ryan Reynolds";
    export let role = "Systems Engineer";
    export let linkedIn = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    export let email = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
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
            <a href={linkedIn}>
                <svg viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
            </a>
            <a href={email}>
                <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
            </a>
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
        border-color: var(--clr-ta-2); /* Change border color on hover */
    }

    @media (max-width: 768px) {

        .card-container {
            max-width: 45%;
        }
    }
</style>
