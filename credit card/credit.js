function isCardNumberValid(number) {
	// Normally we would contact a credit card service...but we don't know how to do that yet.
	// So to keep things simple, we will only accept one number.
	return number === '1234123412341234';
}

function displayError(msg) {
	// Display error message
	document.querySelector('.errorMsg').textContent = msg;
}

function submitHandler(event) {
	event.preventDefault();
	let errorMsg = '';

	// Get the credit card number input
	const cardNumber = event.target.cardNumber.value.trim();

	// Clear any previous errors
	displayError('');

	// Check if cardNumber is a valid numeric string
	if (!/^\d+$/.test(cardNumber)) {
		errorMsg += 'Card number must be a valid numeric value.\n';
	} else if (!isCardNumberValid(cardNumber)) {
		errorMsg += 'Card number is not a valid card number.\n';
	}

	if (errorMsg) {
		// Display the error message and stop form submission
		displayError(errorMsg);
		return false;
	}

	// If valid, you can proceed with the form submission (e.g., send data to server)
	alert('Card number is valid! Processing payment...');
	return true;
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('#credit-card');
	if (form) {
		form.addEventListener('submit', submitHandler);
	} else {
		console.error('Form with id "credit-card" not found in the DOM.');
	}
});
