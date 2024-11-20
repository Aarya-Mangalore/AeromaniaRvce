<script>
    import Containerl from "$lib/components/ContainerBoxleft.svelte";
    import Containerr from "$lib/components/ContainerBoxright.svelte";
</script>

<main>
    <div class="super-container">
        <Containerl 
        head="" 
        path="/images/plane.jpg" 
        text="A workshop-competition hybrid where teams create solid rocket propellants and compete in a live thrust showdown to find the most powerful one!" 
        />

        <Containerl 
        head="STATIC FIRE FIESTA" 
        path="/images/plane.jpg" 
        text="A workshop-competition hybrid where teams create solid rocket propellants and compete in a live thrust showdown to find the most powerful one!" 
         />
    </div>
</main>

<style>
    .super-container {
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 100vw;
        gap: 30px;
        
    }
</style>