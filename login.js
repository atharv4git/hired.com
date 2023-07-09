const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  
  // Perform authentication logic here
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Sample authentication logic (replace with your own)
  if (username === "admin" && password === "password") {
    // Redirect to hired.html upon successful login
    window.location.href = "hire.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});