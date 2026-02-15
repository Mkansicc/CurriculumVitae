(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const yearEl = document.getElementById("year");

  // Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Load saved theme
  const saved = localStorage.getItem("cv_theme");
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  // Toggle theme
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("cv_theme", next);
    });
  }
})();
