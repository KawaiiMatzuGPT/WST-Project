document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
  
    if (username && email && password) {
      alert("Account created successfully!");
      window.location.href = "index.html"; 
    } else {
      alert("Please fill out all fields.");
    }
  });
  