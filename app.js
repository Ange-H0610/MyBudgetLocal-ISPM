// ----- SIGNUP -----
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPass").value;

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Inscription réussie ! Vous pouvez vous connecter.");
    window.location.href = "index.html";
  });
}


// ----- LOGIN -----
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("loginName").value;
    const password = document.getElementById("loginPass").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.name === name && user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.name);
      window.location.href = "dashboard.html";
    } else {
      alert("Nom ou mot de passe incorrect !");
    }
  });
}

// ----- CHECK LOGIN & DASHBOARD -----


if (window.location.pathname.includes("dashboard.html")) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "index.html";
  }

  const userName = localStorage.getItem("userName");
  document.getElementById("userGreeting").textContent = `Bonjour, ${userName}`;

  // CALCUL REVENUS - DEPENSES
  document.getElementById("calcBtn").addEventListener("click", function () {
    let totalRevenus = 0;
    let totalDepenses = 0;

    document.querySelectorAll(".revenu").forEach((input) => {
      totalRevenus += Number(input.value);
    });

    document.querySelectorAll(".depense").forEach((input) => {
      totalDepenses += Number(input.value);
    });

    const solde = totalRevenus - totalDepenses;

    document.getElementById("totalRevenus").innerText = totalRevenus;
    document.getElementById("totalDepenses").innerText = totalDepenses;
    document.getElementById("soldeFinal").innerText = solde;
  });

  // LOGOUT
  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    window.location.href = "index.html";
  });

  // THEME SWITCHER
  const themeSwitcher = document.getElementById("themeSwitcher");
  themeSwitcher.addEventListener("change", function () {
    document.body.className = "";
    document.body.classList.add(this.value);
  });
}
