let mobileMenu = document.querySelector('.menu-btn--icon');
let mobileNav = document.querySelector('.main-header__navigation--menu__list');

mobileMenu.addEventListener('click', () => {
  let closeBtn = document.createElement('img');
  closeBtn.src="./assets/IconCancel.svg";
  closeBtn.style="width: 24px; height: 24px; display: block;"
  mobileNav.prepend(closeBtn);
  mobileNav.classList.add('mobile-menu');
  document.querySelector('body').style.overflow='hidden';
  console.log(mobileNav.classList);
})