// Main Navigation Bar

const btnMobileBurguer = document.getElementById('btnMobileBurguer');

function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
}

btnMobileBurguer.addEventListener('click', toggleMenu);
btnMobileBurguer.addEventListener('touchstart', toggleMenu);

// Switch Color Theme

let themeToggler = document.getElementById("themeToggler");
themeToggler.addEventListener("click", () => {
  let targetTheme;
  let currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    targetTheme = "dark";
  } else {
    targetTheme = "light";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
});

// ------------

let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  let browserTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
  document.documentElement.setAttribute("data-theme", browserTheme);
}

// Switch Color Theme

// Main Navigation Bar