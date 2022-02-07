// Déclaration des bouton et des boite pour mes menu damovible
const buttonSlideLeft = document.querySelector(".buttonSlideLeft");
const buttonSlideCenter = document.querySelector(".buttonSlideCenter");
const buttonSlideRight = document.querySelector(".buttonSlideRight");
const menuLeft = document.querySelector(".navBar__menuLeft > ul");
const menuCenter = document.querySelector(".navBar__menuCenter > ul");
const menuRight = document.querySelector(".navBar__menuRight > ul");

function getStyle(a, b) {
  return window.getComputedStyle(b, null)[a];
}
function logoRotate180(a) {
  a.classList.toggle("reverse");
}

// Ouverture et Fermeture de mes MENU de Naviguation
buttonSlideLeft.addEventListener("click", () => {
  if (getStyle("left", menuLeft) === "-350px") {
    menuLeft.style.left = "0px";
    logoRotate180(buttonSlideLeft);
  } else {
    menuLeft.style.left = "-350px";
    logoRotate180(buttonSlideLeft);
  }
});
buttonSlideCenter.addEventListener("click", () => {
  if (getStyle("top", menuCenter) === "-160px") {
    menuCenter.style.top = "48px";
    logoRotate180(buttonSlideCenter);
  } else {
    menuCenter.style.top = "-160px";
    logoRotate180(buttonSlideCenter);
  }
});
buttonSlideRight.addEventListener("click", () => {
  if (getStyle("right", menuRight) === "-64px") {
    menuRight.style.right = "0px";
    logoRotate180(buttonSlideRight);
  } else {
    menuRight.style.right = "-64px";
    logoRotate180(buttonSlideRight);
  }
});

// Par click au body et selon la taille du media
document.body.addEventListener("click", () => {
  if (getStyle("top", menuCenter) === "48px") {
    menuCenter.style.top = "-160px";
    logoRotate180(buttonSlideCenter);
  }
  if (window.frames.innerWidth < 1360 && getStyle("left", menuLeft) === "0px") {
    menuLeft.style.left = "-350px";
    logoRotate180(buttonSlideLeft);
  }
  if (
    window.frames.innerWidth < 780 &&
    getStyle("right", menuRight) === "0px"
  ) {
    menuRight.style.right = "-64px";
    logoRotate180(buttonSlideRight);
  }
});
