async function getRandomQuote() {

    const response = await fetch('https://api.quotable.io/random'); 
  
    const data = await response.json();
  
    console.log(data.content, " - ", data.author); 
  
  }
  