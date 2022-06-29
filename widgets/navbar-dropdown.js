const navLinks = document.querySelectorAll(".nav-item a");
const dropdowns = document.querySelectorAll(".nav-item .dropdown");

navLinks.forEach((navLink) => {
  navLink.addEventListener("mouseenter", () => {
    navLink.parentElement.children[1].style.opacity = "1";
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.style.left = `calc(50% + -${dropdown.clientWidth / 2}px)`;

  dropdown.addEventListener("mouseleave", () => {
    dropdown.style.opacity = "0";
  });
});
