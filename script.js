const nav_mobile = document.querySelector("[data-nav-mobile]");
const hamburger_icon = document.querySelector("[data-hamburger-icon]");
const close_icon = document.querySelector("[data-close-icon]");

hamburger_icon.addEventListener("click", () => {
     nav_mobile.style.display = "block";
     const hidding = (hamburger_icon.style.display = "none");
     hamburger_icon.style.setProperty("--show-icon", hidding);
     close_icon.style.display = "block";
});

close_icon.addEventListener("click", () => {
     nav_mobile.style.display = "none";
     const showing = (hamburger_icon.style.display = "block");
     hamburger_icon.style.setProperty("--show-icon", showing);
     close_icon.style.display = "none";
});
