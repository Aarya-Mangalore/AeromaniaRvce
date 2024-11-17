<script>
    import appleImg from '$lib/assets/logos/subsystem/apple.png'
    export let image;
    export let text = ""
    export let subtext = ""
</script>

<div class="card-container">
    <img src={image} alt="">
    <div class="overlay">
        <div class="text">
            <h3>{text}</h3>
            <p>{subtext}</p>
        </div>        
    </div>
</div>

<style>
.card-container {
  position: center;
  width:150px;
  transition: 0.5s ease-out;
  border-radius: 10%;
}

img {
  width: 100%;
  border-radius: 10%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: inherit;
  background-color: #151515cc;
  border-radius: inherit;
  
}

.card-container:hover{
    transform: translateY(-10px);
    border: gray solid 2px;
}
.card-container:hover .overlay {
  opacity: 1;
}

.text {
  position: absolute;
  font-size: small;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  -ms-transform: translate(-50%, -50%);
  user-select: none;
}


</style>