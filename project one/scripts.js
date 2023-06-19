// scripts.js

// Add your JavaScript code here
// Example: Form validation

// Get the form element
const form = document.getElementById('contact-form');

// Add event listener to the form submit event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Validate form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter your message');
    return;
  }

  // Submit the form if all fields are valid
  alert('Form submitted successfully!');
  form.reset();
});
// JavaScript Document