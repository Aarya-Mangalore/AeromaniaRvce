<script>
    import Logo from "$lib/assets/logos/Aeromania3.png";
    import Button from "$lib/components/Button.svelte"; 
    import '../app.css'
</script>



<main>
    
    <div class="container">
        <div class="image-container">
            <img src={Logo} alt="AeromaniaRVCE" />
        </div>
        <div class="text-container">
            
            <h1>
                Hello aeromaniacs
            </h1>
            <p>
                We are students of RVCE creating havoc in society, We are basically MANIACS with a Aero degree..... JK!! Just Kidding ... don't take it seriously.
            </p>
        </div>
    </div>

    
    
    <div class="container">
        <div class="text-container">
            <h1> 
                Who Are we?
            </h1>
            <p>
                We Are aerospace engineering students, providing insights into aerospace industry and working of certain models 
                through some fun activities.... join us in this venture by exploring our <a href="./events">Events</a> section
            </p>
        </div>
    </div>

    <div class="container">
        <div class="text-container">
            <h1> 
                Why do we do this?
            </h1>
            <p>
                To be honest.... I too don't know 
            </p>
        </div>
    </div>


    <div class="container">
        <div class="text-container">
            <h1> 
                Want to learn more about the event?
            </h1>
            <p>
                Click on the above links or please read the brochure given below
            </p>
            <br><br>
            <Button Text="Brochure" link="https://drive.google.com/file/d/1MymRPRh64VNQxZZW__hOAc6juwutE1pG/view?usp=drivesdk"></Button> 
        </div>
    </div>

</main>


<style>
    /* General container settings */
    .container {
        display: flex; 
        align-items: left; 
        padding: 2%; 
        flex-direction: column; /* Stacks elements vertically on smaller screens */
    }

    .image-container {
        width: 100%; 
        display: flex; 
        justify-content: center; 
        height: 30vh; /* Reduced height for smaller screens */
        padding: 0;
        padding-bottom: 10%;
    }

    .text-container {
        width: 100%;
        padding-left: 20px; 
        color: aliceblue;
        text-align: center; /* Centered text for smaller screens */
    }

    h1 {
        font-size: 2.5rem; /* Default font size */
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
        max-width: 90%; /* Limit image size on small screens */
        height: 50%; 
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
    /* Tablet screens (e.g., 768px to 992px) */
@media (max-width: 992px) and (min-width: 769px) {
    
  nav {
    flex-direction: column;
    align-items: center;
    padding: 15px 30px;
  }

  .logo {
    margin-bottom: 15px;
    justify-content: center;
  }

  .menu {
    flex-direction: row; /* Keep menu items in a single row for tablets */
    gap: 15px;
    justify-content: center;
  }

  .navbar-toggler {
    display: none; /* Hide toggler on tablets */
  }
}

/* Phone screens (less than 768px) */
@media (max-width: 768px) {
    .image-container {
            height: 40vh; /* Keep the larger height on bigger screens */
            padding-top: 0%;
        }
  nav {
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
  }

  .logo {
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
  }

  .menu {
    flex-direction: column; /* Stack menu items vertically on phones */
    gap: 10px;
    text-align: center;
    align-items: center;
  }

  .navbar-toggler {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .menu.active {
    position: absolute;
    top: 80px; /* Adjust menu dropdown position for small screens */
    right: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 8px;
    padding: 15px;
  }
}

</style>
