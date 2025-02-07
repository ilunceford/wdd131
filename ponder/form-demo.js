// form-demo.js

document.addEventListener("DOMContentLoaded", function () {
  const theForm = document.getElementById("checkoutForm");
  const paymentMethodSelect = document.getElementById("paymentMethod");

  theForm.addEventListener("submit", validateForm);
  paymentMethodSelect.addEventListener("change", togglePaymentDetails);
});

function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // Validate Full Name
  const fullName = theForm.fullName.value.trim();
  if (fullName.length < 2) {
    isValid = false;
    errors.push("Full Name must be at least 2 characters long.");
  }

  // Validate Email
  const email = theForm.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errors.push("Please enter a valid email address.");
  }

  // Validate Address
  const address = theForm.address.value.trim();
  if (address.length < 5) {
    isValid = false;
    errors.push("Address must be at least 5 characters long.");
  }

  // Validate Payment Method
  const paymentMethod = theForm.paymentMethod.value;
  if (!paymentMethod) {
    isValid = false;
    errors.push("Please select a payment method.");
  } else if (paymentMethod === "creditCard") {
    // Validate Credit Card Number
    const creditCardNumber = theForm.creditCardNumber.value.trim();
    if (!/^\d{16}$/.test(creditCardNumber)) {
      isValid = false;
      errors.push("Credit Card Number must be exactly 16 digits.");
    }
  } else if (paymentMethod === "paypal") {
    // Validate PayPal Username
    const paypalUsername = theForm.paypalUsername.value.trim();
    if (paypalUsername.length < 3) {
      isValid = false;
      errors.push("PayPal Username must be at least 3 characters long.");
    }
  }

  // Show errors and prevent submission if the form is invalid
  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(event) {
  const theForm = document.getElementById("checkoutForm");
  const creditCardContainer = document.getElementById("creditCardContainer");
  const paypalContainer = document.getElementById("paypalContainer");
  const paymentMethod = event.target.value;

  // Hide all payment fields
  creditCardContainer.hidden = true;
  paypalContainer.hidden = true;

  // Disable required attributes to prevent validation errors when hidden
  theForm.creditCardNumber.removeAttribute("required");
  theForm.paypalUsername.removeAttribute("required");

  // Show relevant payment fields and add required attribute
  if (paymentMethod === "creditCard") {
    creditCardContainer.hidden = false;
    theForm.creditCardNumber.setAttribute("required", "true");
  } else if (paymentMethod === "paypal") {
    paypalContainer.hidden = false;
    theForm.paypalUsername.setAttribute("required", "true");
  }
}

// Helper function to display errors
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  errorEl.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
}
