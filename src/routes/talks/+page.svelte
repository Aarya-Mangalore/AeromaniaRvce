<script>
    import Container from "$lib/components/ContainerBoxwithvariabletab.svelte";
    import Photos from "$lib/components/Photogallery.svelte";
    import Timer from "$lib/components/Timer.svelte";

    const bigIframe = `<iframe src="https://free.timeanddate.com/countdown/i9oow6hx/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw1000/szh421/iso2024-12-20T14:00:00" allowtransparency="true" frameborder="0" width="326" height="84"></iframe>`;
    const smallIframe = `<iframe src="https://free.timeanddate.com/countdown/i9oovriv/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw800/szh337/iso2024-12-20T14:00:00" allowtransparency="true" frameborder="0" width="261" height="68"></iframe>`;

    const flashmob2024 = [
        "/event/flashmob2024/img1.jpg",
        "/event/flashmob2024/img2.jpg",
        "/event/flashmob2024/img3.jpg",
        "/event/flashmob2024/img4.jpg",
        "/event/flashmob2024/img5.jpg",
    ];
</script>

<main>
    <h1 class="heading">KEY-NOTE TALKS</h1>
    <div class="outer-container">
        <!-- Upcoming Event Section 
        <div class="upcoming-event">
            <h3>INFLUENCER TALK</h3>
        </div>

        <div class="content-section">
            
            <div class="left-section">
                <p>
                    Get ready for an inspiring talk at Aeromania 2024 by Prachi
                    Goswami and Tapesh Kumar! From navigating the skies as
                    pilots to captivating global audiences as digital
                    influencers, they’ll share their remarkable journeys of
                    transformation, resilience, and the power of influence.
                    Don’t miss the chance to hear how they blend their passion
                    for aviation with their online presence to inspire others to
                    chase their dreams. Be part of this unforgettable
                    experience!
                </p>
                <div class="table-container">
                    <table class="transparent-table">
                        <tbody>
                            <tr>
                                <td class="label">Location:</td>
                                <td>ECE seminar hall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Talk starts in</h3>
                <Timer {smallIframe} {bigIframe} />
            </div>

            
            <div class="right-section">
                
                <img src="/event/influencertalk.jpg" alt="influencer talk" />
            </div>
        </div>-->

        <br /><br />

        <h1 class="heading">Talk archive</h1>
        <!-- Cards Section -->

        <div class="cards-container">
            <Container
                head="TALK BY AeSI"
                text="Join us for an engaging keynote by the Aeronautical Society of India at Aeromania 2024. This talk will 
                explore the latest innovations in aerospace technology, covering advancements in both civil and military aviation.
                 Gain insights into the future of flight and space exploration, and discover the challenges and opportunities 
                 shaping the aviation industry. Don't miss this opportunity to learn from experts and expand your knowledge of 
                 the aerospace field. "
                path="/sponser/ASI.png"
                tab1text="Location:"
                tab1val="IEM auditorium"
                date="21st December 2024"
                time="8:00 AM"
            />

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

            <Container
                head="INFLUENCER TALK"
                text="Join former pilots turned digital influencers Prachi Goswami and Tapesh Kumar at Aeromania 2024 as 
                they share their remarkable journeys from aviation to the digital stage. Prachi blends her passion for flying 
                with relatable stories that inspire, while Tapesh shares his experiences of transformation, resilience, and 
                overcoming challenges. Together, they’ll inspire you to dream bigger and reach higher, proving that the sky is just the beginning."
                path="/event/influencertalk.jpg"
                tab1text="Location:"
                tab1val="ECE seminar hall"
                date="20th December 2024"
                time="2:00 PM"
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
