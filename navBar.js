const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navlinks");
const hidden = document.querySelector(".hidden");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo img");
const a = document.querySelectorAll(".navbar a");
const menuBtnIcon = document.querySelector(".menu-btn i");
const navLinksActive = document.querySelector(".navbar .navlinks li.active a");
const navLinksActiveMobile = document.querySelector(
  ".navbar .navlinksMobile li.active a"
);

// toggle the navigation menu when the menu button is clicked
menuBtn.addEventListener("click", function () {
  if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    hidden.style.display = "none";
  } else {
    hidden.style.display = "block";
    navbar.classList.add("open");
  }
});

navLinks.addEventListener("click", function () {
  navbar.classList.remove("open");
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  if (scroll > 750) {
    navbar.style.background = "#6b3cc9";

    menuBtnIcon.style.color = "#ffffff";

    logo.src = "images/logo.png";
    a.forEach((item) => {
      item.style.color = "#ffffff";
    });
    navLinksActive.style.color = "#ed143d";
    navLinksActiveMobile.style.color = "#ed143d";
  } else {
    navbar.style.background = "#6b3cc9";
    navbar.style.boxShadow = "none";
    menuBtnIcon.style.color = "#fff";
    logo.src = "images/logo.png";
    a.forEach((item) => {
      item.style.color = "#ffffff";
    });
    navLinksActive.style.color = "#ffffff";
    navLinksActiveMobile.style.color = "#ffffff";
  }
});
