let burgerButton = document.querySelector(".toggler");
let menu = document.querySelector(".header-menu")
function toggleMenu() {
    burgerButton.classList.toggle("opened");
    menu.classList.toggle("opened");
}
burgerButton.addEventListener("click", toggleMenu);

let readmoreButton = document.querySelectorAll("[data-expand]");
for (element of readmoreButton) {
    element.addEventListener("click", function (event) {
        event.target.classList.toggle("opened");
        let readmore = document.getElementById(event.target.dataset.targetId);
        readmore.classList.toggle("opened");
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const headerOffset = 68;
        const element = document.querySelector(this.getAttribute('href'));
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
       });
    });
});