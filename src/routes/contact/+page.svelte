<script>
    import Card from "$lib/components/PersonCard.svelte";
    import SocialCard from "$lib/components/Socialcard.svelte";
    import FacCard from "$lib/components/FacultyCard.svelte";
</script>

<main>
    <h1>Contacts</h1>

    <!-- Student Coordinators Section with Flexbox -->
    <div class="super-contain">
        <div class="student-coordinators-container">
            <h3>Student Convener</h3>
            <div class="student-coordinators">
                <Card
                    name="Pavan Y K"
                    imageurl="/images/profile.jpg"
                    ph="9945502752"
                    role="Student in Aerospace engineering"
                />
                <Card
                    name="Samanyu S"
                    imageurl="/images/profile.jpg"
                    ph="9353986466"
                    role="Student in Aerospace engineering"
                />
            </div>
        </div>

        <div class="student-coordinators-container">
            <h3>Faculty Convener</h3>
            <div class="student-coordinators">
                <Card
                    name="Dr. Supreeth R"
                    imageurl="/images/profile.jpg"
                    role="Faculty at Aerospace Dept"
                    ph="9980844119"
                />
                <Card
                    name="S Srinivasan"
                    imageurl="/images/profile.jpg"
                    role="Faculty at Aerospace Dept"
                    ph="9901998773"
                />
            </div>
        </div>
    </div>

    <!-- Social Handles Section -->
    <h1>Social Handles</h1>
    <br><br>
    <div class="social-handles-container">
        <div class="social-handles">
            <SocialCard
                logo="/Icons/PhIcon.png"
                name="Call us"
                link="tel:+918792159569"
            />
            <SocialCard
                logo="/Icons/MailLogo.png"
                name="Mail us"
                link="mailto:aeromaniarvce@gmail.com"
            />
            <SocialCard
                logo="/Icons/InstaLogo.png"
                name="Follow us"
                link="https://www.instagram.com/aeromania_rvce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />
        </div>
    </div>
</main>

<style>
    /* General container settings */
    .super-contain {
        display: flex; /* Use flexbox for layout */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
        flex-wrap: wrap; /* Wrap items if the screen is too small */
        width: 100%;
        gap: 70px; /* Space between the items */
        padding: 20px;
    }

    .student-coordinators-container {
        padding: 2% 10px;
    }

    /* Flex layout for Student Coordinators */
    .student-coordinators {
        display: flex;
        flex-wrap: wrap; /* Enables wrapping for rows */
        justify-content: center; /* Center items in the row */
        gap: 20px; /* Space between items */
        padding-bottom: 50px;
    }

    /* Flex layout for Social Handles */
    .social-handles-container {
        display: flex;
        justify-content: center;
        width: 70%; /* Cover a percentage of the screen */
        margin: 0 auto; /* Center the social handles container */
        padding: 20px;
    }


    .social-handles {
        display: flex;
        flex-wrap: wrap; /* Allow wrapping */
        justify-content: center; /* Center items */
        gap: 10px; /* Add consistent spacing between cards */
        width: 100%;
    }

    /* Apply individual spacing for each card */
    .social-handles > * {
        margin: 10px; /* Add spacing around each card */
    }

    h1 {
        font-size: 2rem;
        font-weight: 500;
        padding-top: 20px;
        text-align: center;
        text-transform: uppercase;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        transition: 0.3s;
        user-select: none;
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 500;
        padding: 10px;
        text-align: center;
    }

    /* Responsive design for smaller screens */
    @media (max-width: 600px) {
        .social-handles {
            flex-direction: column; /* Stack items vertically */
            align-items: center; /* Center items horizontally */
            gap: 15px; /* Reduce gap between cards */
        }

        .social-handles-container {
            width: 90%; /* Increase width on smaller screens */
        }
    }

    /* Responsive design for very small screens */
    @media (max-width: 400px) {
        h1 {
            font-size: 1.4rem;
            font-weight: 500;
            text-align: center;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
</style>
