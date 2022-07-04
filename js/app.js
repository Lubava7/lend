let sub = document.getElementById("sub");
const modal = document.querySelector("#modal");
const ddm = document.querySelector(".dropdown-menu");
const ddtog = document.querySelector(".dropdown-toggle");
const ulddm = document.querySelector(".ulddm");
const addt = document.querySelector(".addt");

const p = document.querySelector(".ppp");
const dp = document.querySelector(".dp");

const story = document.querySelector(".story");
const storyul = document.querySelector(".ulddm-footer");

sub.addEventListener("click", function (event) {
  modal.style.display = "block";
});
ddtog.addEventListener("click", function (event) {
  ddm.classList.toggle("dropdown-menu");
  ddm.classList.toggle("dropdown-menu-block");
});
addt.addEventListener("click", function (event) {
  ulddm.classList.toggle("dropdown-menu");
  ulddm.classList.toggle("dropdown-menu-block");
});
p.addEventListener("click", function (event) {
  dp.classList.toggle("dropdown-menu");
  dp.classList.toggle("dropdown-menu-block");
});
story.addEventListener("click", function (event) {
  storyul.classList.toggle("dropdown-menu");
  storyul.classList.toggle("dropdown-menu-block");
});
