(function initTheme() {
  var prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  var theme =
    localStorage.getItem("theme") || (prefersDarkMode ? "dark" : "light");

  if (theme === "dark") {
    document.querySelector("#body").classList.add("dark");
  }
})();
