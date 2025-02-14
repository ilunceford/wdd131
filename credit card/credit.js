function isCardNumberValid(number) {
    // Normally we would contact a credit card service...but we don't know how to do that yet.
    // So to keep things simple, we will only accept one number.
    return number.replace(/\s/g, '') === '1234123412341234'; // Remove spaces before checking
}

function displayError(msg) {
    document.querySelector('.errorMsg').textContent = msg;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';

    // Get the credit card number input
    const cardNumberInput = document.querySelector('#cardNumber');
    const cardNumber = cardNumberInput ? cardNumberInput.value.replace(/\s/g, '') : ''; // Remove spaces

    // Clear any previous errors
    displayError('');

    // Check if cardNumber is a valid numeric string
    if (!/^\d{16}$/.test(cardNumber)) {
        errorMsg += 'Card number must be 16 digits.\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid.\n';
    }

    if (errorMsg) {
        displayError(errorMsg);
        return false;
    }

    alert('Card number is valid! Processing payment...');
    return true;
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#creditCardForm');
    if (form) {
        form.addEventListener('submit', submitHandler);
    } else {
        console.error('Form with id "creditCardForm" not found in the DOM.');
    }
});
