// Sauvegarde inscription
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nom = document.getElementById("nom").value.trim();
      const password = document.getElementById("password").value.trim();
      const sexe = document.getElementById("sexe").value;

      if (nom && password && sexe) {
        const user = { nom, password, sexe };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Inscription réussie !");
        window.location.href = "index.html";
      }
    });
  }

  // Vérif connexion
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nom = document.getElementById("nom").value.trim();
      const password = document.getElementById("password").value.trim();
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.nom === nom && user.password === password) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
      } else {
        alert("Nom ou mot de passe incorrect !");
      }
    });
  }
});
