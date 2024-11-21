<script>
</script>

<main>
<br><br><br>
<br><br><br>
<div class="container">
    <div class="text-container">
        <h1> 
            COMING SOON.....
        </h1>
    </div>
</div>
</main>

<style>
    /* General container settings */
    .container {
    display: flex;
    flex-direction: column; /* Image on top, text below */
    align-items: center;
    justify-content: flex-start; /* Start from the top */
    width: 70vw; /* 80% of the viewport width */
    height: 70vh; /* 80% of the viewport height */
    padding: 3%;
    box-sizing: border-box;
    background-color: rgba(190, 188, 188, 0.0);
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}


    .image-container {
        width: 100%; 
        display: flex; 
        justify-content: center; 
        height: 30vh; /* Reduced height for smaller screens */
        padding: 0;
    }

    .text-container {
        width: 100%;
        padding-left: 20px; 
        color: aliceblue;
        text-align: center; /* Centered text for smaller screens */
    }

    h1 {
        font-size: 10%; /* Default font size */
        font-weight: 500; /* Make heading slightly bolder */
        padding: 10px;
    }

    h1:hover {
    color: #00ffff;
    transform: scale(1.03);
    text-decoration-skip-ink:auto;
    transition: 0.3s;
    user-select: none;
  }

    p {
        font-size: 1rem; /* Reduced font size for paragraphs */
        padding: 0;
        user-select: none;
    }

    img {
        max-width: 80%; /* Limit image size on small screens */
        height: auto; 
    }

    

    /* Media query for larger screens */
    @media (min-width: 600px) {
        .container {
            flex-direction: row; /* Switch back to row layout on larger screens */
        }

        .image-container {
            height: 70vh; /* Keep the larger height on bigger screens */
        }

        h1 {
            font-size: 3rem; /* Slightly larger font size on bigger screens */
        }

        p {
            font-size: 1.2rem;
        }

        
    }

    /* Additional style adjustments for small screens */
    @media (max-width: 400px) {
        h1 {
            font-size: 2rem; /* Increase font size for small screens */
            font-weight: 600; /* Make it bolder */
        }

        .image-container {
            height: 50%; /* Keep the larger height on bigger screens */
            width: auto;
        }
    }
</style>