<script>
    export let Head = "a good thing";
    export let text = "a good facility";
    export let image; // Path to the image
    export let video ; // Path to the video
    export let align = "center"; // Can be 'left' or 'right'
</script>

<div class="container2">
    <h1 class={align}>{Head}</h1>
</div>
<div class="content-container">
    <div class="text-container">
        <p>{text}</p>
    </div>
    <div class="media-container">
        {#if image}
            <img src={image} alt="A visual placeholder" />
        {:else if video}
            <video controls width="100%" height="auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        {/if}
    </div>
</div>

<style>
    .container2 {
        display: flex;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 2%;
        padding-bottom: 2%;
        flex-direction: column;
    }

    h1.left {
        text-align: left;
    }

    h1.right {
        text-align: right;
    }

    h1.center {
        text-align: center;
    }

    .content-container {
        display: flex;
        justify-content: flex-start; /* Align to left for larger screens */
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        gap: 20px;
    }

    .text-container {
        width: 45%;
        color: aliceblue;
        text-align: left; /* Default to left align for text */
        padding-left: 50px;
    }

    .media-container {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-transform: uppercase;
        font-size: 1.8rem;
        font-weight: 800;
        margin: 0;
    }

    p {
        font-size: 1.5rem;
        margin: 0;
        user-select: none;
    }

    img {
        max-width: 90%;
        height: auto;
    }

    video {
        max-width: 90%;
        height: auto;
    }

    /* Adjustments for smaller screens */
    @media (max-width: 768px) {

        .container2{
            padding-top: 70px;
        }

        .content-container {
            flex-direction: column;
            align-items: center;
        }

        .text-container,
        .media-container {
            width: 90%;
            padding: 0%;
        }

        h1 {
            font-size: 1.4rem;
            text-align: center; /* Center h1 for small screens */
        }

        h1.left {
            text-align: center;
        }

        h1.right {
            text-align: center;
        }

        p {
            font-size: 0.9rem;
        }

        .text-container {
            text-align: center; /* Center text on small screens */
        }

        .media-container {
            margin-top: 20px; /* Ensure media is at the bottom on small screens */
        }
    }
</style>
