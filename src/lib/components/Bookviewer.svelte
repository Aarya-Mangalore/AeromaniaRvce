<script>
    let currentPage = 1;  // Start from the first image
    const totalPages = 52;  // Total pages (images)
  
    // Generate the image paths dynamically
    const getPageImage = (pageNumber) => `/magazine/${pageNumber}.jpg`;
  
    // Navigation functions
    const nextPage = () => {
      if (currentPage < totalPages) {
        currentPage += 1;
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        currentPage -= 1;
      }
    };
  
    const jumpToPage = (event) => {
      const pageNumber = parseInt(event.target.value);
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        currentPage = pageNumber;
      }
    };
  
    // Swipe functionality
    let startX = 0;
  
    const handleTouchStart = (event) => {
      startX = event.changedTouches[0].screenX;
    };
  
    const handleTouchEnd = (event) => {
      const endX = event.changedTouches[0].screenX;
      const diff = startX - endX;
  
      if (Math.abs(diff) > 50) {  // If the swipe distance is significant
        if (diff > 0) {
          nextPage();  // Swipe left to go to next page
        } else {
          prevPage();  // Swipe right to go to previous page
        }
      }
    };
  </script>
  
  <div class="book-container" on:touchstart={handleTouchStart} on:touchend={handleTouchEnd}>
    <div class="book">
      <div class="page">
        <img src={getPageImage(currentPage)} alt="Book Page" />
      </div>
    </div>
  
    <div class="controls">
      <button on:click={prevPage} disabled={currentPage === 1} class="space-button">←</button>
      <span>Page 
        <input 
          type="number" 
          min="1" 
          max={totalPages} 
          value={currentPage} 
          on:input={jumpToPage} 
          class="page-input"
        />
        / {totalPages}
      </span>
      <button on:click={nextPage} disabled={currentPage === totalPages} class="space-button">→</button>
    </div>
  </div>
  
  <style>
    /* Button styling */
    .space-button {
        padding: 15px 30px;
        color: #00FFFF; /* Cyan text */
        background-color: #000;
        border: 2px solid #00FFFF; /* Cyan border */
        border-radius: 8px;
        font-size: 18px;
        font-family: sans-serif;
        cursor: pointer;
        transition: all 0.4s ease; /* Smooth transition */
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
  
    /* Hover effect */
    .space-button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.4), transparent);
        transition: width 0.4s ease, height 0.4s ease, top 0.4s ease, left 0.4s ease;
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
  
    /* General styling for the entire page */
    body {
      background-color: #000;  /* Black background */
      color: #fff;  /* White text */
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
  
    .book-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    }
  
    .book {
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1000px;
      width: 40%;  /* Adjust width for larger screens */
      max-width: 800px;
      height: auto;  /* Set to auto so the height adjusts based on width */
      position: relative;
      background-color: #f0f0f0;
    }
  
    .page {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .page img {
      width: 100%;  /* Make the image responsive */
      height: auto;  /* Maintain aspect ratio */
      object-fit: contain;  /* Ensure the image fits well without stretching */
    }
  
    .controls {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .controls span {
      font-size: 1.2rem;
      margin: 0 15px;
      color: #fff;  /* White text */
    }
  
    .page-input {
      width: 50px;  /* Reduced width */
      text-align: center;
      font-size: 1.2rem;
      padding: 5px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #00b5e2;  /* Cyan underline */
      color: #fff;  /* White text */
      margin: 0 5px;
    }
  
    .page-input:focus {
      outline: none;
      border-color: #00b5e2;
    }
  
    /* Remove input arrows/spinners */
    .page-input::-webkit-outer-spin-button,
    .page-input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    .page-input[type="number"] {
      -moz-appearance: textfield;
    }
  
    /* Responsive Design for smaller screens */
    @media (max-width: 768px) {
      .book {
        width: 98%;  /* Adjust width to 98% for smaller screens */
      }
    }
  </style>
  