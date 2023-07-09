// signup.js

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Create user object
  const user = {
    username,
    email,
    password
  };
  window.location.href = "hire.html";
  
  // Save user object to localStorage
  saveUserToLocalStorage(user);
  
  // Reset form fields
  form.reset();
  window.location.href = "hire.html";
});

function saveUserToLocalStorage(user) {
  // Convert user object to JSON string
  const userJson = JSON.stringify(user);
  
  // Save user JSON to localStorage
  localStorage.setItem('user', userJson);
}
