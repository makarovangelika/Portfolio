let burgerButton = document.querySelector(".toggler");
let menu = document.querySelector(".header-menu")
function toggleMenu() {
    burgerButton.classList.toggle("opened");
    menu.classList.toggle("opened");
}
burgerButton.addEventListener("click", toggleMenu);
