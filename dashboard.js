document.addEventListener("DOMContentLoaded", () => {
  const userGreeting = document.getElementById("userGreeting");
  const logoutBtn = document.getElementById("logoutBtn");
  const themeSelector = document.getElementById("themeSelector");

  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  userGreeting.textContent = `Bonjour, ${user.nom}`;

  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });

  themeSelector.addEventListener("change", (e) => {
    document.body.className = e.target.value;
  });
});
