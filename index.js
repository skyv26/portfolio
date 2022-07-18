let mobileMenu = document.querySelector(".menu-btn--icon");
let mobileNavList = document.querySelector(
  ".main-header__navigation--menu__list"
);
let mobileNav = document.querySelector(".main-header__navigation--menu");
const menuItemLinks = document.querySelectorAll(".menu__item--link");
// const menuItemLink = document.getElementsByClassName("menu__item--link");
let closeBtn = document.createElement("img");

mobileMenu.addEventListener("click", () => {
  closeBtn.src = "./assets/IconCancel.svg";
  closeBtn.className = "menu-btn--close_icon";
  mobileNav.prepend(closeBtn);
  mobileNav.classList.add("mobile-menu");
  mobileNavList.classList.add("mobile-menu--nav");
  mobileMenu.style.display = "none";
  document.querySelector("body").style.overflow = "hidden";
  closeBtn.style.display = "block";

  for (let link of menuItemLinks) {
    link.classList.add("helper-nav-link");
  }
});

// adding an event handler to the menuBtnClose
closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("mobile-menu");
  mobileNavList.classList.remove("mobile-menu--nav");
  document.querySelector("body").style.overflow = "auto";
  mobileMenu.style.display = "block";
  closeBtn.style.display = "none";

  for (let link of menuItemLinks) {
    link.classList.remove("helper-nav-link");
  }
});
