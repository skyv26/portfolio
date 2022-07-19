const mobileMenu = document.querySelector('.menu-btn--icon');
const mobileNavList = document.querySelector(
  '.main-header__navigation--menu__list',
);
const mobileNav = document.querySelector('.main-header__navigation--menu');
const menuItemLinks = document.querySelectorAll('.menu__item--link');
const navLink = document.querySelector(".main-header__navigation--menu__list");
const closeBtn = document.createElement('img');
const navLinkChildren = Array.from(navLink.children);

mobileMenu.addEventListener('click', () => {
  closeBtn.src = './assets/IconCancel.svg';
  closeBtn.className = 'menu-btn--close_icon';
  mobileNav.prepend(closeBtn);
  mobileNav.classList.add('mobile-menu');
  mobileNavList.classList.add('mobile-menu--nav');
  mobileMenu.style.display = 'none';
  navLink.classList.toggle('w-100')
  navLinkChildren.slice(0,3).forEach((link) => link.classList.toggle("border-bottom"));
  navLinkChildren[navLinkChildren.length-1].style="display: none;";
  closeBtn.style.display = 'block';
  document.body.style.position='fixed';
  menuItemLinks.forEach((link) => link.classList.add('helper-nav-link'));
});

const closeBtnHandler = () => {
  mobileNav.classList.remove('mobile-menu');
  mobileNavList.classList.remove('mobile-menu--nav');
  mobileMenu.style.display = 'block';
  closeBtn.style.display = 'none';
  document.body.style.position='initial';
  navLink.classList.toggle('w-100')
  navLinkChildren.slice(0,3).forEach((link) => link.classList.toggle("border-bottom"));
  navLinkChildren[navLinkChildren.length-1].style="display: block;";
  menuItemLinks.forEach((link) => link.classList.remove('helper-nav-link'));
}

// adding an event handler to the menuBtnClose
closeBtn.addEventListener('click', () => {
  closeBtnHandler();
});



navLink.addEventListener('click', (e) => {
  closeBtnHandler();
})