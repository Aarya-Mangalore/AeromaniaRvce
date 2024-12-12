<script>
    export let text = "write content";
    export let head = "write heading";
    export let path = "/images/plane.jpg";
    export let dis;
    export let rule;
    export let form;
    export let tab1text;
    export let tab1val;
    export let tab2text;
    export let tab2val;
    export let date;
    export let Button1text="Rule-Book";
    export let Button2text="Apply Now";

    import Button from "$lib/components/Button.svelte";

    let showDescription = false;
    let button1text = "Learn more"; // Initial button text

    function toggleDescription() {
        if (dis) {
            showDescription = !showDescription;
            button1text =
                button1text === "Learn more" ? "Read less" : "Learn more";
        } else {
            window.location.href = rule; // Redirect if 'dis' is empty
        }
    }
</script>

<div class="container">
    <img alt={head} src={path} class="image" />
    <div class="text-container">
        <h1 class="head">{head}</h1>
        <br />
        <p>{text}</p>
        {#if tab1val||tab2val}
            
        
        <!-- Transparent Table Below Text -->
        <div class="table-container">
            <table class="transparent-table">
                <tbody>
                    {#if tab1val}
                        <tr>
                            <td class="label">{tab1text}</td>
                            <td>{tab1val}</td>
                        </tr>
                    {/if}
                    {#if tab2val}
                        <tr>
                            <td class="label">{tab2text}</td>
                            <td>{tab2val}</td>
                        </tr>
                    {/if}
                </tbody>
            </table>
        </div>
        {/if}
        <br />
        {#if dis || form || rule}
            <div class="but-contain">
                {#if dis}
                    <!-- Toggle button -->
                    <a on:click={toggleDescription}>
                        <button class="space-button">{button1text}</button>
                    </a>

                    {#if showDescription}
                        <div class="description">
                            <p>{dis}</p>
                        </div>
                    {/if}
                {/if}
                {#if rule}
                    <Button Text={Button1text} link={rule}></Button>
                {/if}
                {#if form}
                    <Button Text={Button2text} link={form}></Button>
                {/if}
            </div>
        {/if}
    </div>
    {#if date}
        <p class="date">{date}</p>
    {/if}
    <br />
</div>

<style>
    .but-contain {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    .date {
        padding-top: 10px;
        padding-bottom: 10px;
        width: 70%;
        border-top: 2px solid rgba(255, 255, 255, 0.606);
        border-bottom: 2px solid rgba(255, 255, 255, 0.606);
    }
    .container:hover .date {
        background: linear-gradient(45deg, #1e04c4, #00b3cb);
        -webkit-background-clip: text;
        text-decoration: underline;
        color: transparent;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 50vw;
        max-width: 425px;
        padding: 3%;
        box-sizing: border-box;
        background-color: rgba(190, 188, 188, 0.36);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            border-color 0.3s ease;
        height: auto;
        margin-top: 30px;
    }

    .container:hover {
        transform: scale(1.05);
        background-color: rgba(240, 255, 255, 0.5);
        border-color: #00ddff;
        border-width: 3px;
    }

    .container::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 600%;
        background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.2),
            transparent
        );
        transition:
            width 0.4s ease,
            height 0.4s ease,
            top 0.4s ease,
            left 0.4s ease;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: -1;
    }

    .container:hover::before {
        width: 150%;
        height: 150%;
        opacity: 1;
    }

    .text-container {
        width: 100%;
        padding: 20px;
        text-align: center;
        color: whitesmoke;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .image {
        width: 100%;
        height: auto;
        border-radius: 20px;
        object-fit: cover;
        padding-top: 30px;
    }

    .head {
        font-weight: 800;
        font-size: 1.25rem;
        color: rgb(255, 255, 255);
        text-align: center;
        transition:
            color 0.3s ease,
            background 0.3s ease;
        border-top: 2px solid rgba(255, 255, 255, 0.606);
        border-bottom: 2px solid rgba(255, 255, 255, 0.606);
        padding: 10px 0;
    }

    p {
        color: whitesmoke;
        font-size: 1rem;
        padding-bottom: 15px;
        text-align: center;
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .container:hover .head {
        background: linear-gradient(45deg, #1e04c4, #00b3cb);
        -webkit-background-clip: text;
        text-decoration: underline;
        color: transparent;
    }

    .table-container {
        width: 100%;
        margin-top: 20px;
    }

    .transparent-table {
        width: 100%;
        border-collapse: collapse;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 10px;
    }

    .transparent-table td {
        padding: 10px;
        text-align: center;
        color: white;
        font-size: 1rem;
        font-family: "Josefin Sans", sans-serif;
    }

    .space-button {
        padding: 15px 30px;
        color: #00ffff; /* Cyan text */
        background-color: #000;
        border: 2px solid #00ffff; /* Cyan border */
        border-radius: 8px;
        font-size: 18px;
        font-family: sans-serif;
        cursor: pointer;
        transition: all 0.4s ease; /* Smooth transition */
        position: relative;
        overflow: hidden;
        z-index: 1;
    }

    .space-button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.4),
            transparent
        );
        transition:
            width 0.4s ease,
            height 0.4s ease,
            top 0.4s ease,
            left 0.4s ease;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: -1;
    }

    .space-button:hover::before {
        width: 150%;
        height: 150%;
        opacity: 1;
    }

    .space-button:hover {
        color: #fff; /* Change text to white on hover */
    }

    @media (max-width: 830px) {
        .container {
            width: 80vw;
            height: auto;
        }

        .image {
            width: 70%;
            margin-bottom: 20px;
        }

        .text-container {
            width: 100%;
            text-align: center;
            font-size: 0.8rem;
        }

        .head {
            text-align: center;
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }

        .transparent-table td {
            font-size: 0.9rem;
        }
    }
</style>
