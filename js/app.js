var path = document.querySelector("#logo-a-size");
window.addEventListener("scroll", function () {
  path.classList.toggle("logoa", window.scrollY > 0);
});

var visible = document.querySelector("#logo-b-size");
window.addEventListener("scroll", function () {
  visible.classList.toggle("logob", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggle() {
  var header = document.querySelector("header");
  header.classList.toggle("active");
}