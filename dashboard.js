document.getElementById("calcBtn").addEventListener("click", () => {
  const revenus = document.querySelectorAll(".revenu");
  const depenses = document.querySelectorAll(".depense");

  let totalRevenus = 0;
  let totalDepenses = 0;

  revenus.forEach(r => totalRevenus += parseFloat(r.value) || 0);
  depenses.forEach(d => totalDepenses += parseFloat(d.value) || 0);

  document.getElementById("totalRevenus").textContent = totalRevenus;
  document.getElementById("totalDepenses").textContent = totalDepenses;
  document.getElementById("solde").textContent = totalRevenus - totalDepenses;
});
