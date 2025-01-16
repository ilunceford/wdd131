const themeSelector = document.querySelector('#mode-select');

function changeTheme() {
    const currentTheme = themeSelector.value;

    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('#logo').src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('#logo').src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);
