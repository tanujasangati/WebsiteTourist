document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
      event.preventDefault();
  
      let username = document.getElementById('username').value.trim();
      let password = document.getElementById('password').value.trim();
      let valid = true;
  
      // Clear previous error messages
      document.getElementById('usernameError').textContent = "";
      document.getElementById('passwordError').textContent = "";
  
      // Validation
      if (username === "") {
        document.getElementById('usernameError').textContent = "Username is required";
        valid = false;
      }
  
      if (password === "") {
        document.getElementById('passwordError').textContent = "Password is required";
        valid = false;
      }
  
      if (valid) {
        // ✅ Hardcoded credentials
        if (username === "admin" && password === "admin123") {
          alert("Login successful");
          window.location.href = "index.html"; // redirect to homepage
        } else {
          alert("Invalid username or password");
        }
      }
    });
  });
  