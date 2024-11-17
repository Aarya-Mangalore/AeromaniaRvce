<script>
    export let imgUrl = ""
</script>

<div class="bgcontainer" style="background-image:
                                    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                                     url('{imgUrl}');" >

<slot></slot>


</div>

<style>
    /* Dont call it container. Bootstrap has container*/
    .bgcontainer{ 
      display:grid;
      place-items:center;
      min-height: 100vh ;
      background-color: black;
      background-size:cover;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;      
    }
</style>