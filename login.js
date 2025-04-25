function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    window.location.href = "homepage.html";
  }
  