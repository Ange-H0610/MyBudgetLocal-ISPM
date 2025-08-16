// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("signupUser").value;
    const pass = document.getElementById("signupPass").value;
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    alert("Inscription réussie, connectez-vous !");
    window.location.href = "index.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    if (
      user === localStorage.getItem("username") &&
      pass === localStorage.getItem("password")
    ) {
      window.location.href = "dashboard.html";
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  });
}
