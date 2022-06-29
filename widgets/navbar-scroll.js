const navbar = document.querySelector(".nav-container");

window.onscroll = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbar.style.backgroundColor = "#000d";

    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      if (this.oldScroll > this.scrollY) {
        navbar.style.top = "-75px";
      } else {
        navbar.style.top = "0";
      }
    }
  } else {
    navbar.style.background = "none";
    navbar.style.top = "0";
  }

  this.oldScroll = this.scrollY;
};
