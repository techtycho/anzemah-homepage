const navbar = document.querySelector(".nav-container");
let scroll;

window.onscroll = () => {
  scroll = document.documentElement.scrollTop; // Capture the scroll

  if (scroll > 40) {
    navbar.style.backgroundColor = "#000d";

    // ? Is the window scrolling backwards ?
    if (this.oldScroll > this.scrollY && scroll > 1000) {
      navbar.style.top = "-75px";
    } else {
      navbar.style.top = "0";
    }
  } else {
    navbar.style.background = "none";
    navbar.style.top = "0";
  }

  this.oldScroll = this.scrollY;
};
