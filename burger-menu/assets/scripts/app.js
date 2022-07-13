const burger = document.querySelector(".burger");
const navContainer = document.querySelector(".nav");
const main = document.querySelector(".main");

let menuOpen = false;
burger.addEventListener("click", () => {
  if (!menuOpen) {
    menuOpen = true;
    burger.classList.add("active");
    navContainer.classList.toggle("show");
    main.style.backgroundColor = "black";


  } else {
    menuOpen = false;
    burger.classList.remove("active");
    navContainer.classList.remove("show");
    main.style.backgroundColor = "white";

  }
});

window.addEventListener('scroll', function() {
  let nav = document.querySelector('.nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});
