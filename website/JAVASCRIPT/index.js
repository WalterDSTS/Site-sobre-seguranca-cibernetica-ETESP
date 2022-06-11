/* Main Navigation Bar */

const btnMobileBurguer = document.getElementById('btnMobileBurguer');

function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expended', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobileBurguer.addEventListener('click', toggleMenu);
btnMobileBurguer.addEventListener('touchstart', toggleMenu);

/* Main Navigation Bar */