const buttons = document.querySelectorAll(".secondary-btn");

buttons.forEach((btn) => {
  btn.innerHTML += ` <i class="fa-solid fa-chevron-right"></i>`;
});
