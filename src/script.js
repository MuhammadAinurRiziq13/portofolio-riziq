// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("active");
});

// clik diluar humberger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("active");
  }
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("opacity-0");
    toTop.classList.add("opacity-100");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("opacity-100");
    toTop.classList.add("opacity-0");
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

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    html.classList.remove("light");
  } else {
    html.classList.remove("dark");
    html.classList.add("light");
  }
});
