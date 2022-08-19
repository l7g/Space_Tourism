//Impostazione sfondo home page
const homeContainer = document.querySelector('.home-container');
let initialBgImg = '../starter-code/assets/home/background-home-desktop.jpg';
let url = initialBgImg;
function setHomeBg(){
    homeContainer.style.backgroundImage = `url(${url})`;
}
window.addEventListener('DOMContentLoaded', setHomeBg);

//Event listener per selezione navbar
let currentStep = document.querySelector('#s00');
currentStep.style.borderBottom = "2px solid white";
console.log(currentStep.id)
function stepsBorder(id) {
    let prevStep = currentStep;
    currentStep = document.querySelector(`#${id}`);
    currentStep.style.borderBottom = "2px solid white";
    prevStep.style.border = 'none';
}
const steps = document.querySelectorAll('.step');
steps.forEach(step => step.addEventListener('click', (e) => {
    stepsBorder(e.target.id);
}))

//Event listeners per hover selezione navbar
//mouseover
function mouseoverEffect(id){
    let currStep = document.querySelector(`#${id}`);
    if (currStep.style.borderBottom != "2px solid white") {
       currStep.style.borderBottom = "2px solid rgba(255, 255, 255, .5)";
    }
    
}
steps.forEach(step => step.addEventListener('mouseover', (e) => {
    mouseoverEffect(e.target.id)
}))
//mouseout
function mouseOutEffect(id){
    let currStep = document.querySelector(`#${id}`);
    if (currStep != currentStep) {
        currStep.style.borderBottom = "none";
    }
}
steps.forEach(step => step.addEventListener('mouseout', (e) => {
    mouseOutEffect(e.target.id)
}))



