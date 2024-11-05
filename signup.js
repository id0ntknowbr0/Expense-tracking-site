const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input'); 
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input'); 
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();  
  
  let errors = [];

  if (firstname_input && firstname_input.value !== '') {
    // signup  validation
    errors = getSignupFormErrors(
      firstname_input.value,
      email_input.value,
      password_input.value,
      repeat_password_input.value
    );
  } else {
    //login validation
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if (errors.length > 0) { 
    //for error
    error_message.innerText = errors.join(". ");
  } else { 
    window.location.href = "index.html";
  }
});

// Validation functions
function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];
  if (firstname === '' || firstname == null) errors.push('Firstname is required');
  if (email === '' || email == null) errors.push('Email is required');
  if (password === '' || password == null) errors.push('Password is required');
  if (password.length < 8) errors.push('Password must have at least 8 characters');
  if (password !== repeatPassword) errors.push('Password does not match repeated password');
  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];
  if (email === '' || email == null) errors.push('Email is required');
  if (password === '' || password == null) errors.push('Password is required');
  if (password.length < 8) errors.push('Password must have at least 8 characters'); 
  return errors;
}
