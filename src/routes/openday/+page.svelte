<script>
    import Button from "$lib/components/Button.svelte";
    import Content from "$lib/components/Content.svelte";
    import Photos from "$lib/components/Photogallery.svelte";
    import Container from "$lib/components/Container.svelte";

    const galleryImages = [
        "/images/2023/img1.jpg",
        "/images/2023/img2.jpg",
        "/images/2023/img3.jpg",
        "/images/2023/img4.jpg",
        "/images/2023/img5.jpg",
    ];
</script>

<main>
    <Content
        Head="About Aerospace Department RVCE"
        text="The Aerospace Engineering department at RV College of Engineering, Bengaluru, is renowned for its state-of-the-art facilities and strong industry collaborations. It offers a well-rounded curriculum with a focus on aerodynamics, propulsion, avionics, and space systems. Students benefit from hands-on experience through advanced labs, projects, and internships with leading aerospace organizations. The department's emphasis on research and innovation makes it a preferred choice for aspiring aerospace professionals."
        image="/images/aerospace.jpg"
    />

    <div class="container">
        <div class="text-container">
            <h1>why attend open day?</h1>
            <p>
                The Aerospace Engineering department at RV College of
                Engineering, Bengaluru, offers a wide range of facilities,
                including advanced laboratories, simulation tools, and research
                opportunities. These resources empower students to gain
                practical experience and excel in the field of aerospace. Click
                below to learn more about these facilities!
            </p>
        </div>
        <br /><br />
        <Button Text="Learn more" link="/facility" />
    </div>

    <div class="container">
        <h1>Key take aways</h1>
        <div class="container-container">
            <div class="box">
                <p>
                    State-of-the-Art Facilities: <br />Advanced labs and
                    cutting-edge tools for hands-on learning.
                </p>
            </div>
            <div class="box">
                <p>
                    Research Opportunities: <br />Focus on innovation and
                    practical projects.
                </p>
            </div>
            <div class="box">
                <p>
                    Holistic Learning: <br />Comprehensive resources to excel in
                    aerospace engineering.
                </p>
            </div>
            <div class="box">
                <p>
                    Explore More: <br />Additional details available via the
                    provided link.
                </p>
            </div>
        </div>
    </div>

    <div class="container">
        <h1>innovative student clubs</h1>
        <div class="container-container">
            <Container
                head="TEAM ANTARIKSH"
                text="Team Antariksh is the student space technology team of R V College of Engineering, Bengaluru, driven by the motto 'Skies and Beyond.' The team is working on RVSAT-1, India’s first CubeSat with a microbiological payload, set to launch on ISRO’s PSLV platform. They’ve also achieved success with the Ardra sounding rocket and secured top rankings at the 2023 Launching Across the States Competition (LASC). Through innovative projects, Team Antariksh continues to advance student-led space exploration."
                path="/logos/clubs/antariksh.png"
            />

            <Container
                head="TEAM VYOMA"
                text="Team Vyoma, the aero-design team of RV College of Engineering. The team has excelled in national and international competitions, winning awards like the NASA Systems Engineering Award in 2013 and representing India at events such as SAE Aero-Design and AIAA DBF. They focus on developing cutting-edge UAV technology, advancing aerospace innovation, and inspiring future engineers. Notable achievements include ranking globally in design competitions, showcasing aircraft at prestigious expos, and pioneering autonomous UAV systems like V.E.N.G.E.A.N.C.E. Their journey reflects a commitment to innovation, research, and pushing the boundaries of aerospace engineering. "
                path="/logos/clubs/vyoma.jpeg"
            />

            <Container
                head="TEAM JATAYU"
                text="The team designs and fabricates drones with advanced systems like computer vision, image processing, and autonomy, using innovative materials like balsa wood and carbon fiber. Their UAVs serve applications in surveillance, reconnaissance, search and rescue, and agriculture. Notable projects include the flagship search-and-rescue drone 'Vayu,' reconnaissance plane 'Silver Surfer,' and octacopter 'Sentinel,' reflecting their focus on cutting-edge research and development in aerospace technology."
                path="/logos/clubs/jatayu.png"
            />

            <Container
                head="TEAM AEROASTRO"
                text="The Open Day at RVCE will witness the launch of the Aerospace Department's inaugural magazine issue. The magazine, 'Aurelia', shall showcase the ongoing projects of the Aerospace clubs, achievements of the students and the faculty, and the journey of accomplished alumni. The magazine will also detail some of the latest technologies and trends in the global Aerospace industry. Several copies of the Department magazine shall be displayed for visitors to read during Open Day, allowing for a deeper insight about the department. "
                path="/logos/clubs/aeroastro.jpeg"
            />
        </div>
    </div>
</main>

<style>
    /* General container settings */
    .container {
        display: flex;
        align-items: center;
        padding: 5%;
        flex-direction: column;
        padding-bottom: 5%;
    }

    .text-container {
        width: 45%;
        padding-left: 20px;
        color: aliceblue;
        text-align: center;
    }

    h1 {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 500;
        padding: 0px;
        font-weight: 800;
        align-items: center;
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
        font-size: 1.3rem;
    }

    .box:hover h3 {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

    .box:hover {
        transform: scale(1.05);
        background-color: rgba(240, 255, 255, 0.5);
        border-color: #00ddff;
        border-width: 3px;
        transition: 0.3s;
    }

    p {
        font-size: 1.5rem;
        padding: 0;
        user-select: none;
    }

    img {
        max-width: 90%;
    }

    /* Default for larger screens: 2 boxes per row */
    .container-container {
        display: flex;
        justify-content: space-evenly; /* Distribute items evenly */
        align-items: center; /* Center content vertically */
        width: 100%;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;
        padding-top: 20px;
    }

    .box {
        width: 35%; /* 2 boxes per row on large screens */
        background-color: #444;
        padding: 20px;
        color: white;
        border-radius: 20%;
        text-align: center;
    }

    /* Adjustments for smaller screens */
    @media (max-width: 768px) {
        .container {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 10%;
        }

        .text-container {
            width: 90%;
            margin-bottom: 20px;
            padding: 0%;
        }

        h1 {
            font-size: 1.4rem;
            font-weight: 100;
            font-weight: 800;
        }

        p {
            font-size: 1rem;
            padding: 0;
            user-select: none;
        }

        /* Container for boxes: Stacked on smaller screens */
        .container-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .box {
            width: 100%; /* Full width on small screens */
        }
    }
</style>
