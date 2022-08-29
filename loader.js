var loader = document.querySelector(".preloader");
window.addEventListener("load", vanish);

console.log("completed");

function vanish() {
  loader.classList.add("disappear");
}