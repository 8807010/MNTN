// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';

// import './_mobileMenu';


const navBtn = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.header__mobile');
const body = document.body;

console.log(mobileNav);


// Клик по кнопке
navBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleMobileNav();
  toggleMobileNav.style.transition = "all 0.9s ease";
});

// Клик по окну за пределами навигации
window.addEventListener('click', function () {
  if (body.classList.contains('no-scroll')) {
    toggleMobileNav();
  }
});

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
  event.stopPropagation();
});

function toggleMobileNav() {
  mobileNav.classList.toggle('header__mobile-active');
  navBtn.classList.toggle('header__mobile-close');
  body.classList.toggle('no-scroll');
};
