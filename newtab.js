const quotes = [
    "ते जनाः तव सफलतायाः प्रतिक्षां कुर्वन्ति।"
    // You can add more here
    
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Display the random quote in the HTML
  document.getElementById('quote').innerText = getRandomQuote();
  