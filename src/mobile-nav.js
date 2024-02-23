// humbger icon
const headerBtn = document.querySelector(".header__bars");
// mobile nav container
const mobileNav = document.querySelector(".mobile-nav");

// mobile links
const mobileLinks = document.querySelectorAll(".mobile-nav__link");
// state
// state  => false
let isMobileNavOpen = false;

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    isMobileNavOpen = false;
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});

headerBtn.addEventListener("click", () => {
  // state => true
  isMobileNavOpen = !isMobileNavOpen;
  // run when its true only
  if (isMobileNavOpen) {
    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});
