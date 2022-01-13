// Déclaration des bouton et des boite pour mes menu damovible
const buttonSlideLeft = document.querySelector(".buttonSlideLeft");
const buttonSlideCenter = document.querySelector(".buttonSlideCenter");
const buttonSlideRight = document.querySelector(".buttonSlideRight");
const menuLeft = document.querySelector(".navBar__menuLeft > ul");
const menuCenter = document.querySelector(".navBar__menuCenter > ul");
const menuRight = document.querySelector(".navBar__menuRight > ul");

// Commande pour faire apparaître et disparaître mes menus
buttonSlideLeft.addEventListener("click", () => {
  menuLeft.classList.toggle("translateRight");
});

buttonSlideRight.addEventListener("click", () => {
  menuRight.classList.toggle("translateLeft");
  buttonSlideRight.classList.toggle("reverse");
});

buttonSlideCenter.addEventListener("click", () => {
  menuCenter.classList.toggle("translateDown");
  buttonSlideCenter.classList.toggle("reverse");
});
