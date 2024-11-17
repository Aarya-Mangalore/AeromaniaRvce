<!--Despite sharing a lot of the code with PersonCard, this is a separate component since it serves a different purpose-->
<script> 
    export let name = "Sponsor Type"
    export let imageurl;
    export let hrefURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
</script>

<div class="card-container">
    <div class="text-container">
        <h6>{name}</h6>
    </div>

    <div class="img-container" onclick={console.log("CLICKED")}>
        <img src={imageurl} alt="">
    </div>
    
</div>
<!-- #151515cc -->

<style>
    .card-container{
        width: min(100%, 300px);
        height: auto;

        padding: 10px;
        
        border: gray solid 2px;
        border-radius: 20px;
    }

    .img-container{
        height: 80%;
    }

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
        transition: 0.5s ease-out;
    }

    img:hover{
        transform: translateY(-10px);

    }

    h6{
        font-size: 1.2rem;
        font-family: var(--ff-paragraph);
        color: var(--clr-ta-3);        
    }

</style>