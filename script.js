// Basic login validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "12345") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to next page
  } else {
    alert("Invalid username or password. Try again!");
  }
});
