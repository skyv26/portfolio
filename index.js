const mobileMenu = document.querySelector('.menu-btn--icon');
const mobileNavList = document.querySelector(
  '.main-header__navigation--menu__list',
);
const mobileNav = document.querySelector('.main-header__navigation--menu');
const menuItemLinks = document.querySelectorAll('.menu__item--link');
const mobileCloseMenuSrc = './assets/IconCancel.svg';
const defaultMobileMenuBtnSrc = mobileMenu.getAttribute('src');


const mobileMenuHandler = () => {
  const getMobileMenuBtnSrc = mobileMenu.getAttribute('src');
  const navLink = document.querySelector('.main-header__navigation--menu__list');
  if (getMobileMenuBtnSrc !== mobileCloseMenuSrc) {
    mobileMenu.setAttribute('src', mobileCloseMenuSrc);
  } else {
    mobileMenu.setAttribute('src', defaultMobileMenuBtnSrc);
  }
  navLink.classList.toggle('w-100');
  const navLinks = Array.from(navLink.children);
  navLinks.forEach((link) => link.classList.toggle('border-bottom'));
  mobileMenu.classList.toggle('active');
  mobileNav.classList.toggle('mobile-menu');
  document.body.classList.toggle('scroll-disable');
  mobileNavList.classList.toggle('mobile-menu--nav');
  menuItemLinks.forEach((link) => link.classList.toggle('helper-nav-link'));
}

mobileMenu.addEventListener('click', () => {
  mobileMenuHandler();
});

mobileNav.addEventListener('click', (e) => {
  const tagName = e.target.nodeName.toLowerCase();
  if (tagName === 'li' || tagName === 'a') {
    mobileMenuHandler();
  }
});