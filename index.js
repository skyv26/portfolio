let mobileMenu = document.querySelector('.menu-btn--icon');
let mobileNavList = document.querySelector('.main-header__navigation--menu__list');
let mobileNav = document.querySelector('.main-header__navigation--menu');

mobileMenu.addEventListener('click', () => {
  let closeBtn = document.createElement('img');
  closeBtn.src="./assets/IconCancel.svg";
  closeBtn.className='menu-btn--close_icon'
  mobileNav.prepend(closeBtn);
  mobileNav.classList.add('mobile-menu');
  mobileNavList.classList.add('mobile-menu--nav');
  mobileMenu.style.display='none';
  document.querySelector('body').style.overflow='hidden';
})