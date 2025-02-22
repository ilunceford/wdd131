const urlParams = new URLSearchParams(window.location.search);
const quote = urlParams.get('quote');
const thought = urlParams.get('thought');

// Display the quote and thought if they exist
if (quote) {
    document.getElementById('displayQuote').textContent = `"${quote}"`;
}
if (thought) {
    document.getElementById('displayThought').textContent = `"${thought}"`;
}