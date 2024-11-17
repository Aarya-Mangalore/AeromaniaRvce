<!--Takes year as input and draws grid-->
<script>
    import PersonCard from "$lib/components/PersonCard.svelte";

    import {readCSV, parseData} from "$lib/utils/csvReader.js"
    import { onMount } from "svelte";
    import { base } from '$app/paths';

    export let year;
    
    let dataURL = `${base}/data/${year}/data.csv`
    let baseImgURL = `${base}/members/${year}/`

    let processedData;
    
    onMount(async()=>{
        let data = await readCSV(dataURL)
        processedData = parseData(data, year, baseImgURL)
    })

</script>


<div class="grid">
    {#if processedData}
        {#each processedData as p}
            <PersonCard name={p["Name"]} role={p["Title"]} linkedIn={p["Linkedin"]} email={p["Email"]} imageurl={p["image"]}></PersonCard>
        {/each}
    {/if}
</div>
<br>
<br>

<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1em;
        padding: 20px;
    }

@media (max-width: 768px) {

    .grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1em;
}
}
</style>