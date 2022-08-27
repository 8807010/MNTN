import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const navBtn = document.querySelector('.nav-button');
const mobileMav = document.querySelector('.mobile-nav');
const body = document.body;

// Клик по кнопке
navBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleMobileNav();
});

// Клик по окну за пределами навигации
window.addEventListener('click', function () {
  if (body.classList.contains('no-scroll')) {
    toggleMobileNav();
  }
});

// Останавливаем клик внутри открытой мобильной навигации
mobileMav.addEventListener('click', function (event) {
  event.stopPropagation();
});

function toggleMobileNav() {
  mobileMav.classList.toggle('mobile-nav-active');
  navBtn.classList.toggle('nav-button-close');
  body.classList.toggle('no-scroll');
};
