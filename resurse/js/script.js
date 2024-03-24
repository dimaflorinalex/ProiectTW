let menuToggleBtn = document.getElementById("header__menu__btn");
let menu = document.getElementById("meniu");

menuToggleBtn.addEventListener("click", e => {
   menu.classList.toggle("meniu__small-screen--hidden");
});