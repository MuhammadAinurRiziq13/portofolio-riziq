// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("active");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// scroll
const text = "Muh. Ainur Riziq";
let index = 0;

function type() {
  document.getElementById("typing-text").innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(type, 150);
