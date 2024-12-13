<script>
    import Container from "$lib/components/ContainerBoxwithvariabletab.svelte";
    import Photos from "$lib/components/Photogallery.svelte";
    import Timer from "$lib/components/Timer.svelte";

    const bigIframe = `<iframe src="https://free.timeanddate.com/countdown/i9oa5j1l/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw1000/szh421/iso2024-12-13T12:00:00" allowtransparency="true" frameborder="0" width="326" height="84"></iframe>`;
    const smallIframe = `<iframe src="https://free.timeanddate.com/countdown/i9oa58ys/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw800/szh337/iso2024-12-13T12:00:00" allowtransparency="true" frameborder="0" width="261" height="68"></iframe>`;

    const flashmob2024 = [
        "/event/flashmob2024/img1.jpg",
        "/event/flashmob2024/img2.jpg",
        "/event/flashmob2024/img3.jpg",
        "/event/flashmob2024/img4.jpg",
        "/event/flashmob2024/img5.jpg",
    ];

    const location="ET lane"
</script>

<main>
    <h1 class="heading">Pre-events</h1>
    <div class="outer-container">
        <!-- Upcoming Event Section -->
        <div class="upcoming-event">
            <h3>Paper Pilots</h3>
        </div>

        <div class="content-section">
            <!-- Left Section -->
            <div class="left-section">
                <p>
                    Attention all aspiring aviators and paper craft enthusiasts!
                    Get ready to take flight at Paper Pilots, the ultimate paper
                    plane competition hosted by Aeromania. Here’s your chance to
                    showcase your creativity and engineering skills by designing
                    the perfect plane to conquer the skies!
                </p>
                <p>          
                    The registration link is provided below for your convenience.
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
                <h3>Pre-Event in</h3>
                <Timer {smallIframe} {bigIframe} />
                
            </div>

            <!-- Right Section -->
            <div class="right-section">
                <!--<Photos images={galleryImages} width="600px" height="500px" />-->
                <img src="/event/Paperpilots.jpg" alt="Paper pilot"/>
            </div>
        </div>

        <h1 class="heading">Coming soon!!</h1>
        <!-- Cards Section -->
        <div class="cards-container">
            

            <Container
                head="MEMOMANIA"
                text="Get ready for a fun-filled meme competition with an aerospace twist! Show off your creativity by designing hilarious and innovative memes based on aerospace themes. The wittier, the better! Perfect for those with a flair for humor and a passion for aviation!"
                form="https://forms.gle/kpjPWqJ9qncULfMq7"
                path="/event/memomania.jpg"
                tab1text="Prize:"
                tab1val="₹ 799"
                tab2text="Registration fee:"
                tab2val="₹ 29"
            />
        </div>
    </div>
    <br /><br /><br />
    <h1 class="heading">Pre-Events Archive</h1>
    <!-- Cards Section -->
    <div class="cards-container">
        <Container
            date="9th december 2024"
            path="/event/flashmob2024/thumbnail.jpg"
            head="FLASH-MOB PERFORMANCE"
            text="Get ready to experience the magic of spontaneity and rhythm at Aeromania 2024 with an electrifying Flashmob Performance!"
            galleryImages={flashmob2024}
        />

        <Container
                head="PAPER PILOTS"
                path="/event/paperpilot.jpg"
                text="Unleash your creativity in the ultimate paper plane competition! Design, fold, and customize to outfly the competition and claim the win."
                tab1text="Prize:"
                tab1val="₹ 500 + 14 days of cold-drinks"
                tab2text="Winner:"
                tab2val="Siddarth K Gole"
                date="13th December 2024"
            />
    </div>
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
        background-color: rgba(255, 255, 255, 0.0); /* Transparent background */
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
            text-align: center;
            margin-bottom: 20px;
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

        .transparent-table  {
            width: 90%;
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
