<script>
    import Container from "$lib/components/ContainerBoxwithvariabletab.svelte";
    import Photos from "$lib/components/Photogallery.svelte";
    import Timer from "$lib/components/Timer.svelte";

    const bigIframe = `<iframe src="https://free.timeanddate.com/countdown/i9ojkdkc/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw1000/szh421/iso2024-12-19T09:30:00" allowtransparency="true" frameborder="0" width="326" height="84"></iframe>`;
    const smallIframe = `<iframe src="https://free.timeanddate.com/countdown/i9ojkfxt/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw800/szh337/iso2024-12-19T09:30:00" allowtransparency="true" frameborder="0" width="261" height="68"></iframe>`;

    const flashmob2024 = [
        "/event/flashmob2024/img1.jpg",
        "/event/flashmob2024/img2.jpg",
        "/event/flashmob2024/img3.jpg",
        "/event/flashmob2024/img4.jpg",
        "/event/flashmob2024/img5.jpg",
    ];

    const location = "IEM Auditorium";
</script>

<main>
    <h1 class="heading">KEY-NOTE TALKS</h1>
    <div class="outer-container">
        <!-- Upcoming Event Section -->
        <div class="upcoming-event">
            <h3>SAE INDIA SEMINAR</h3>
        </div>

        <div class="content-section">
            <!-- Left Section -->
            <div class="left-section">
                <p>
                    We are thrilled to announce an incredible opportunity to
                    learn from industry experts at the SAE India Seminar on
                    Sustainable Engineering, a key highlight of Aeromania'24.
                    Organized by the Society of Automotive Engineers (SAE)
                    India, this event promises valuable insights into
                    cutting-edge technologies, networking opportunities, and a
                    chance to enhance your academic profile. Don't miss this
                    chance to explore the future of sustainable mobility and
                    elevate your skills. We look forward to your participation!
                </p>
                <div class="table-container">
                    <table class="transparent-table">
                        <tbody>
                            <tr>
                                <td class="label">Location:</td>
                                <td>{location}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Talk starts in</h3>
                <Timer {smallIframe} {bigIframe} />
            </div>

            <!-- Right Section -->
            <div class="right-section">
                <!--<Photos images={galleryImages} width="600px" height="500px" />-->
                <img src="/event/SAEindia.png" alt="Paper pilot" />
            </div>
        </div>

        <h1 class="heading">Coming soon!!</h1>
        <!-- Cards Section -->
        <div class="cards-container">
            <Container
                head="SAE INDIA SEMINAR"
                text="Join the SAE India Seminar on Sustainable Engineering at Aeromania'24, 
                        organized by the Society of Automotive Engineers (SAE) India. Gain insights from industry experts, network 
                        with professionals, and explore the future of mobility. Participants will also earn 
                        5 activity points to enhance their academic profile. Register for any Aeromania 2024 event to attend."
                path="/event/SAEindia.png"
                tab1text="Location:"
                tab1val="IEM Auditorium"
                date="19th December 2024"
            />
        </div>
    </div>
    <br /><br /><br />
   
</main>

<style>
    .outer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .heading {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
        color: #ffffff;
    }

    .heading:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
    }

    .upcoming-event {
        width: 40%;
        max-width: 1200px;
        text-align: center; /* Align text to the left */
        margin-bottom: 20px;
    }

    .upcoming-event h3 {
        font-size: 1.5rem;
        color: #ffffff;
        border-top: 3px solid #ffffff69;
        border-bottom: 3px solid #ffffff69;
        padding-top: 15px;
        padding-bottom: 15px;
        text-transform: uppercase;
    }

    .upcoming-event:hover h3 {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        border-top: 3px solid #00bbff7e;
        border-bottom: 3px solid #00bbff7e;
        transition: 0.3s;
    }

    .content-section {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
        margin-bottom: 40px;
        border-bottom: 3px solid #ffffff8f; /* Corrected line to specify style, width, and color */
    }

    .left-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        text-align: left;
        padding-bottom: 40px;
    }
    .left-section h3 {
        padding: 40px;
        padding-left: 0%;
        text-transform: uppercase;
        font-size: 1.5rem;
    }
    .table-container {
        width: 100%; /* Full width for table */
        margin-top: 20px; /* Space between content and table */
    }

    .transparent-table {
        width: 100%;
        border-collapse: collapse;
        background-color: rgba(255, 255, 255, 0); /* Transparent background */
        border-radius: 10px;
    }

    .transparent-table td {
        padding: 10px;
        text-align: center;
        color: white;
        font-size: 1rem;
    }

    .right-section {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 40px;
    }

    img {
        width: 500px;
        height: 500px;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        width: 100%;
    }

    p {
        font-size: 1.2rem;
        color: #e0e0e0;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        .outer-container {
            flex-direction: column;
            align-items: center; /* Center align the container's content */
        }

        .heading {
            font-size: 1.5rem;
            font-weight: 400;
            text-align: center; /* Center the text inside the heading */
            margin: 0 auto 20px auto; /* Center horizontally and add bottom margin */
            width: 80%; /* Set width to 80% of the screen */
        }

        .upcoming-event {
            width: 80%;
            max-width: 95%;
            text-align: center; /* Center align the text */
            margin-bottom: 10px;
        }

        .upcoming-event h3 {
            font-size: 1.2rem;
            padding-top: 20px;
            text-align: center; /* Center align the heading */
        }

        .content-section {
            flex-direction: column; /* Stack the sections vertically */
            align-items: center; /* Center align the sections */
            gap: 10px;
            text-align: center; /* Center align text within sections */
        }

        .left-section {
            text-align: center; /* Center align text */
            padding-bottom: 20px;
        }

        .left-section h3 {
            font-size: 1.5rem;
            padding: 20px;
        }

        .transparent-table {
            width: 90%; /* Set the table width to 90% of the parent/container */
            margin: 0 auto; /* Center the table horizontally */
        }

        .right-section {
            justify-content: center; /* Center align content */
            align-items: center; /* Center align content */
            text-align: center;
        }

        img {
            width: 80%;
            height: auto;
        }

        .cards-container {
            flex-direction: column; /* Stack cards vertically */
            align-items: center; /* Center align cards */
            gap: 20px; /* Adjust gap for readability */
        }

        p {
            text-align: center; /* Center align paragraphs */
        }
    }
</style>
