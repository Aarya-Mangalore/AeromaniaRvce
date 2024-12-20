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
                    imageurl="/persons/pavan.jpg"
                    ph="9945502752"
                    role="Student in Aerospace engineering"
                />
                <Card
                    name="Samanyu S"
                    imageurl="/persons/samanyus.jpg"
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
                    imageurl="/persons/supreethr.jpg"
                    role="Faculty at Aerospace Dept"
                    ph="9980844119"
                />
                <Card
                    name="S Srinivasan"
                    imageurl="/persons/Srisrinivasan.jpg"
                    role="Faculty at Aerospace Dept"
                    ph="9901998773"
                />
            </div>
        </div>
    </div>

    <div class="super-contain">
        <div class="student-coordinators-container">
            <h3>Event Coordinators</h3>
            <div class="student-coordinators">
                <Card
                    name="Tarun Prabash P"
                    imageurl="/persons/tarun.jpg"
                    ph="8971866108"
                    role="Student in Aerospace engineering"
                />
                <Card
                    name="Sumedh S Bhat"
                    imageurl="/persons/sumedh.jpg"
                    ph="8197544869"
                    role="Student in Aerospace engineering"
                />
                <Card
                    name="Ashok R"
                    imageurl="/persons/ashok.jpg"
                    ph="7975245649"
                    role="Student in Aerospace engineering"
                />
            </div>
        </div>
    </div>

    <div class="super-contain">
        <div class="student-coordinators-container">
            <h3>Marketing and Publicity Leads</h3>
            <div class="student-coordinators">
                <Card
                    name="Samanyu S"
                    imageurl="/persons/samanyus.jpg"
                    ph="9353986466"
                    role="Student in Aerospace engineering"
                />
                <Card
                    name="Sumedh S Bhat"
                    imageurl="/persons/sumedh.jpg"
                    ph="8197544869"
                    role="Student in Aerospace engineering"
                />
            </div>
        </div>

        <div class="student-coordinators-container">
            <h3>Content & Publicity Leads</h3>
            <div class="student-coordinators">
                <Card
                    name="Neha Arun Mandi"
                    imageurl="/persons/Neha.png"
                    ph="9513239459"
                    role="Student in Aerospace engineering"
                />
                <Card
                    name="Rishika Bandyopadhyay"
                    imageurl="/persons/rishika.jpg"
                    ph="9810834535"
                    role="Student in Aerospace engineering"
                />
            </div>
        </div>
    </div>

    <div class="super-contain">
        <div class="student-coordinators-container">
            <h3>Website Lead</h3>
            <div class="student-coordinators">
                <Card
                    name="Aarya Mangalore"
                    imageurl="/persons/Aarya.jpg"
                    ph="8792159569"
                    role="Student in Aerospace engineering"
                />
            </div>
        </div>
    </div>

    <!-- Social Handles Section -->
    <h1>Social Handles</h1>

    <div class="social-handles-container">
        <div class="social-handles">
            <SocialCard
                logo="/Icons/PhIcon.png"
                name="Call us"
                link="tel:+918971866108"
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        gap: 70px;
        padding: 20px;
    }

    .student-coordinators-container {
        padding: 2% 10px;
    }

    /* Flex layout for Student Coordinators */
    .student-coordinators {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-bottom: 50px;
    }

    /* Flex layout for Social Handles */
    .social-handles-container {
        display: flex;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
    }

    .social-handles {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        width: 100%;
    }

    h1 {
        font-size: 2rem;
        font-weight: 500;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        text-transform: uppercase;
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 500;
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: center;
        text-transform: uppercase;
    }

    /* Responsive design for smaller screens */
    @media (max-width: 600px) {
        .social-handles {
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .social-handles-container {
            width: 90%;
            padding: 0;
        }

        .super-contain {
            padding: 0;
        }

        .student-coordinators-container {
            padding: 0;
        }

        .student-coordinators {
            padding: 0;
        }
    }

    /* Responsive design for very small screens */
    @media (max-width: 400px) {
        h1 {
            font-size: 1.4rem;
        }

        h3 {
            font-size: 1.1rem;
            padding-bottom: 10px;
            padding-top: 30px;
        }

        .social-handles {
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .super-contain {
            padding-top: 10px;
            padding-bottom: 50px;
        }

        .student-coordinators-container {
            padding: 0;
        }

        .student-coordinators {
            padding: 0;
        }
    }
</style>
