const navLinks = document.querySelectorAll(".nav-item a");
const dropdowns = document.querySelectorAll(".nav-item .dropdown");
const collapse = document.getElementById("collapse");

let isDropdown = false;

navLinks.forEach((navLink) => {
  if (navLink.parentElement.children[1]) {
    navLink.addEventListener("mouseenter", () => {
      navLink.parentElement.children[1].style.opacity = "1";
      isDropdown = true;
    });
  }
});

dropdowns.forEach((dropdown) => {
  //// dropdown.style.left = `calc(50% + -${dropdown.clientWidth / 2}px)`;

  collapse.addEventListener("click", (e) => {
    e.preventDefault();

    if (dropdown.children[1].style.display === "block") {
      dropdown.children[2].style.opacity = "0";
      dropdown.children[2].style.width = "0";
      collapse.children[0].children[0].style.transform = "rotateZ(0)";
      setTimeout(() => {
        dropdown.children[2].style.height = "0";
        dropdown.children[1].style.display = "none";
      }, 200);
    } else {
      dropdown.children[1].style.display = "block";
      dropdown.children[2].style.opacity = "1";
      dropdown.children[2].style.width = "300px";
      dropdown.children[2].style.height = "180px";
      collapse.children[0].children[0].style.transform = "rotateZ(-180deg)";
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.style.opacity = "0";
    isDropdown = false;
  });
});
