<script>
    import BookViewer from '../../lib/components/Bookviewer.svelte'; // Adjust the path based on your project structure
  </script>
  
  <main>
    <br>
    <br>
    <br>
    <br>
    <h1>AURELIA</h1>
    <h3> (inaugural edition)</h3>
    <BookViewer />
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 20px;
    }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    @media(max-width: 860px){
        h1{
            font-size: 2rem;
        }
    }
  </style>
  