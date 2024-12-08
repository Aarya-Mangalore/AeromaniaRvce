<script>
    import Container from "$lib/components/ContainerBoxwithvariabletab.svelte";
    import Photos from "$lib/components/Photogallery.svelte";
    import Timer from "$lib/components/Timer.svelte";

    const bigIframe = `<iframe src="https://free.timeanddate.com/countdown/i9o3tnng/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw1000/szh421/iso2024-12-09T13:30:00" allowtransparency="true" frameborder="0" width="326" height="84"></iframe>`;
    const smallIframe = `<iframe src="https://free.timeanddate.com/countdown/i9o3tu29/n438/cf12/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw800/szh337/iso2024-12-09T13:30:00" allowtransparency="true" frameborder="0" width="261" height="68"></iframe>`;

    const galleryImages = [
        "/event/flashmob/img1.jpg",
        "/event/flashmob/img2.jpg",
        "/event/flashmob/img3.jpg",
        "/event/flashmob/img4.jpg"
    ];
</script>

<main>
    <h1 class="heading">Pre-events</h1>
    <div class="outer-container">
        <!-- Upcoming Event Section -->
        <div class="upcoming-event">
            <h3>Flash-mob Performance</h3>
        </div>

        <div class="content-section">
            <!-- Left Section -->
            <div class="left-section">
                <p>Feel the rhythm and energy at Aeromania 2024's electrifying Flashmob!
                    Watch the Biotech Quadrangle come alive with music, dance, and excitement.
                    A perfect kickoff to the fun—whether you love surprises or just want to groove!
                    Don't miss this burst of spontaneity and joy!</p>
                    <h3>Coming in</h3>
                <Timer {smallIframe} {bigIframe} />
            </div>

            <!-- Right Section -->
            <div class="right-section">
                <Photos images={galleryImages} width="500px" height="auto" />
            </div>
        </div>

        <h1 class="heading">Coming soon!!</h1>
        <!-- Cards Section -->
        <div class="cards-container">
            <Container  
                path="/event/flashmob/thumbnail.jpg"
                head="FLASH-MOB PERFORMANCE" 
                text="Get ready to experience the magic of spontaneity and rhythm at Aeromania 2024 with an electrifying Flashmob Performance!" 
                tab1text="Location:"
                tab1val="Bio-tech Quadrangle"
                tab2text="Time:"
                tab2val="1:30 pm"
            />
            <Container  
                head="MEMOMANIA"
                text="Get ready for a fun-filled meme competition with an aerospace twist! Show off your creativity by designing hilarious and innovative memes based on aerospace themes. The wittier, the better! Perfect for those with a flair for humor and a passion for aviation!"
                form="https://forms.gle/kpjPWqJ9qncULfMq7"
                path="/event/memomania.jpg"
                tab2text="Registration fee:"
                tab2val="₹ 29"
            />
            <Container  
                head="PAPER PILOTS"
                path="/event/Paperpilots.jpg"
                text="Unleash your creativity in the ultimate paper plane competition! Design, fold, and customize to outfly the competition and claim the win."
                tab1text="Prize:"
                tab1val="₹ 3000"
                tab2text="Registration fee:"
                tab2val="₹ 29"
                form="https://forms.gle/7CG3Qb34ve1V4yTk6"
            />
        </div>
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

    .heading:hover{
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

    .upcoming-event:hover h3{
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
    .left-section h3{
        padding: 40px;
        padding-left: 0%;
        text-transform: uppercase;
        font-size: 1.5rem;
    }

    .right-section {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 40px;
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
        width: 100%;
        max-width: 100%;
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
        padding:20px;
    }

    .right-section {
        justify-content: center; /* Center align content */
        align-items: center; /* Center align content */
        text-align: center;
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
