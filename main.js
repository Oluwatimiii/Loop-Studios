const hamBurg = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");
const hamImg =  document.querySelector(".ham-img");
const closebtn =  document.querySelector(".close");

hamBurg.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamImg.classList.toggle("active");
    closebtn.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    closebtn.classList.remove("active");
    hamImg.classList.toggle("active");
}))
