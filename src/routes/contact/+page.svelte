<script>
    import Card from "$lib/components/PersonCard.svelte";
    import SocialCard from "$lib/components/Socialcard.svelte";
</script>

<main>
    <h1>Contacts</h1>

    <!-- Student Coordinators Section with Flexbox -->
     <div class="super-contain">
    <div class="student-coordinators-container">
        <h3>Student Coordinators</h3>
        <div class="student-coordinators">
            <Card 
                name="Aarna"
                imageurl="/persons/lakshmiji.png"
                ph="111111111111"
                role="Set role"
            />
            <Card 
                name="Aarna"
                imageurl="/persons/lakshmiji.png"
                ph="111111111111"
                role="Set role"
            />
            
        </div>
    </div>
    <br><br><br>

    <div class="student-coordinators-container">
        <h3>Faculty Coordinators</h3>
        <div class="student-coordinators">
            <Card 
                name="Aarna"
                imageurl="/persons/lakshmiji.png"
                ph="111111111111"
                role="Set role"
            />
            <Card 
                name="Aarna"
                imageurl="/persons/lakshmiji.png"
                ph="111111111111"
                role="Set role"
            />
            
        </div>
    </div>
</div>

    <!-- Social Handles Section -->
    <div class="social-handles-container">
        <h3>Social Handles</h3>
        <div class="social-handles">
            <SocialCard logo="/Icons/PhoneLogo.png" name="Call us" link="tel:+918792159569" />
            <SocialCard logo="/Icons/MailLogo.png" name="Mail us" link="mailto:aeromaniarvce@gmail.com"/>
            <SocialCard logo="/Icons/InstaLogo.png" name="Follow us on Instagram" link="https://www.instagram.com/aeromania_rvce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
        </div>
    </div>
</main>

<style>
    
    .super-contain{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 7%;
        padding-top: 2%;
        padding-bottom: 2%;
    }


    /* General container settings */
    .student-coordinators-container, .social-handles-container {
        padding: 2% 0;
    }

    /* Flex layout for Student Coordinators */
    .student-coordinators {
        display: flex;
        flex-wrap: wrap; /* Enables wrapping for rows */
        justify-content: center; /* Center items in the row */
        gap: 20px; /* Space between items */
    }

    /* Flex layout for Social Handles */
    .social-handles {
        display: flex;
        justify-content: center;
        gap: 20px; /* Space between items */
        width: 80%; /* Cover 80% of screen */
        margin: 0 auto; /* Center the social handles container */
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        padding: 10px;
        text-align: center;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    h3 {
        font-size: 2rem;
        font-weight: 500;
        padding: 10px;
        text-align: center;
    }

    h3:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    /* Responsive design for larger screens */
    @media (min-width: 600px) {
        .student-coordinators {
            gap: 30px; /* Larger gap for larger screens */
        }

        h1 {
            font-size: 3rem;
        }

        h3 {
            font-size: 2.5rem;
        }
    }

    /* Responsive design for smaller screens */
    @media (max-width: 400px) {
        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
</style>
