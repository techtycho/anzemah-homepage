const showcaseContent = document.querySelector(".showcase__content");
let text = showcaseContent.textContent;
text = text.replaceAll("  ", "").split("");

setTimeout(() => {
  showcaseContent.classList.add("typing");
}, 1500);

let speed = 100;
let delay = 2000; // 2 seconds

showcaseContent.textContent = ""; // Reset

let i = 0;
setTimeout(() => {
  const interval = setInterval(() => {
    if (i < text.length - 1) {
      i++;
      showcaseContent.textContent += text[i];
    } else {
      setTimeout(() => {
        showcaseContent.classList.remove("typing");
      }, 300);
      clearInterval(interval);
    }
  }, speed);
}, delay);
