const menu = document.querySelector(".opened-menu");
const openButton = document.querySelector(".open-menu-button");
const closeButton = document.querySelector(".close-menu-button");
const mask = document.querySelector(".mask");

openButton.addEventListener("click",()=>{
    menu.style.transform = "scale(100%)";
    mask.style.width = "100%";
    mask.style.opacity = "1";
});

closeButton.addEventListener("click",()=>{
    menu.style.transform = "scale(0)";
    mask.style.width = "0";
    mask.style.opacity = "0";
});
