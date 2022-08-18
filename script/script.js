const homeContainer = document.querySelector('.home-container');
let initialBgImg = '../starter-code/assets/home/background-home-desktop.jpg';
let url = initialBgImg;
function setHomePage(){
    homeContainer.style.backgroundImage = `url(${url})`;
}
window.addEventListener('DOMContentLoaded', setHomePage);