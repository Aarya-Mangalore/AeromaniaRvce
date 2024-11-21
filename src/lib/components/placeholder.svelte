<script>

</script>

<div class="container">
    <div class="text-container">
        <h1> 
            COMING SOON
        </h1>
    </div>
</div>


<style>
    /* General container settings */
    .container {
        display: flex;
         /* Image on top, text below */
        align-items: center;
        justify-content: flex-start; /* Start from the top */
        width:50vw; /* Mobile screen width - 80% of the viewport */
        max-width: 425px; /* Limit the width on larger screens */
        padding: 3%;
        box-sizing: border-box;
        background-color: rgba(190, 188, 188, 0.36);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        height: 970px; /* Maintain consistent height */
        margin-top: 30px; /* Add a gap to the top */
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
    font-weight: 800;
    font-size: 1.25rem;
    color: white;
    text-align: center; /* Center the heading */
    transition: color 0.3s ease, background 0.3s ease;

    /* Add borders */
    border-top: 2px solid beige; /* Line above the heading */
    border-bottom: 2px solid rgb(255, 255, 255); /* Line below the heading */
    padding: 10px 0; /* Add spacing inside the borders */
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
    @media (max-width: 830px) {
        .container {
            width: 80vw; /* 80% width */
            height: auto; /* Auto height for smaller screens */
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