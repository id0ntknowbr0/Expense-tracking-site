const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();  

  let errors = getLoginFormErrors(email_input.value, password_input.value);

  if (errors.length > 0) {
    //  error 
    error_message.innerText = errors.join(". ");
  } else { 
    window.location.href = "index.html";
  }
});

// Validation function
function getLoginFormErrors(email, password) {
  let errors = [];
  if (email === '' || email == null) errors.push('Email is required');
  if (password === '' || password == null) errors.push('Password is required');
  if (password.length < 8) errors.push('Password must be at least 8 characters long'); // Check for password length
  return errors;
}

