<script>
    import Spons from "$lib/components/SponsorCard.svelte";
    import CirSpons from "$lib/components/CircleSponsorCard.svelte";
  </script>
  
  <main>
      <h1>Meet our Sponsors</h1>
      <div class="super-duper-container">

            <div class="super-container">
                <div class="container">
                    <Spons  name="Black hole space tech" 
                            imageurl="/sponser/Blackhole.png" 
                            hrefURL="https://in.linkedin.com/company/black-hole-space-tech-bhst" 
                            />
                </div>
            </div>

            <div class="super-container">
                <h3>
                    Banking partner
                </h3>
                <div class="container">
                    <Spons  name="Yes bank" 
                            imageurl="/sponser/yesbank.png" 
                            hrefURL="https://www.yesbank.in/" 
                            />
                </div>
            </div>
        
          <div class="super-container">
              <h3>OUR PAST SPONSORS</h3>
              <div class="container">
                  <Spons    name="Sparsh hospital" 
                            imageurl="/sponser/sparsh.png" 
                            hrefURL="https://www.sparshhospital.com/" 
                            />
                  <Spons    name="Boeing" 
                            imageurl="/sponser/Boeing.png" 
                            hrefURL="https://www.boeing.co.in/"
                            />
                  <Spons    name="IIT GATE classes" 
                            imageurl="/sponser/IITgate.png" 
                            hrefURL="https://www.iitiansgateclasses.com/"
                            />
                  <Spons    name="Spartificial" 
                            imageurl="/sponser/Spartificial.png" 
                            hrefURL="https://spartificial.com/"
                            />
                  <Spons    name="Aeronautical society of India" 
                            imageurl="/sponser/ASI.png" 
                            hrefURL="https://www.aerosocietyindia.co.in/"
                            />
              </div>
          </div>
      </div>
  </main>
  
  <style>
      .super-duper-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80%;
          margin: 0 auto;
      }
  
      .super-container {
          padding: 2% 0;
          width: 100%;
          text-align: center;
      }
  
      .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
      }
  
      h1 {
          font-size: 2.5rem;
          font-weight: 500;
          padding: 10px;
          text-align: center;
          text-transform: uppercase;
      }
  
      h3 {
          font-size: 2rem;
          font-weight: 500;
          padding: 10px;
          text-align: center;
          text-transform: uppercase;
      }
  
      @media (max-width: 400px) {
          h1 {
              font-size: 1.7rem;
              padding: 0%;
              padding-bottom: 10px;
          }
  
          h3 {
              font-size: 1.4rem;
              padding: 0%;
              padding-bottom: 0px;
              padding-top: 50px;
          }

          .super-container{
            padding: 0px;
          }
  
          .super-duper-container {
              padding: 2.5%;
              width: 95%;
          }

          .container {
          justify-content: center;
          gap: 0px;
          margin-top: 0px;
      }
      }
  </style>
  