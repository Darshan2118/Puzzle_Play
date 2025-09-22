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

//theme toggle
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
  });
}
