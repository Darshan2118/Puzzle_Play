// set hero height to actual innerHeight (fixes mobile address-bar cropping)
function setHeroHeight() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.style.height = window.innerHeight + 'px';
}
window.addEventListener('resize', setHeroHeight);
window.addEventListener('orientationchange', setHeroHeight);
window.addEventListener('load', setHeroHeight);
setHeroHeight();

// Theme toggle (unified, persistent, works everywhere)
function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  localStorage.setItem("theme", theme);
}

function syncThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  // Set toggle checked state based on theme
  const savedTheme = localStorage.getItem("theme") || "light";
  themeToggle.checked = savedTheme === "dark";
  setTheme(savedTheme);
  // Listen for toggle changes
  themeToggle.addEventListener("change", function () {
    setTheme(this.checked ? "dark" : "light");
  });
}

// On page load
window.addEventListener("DOMContentLoaded", syncThemeToggle);
