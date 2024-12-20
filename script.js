const nav_mobile = document.querySelector("[data-nav-mobile]");
const hamburger_icon = document.querySelector("[data-hamburger-icon]");
const close_icon = document.querySelector("[data-close-icon]");

hamburger_icon.addEventListener("click", () => {
     nav_mobile.style.display = "block";
     hamburger_icon.style.display = "none";
     if (window.innerWidth <= 840) {
          close_icon.style.display = "block";
     }
});

close_icon.addEventListener("click", () => {
     nav_mobile.style.display = "none";
     if (window.innerWidth <= 840) {
          hamburger_icon.style.display = "block";
     }
     close_icon.style.display = "none";
});
