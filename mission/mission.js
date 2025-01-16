// Select the <select> element from the DOM
const themeSelector = document.querySelector('#themeSelector');

// Define the changeTheme function
function changeTheme() {
    // Check what option is currently selected in the theme selector
    const currentTheme = themeSelector.value;

    // If the selected option is "dark"
    if (currentTheme === 'dark') {
        // Add the dark class to the body
        document.body.classList.add('dark');
        // Change the logo image src to the white logo
        document.querySelector('#logo').src = 'white-logo.png';
    } else {
        // If it's not "dark", remove the dark class from the body
        document.body.classList.remove('dark');
        // Change the logo image src to the blue logo
        document.querySelector('#logo').src = 'blue-logo.png';
    }
}

// Add an event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);
