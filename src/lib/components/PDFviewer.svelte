<script>
    import { onMount } from "svelte";
    export let pdfUrl = "/assets/docs/magazine.pdf";  // Use a relative path for the PDF file
    export let pageNumber = 1;  // Starting page number
  
    let canvas;
    let totalPages = 0;
  
    const renderPage = (num) => {
      const PDFJS = window.pdfjsLib;
      PDFJS.getDocument(pdfUrl).promise.then(function (pdf) {
        totalPages = pdf.numPages;
        pdf.getPage(num).then(function (page) {
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          
          const context = canvas.getContext("2d");
          page.render({ canvasContext: context, viewport: viewport });
        });
      });
    };
  
    onMount(() => {
      renderPage(pageNumber);
    });
  
    const nextPage = () => {
      if (pageNumber < totalPages) {
        pageNumber += 1;
        renderPage(pageNumber);
      }
    };
  
    const prevPage = () => {
      if (pageNumber > 1) {
        pageNumber -= 1;
        renderPage(pageNumber);
      }
    };
  </script>
  
  <div class="pdf-viewer">
    <canvas bind:this={canvas}></canvas>
  
    <div class="controls">
      <button on:click={prevPage} disabled={pageNumber <= 1}>Previous</button>
      <span>{pageNumber} / {totalPages}</span>
      <button on:click={nextPage} disabled={pageNumber >= totalPages}>Next</button>
    </div>
  </div>
  
  <style>
    .pdf-viewer {
      text-align: center;
      margin: 20px;
    }
  
    canvas {
      border: 1px solid #ccc;
      max-width: 100%;
      height: auto;
    }
  
    .controls {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .controls button {
      margin: 0 10px;
      padding: 5px 10px;
      font-size: 1rem;
    }
  
    .controls span {
      font-size: 1.2rem;
    }
  </style>
  