<script>
    import { readCSV, parseData } from "$lib/utils/csvReader2.js";
    import { onMount } from "svelte";
    import { base } from '$app/paths';

    export let year;

    let dataURL= `${base}/alumni/${year}/data.csv`;;
    let processedData;


    onMount(async () => {
            if (dataURL) {
                let data = await readCSV(dataURL);
                
                if (data) {
                    processedData = parseData(data, year);
                    console.log('Processed data:', processedData);
                } 
            }
        
    });
</script>
<br><br>

<div class="container">
    <table>
                <tr>
                    <th><b>Name</b></th>
                    <th><b>Branch</b></th>
                    <th><b>Role</b></th>
                </tr>
        {#if processedData}
            {#each processedData as p}
                <tr>
                    <th>{p["Name"]}</th>
                    <th>{p["Branch"]}</th>
                    <th>{p["Role"]}</th>
                </tr>
            {/each}
        {/if}
    </table>
</div>

<br>
<br>

<style>
            .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0 auto;
            padding: 20px;
            width: min(80%, 500px);
            height: auto;        
            user-select: none;
        }

        table {
        border-collapse: collapse;
        background: transparent;
        text-align: left;
        margin: 25px ;
        width: 80%;
        padding: 0%;
    }
    table tr {
        border-bottom: 1px solid #6c757d;
    }
    table th {
        padding: 12px;
    }

    @media (max-width: 768px) {

    }
</style>
