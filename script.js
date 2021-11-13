let burgerButton = document.querySelector(".toggler");
let openButton = document.querySelector(".toggler .open");
let closeButton = document.querySelector(".toggler .close");
let menu = document.querySelector(".header-menu")
function openMenu() {
    burgerButton.classList.toggle("opened");
    menu.style.display = "flex";
    menu.style.marginTop = "10px";
}
function closeMenu() {
    burgerButton.classList.toggle("opened");
    menu.style.display = "none";
    menu.style.marginTop = "0";
}
openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);