//Impostazione sfondi
const homeContainer = document.querySelector('body');
const initialBgImg = '../starter-code/assets/home/background-home-desktop.jpg';
const destinatonBgImg = '../starter-code/assets/destination/background-destination-desktop.jpg';
const crewBgImg = '../starter-code/assets/crew/background-crew-desktop.jpg'
function setHomeBg(){
    let url = initialBgImg;
    homeContainer.style.backgroundImage = `url(${url})`;
}
function setDestinationBg(){
    let url = destinatonBgImg;
    homeContainer.style.backgroundImage = `url(${url})`;
}
function setCrewBg(){
    let url = crewBgImg;
    homeContainer.style.backgroundImage = `url(${url})`;
}
window.addEventListener('DOMContentLoaded', setHomeBg);

//Event listener per selezione navbar
let currentStep = document.querySelector('#s00');
currentStep.style.borderBottom = "2px solid white";
//definizione pagine
const homePage = document.querySelector('.main');
const destinationPage = document.querySelector('.destination');
const crewPage = document.querySelector('.crew');
//setting homepage come pagine visibile al lancio
destinationPage.style.display = 'none';
crewPage.style.display = 'none';
//Funzione borders
function stepsBorder(id) {
    let prevStep = currentStep;
    currentStep = document.querySelector(`#${id}`);
    currentStep.style.borderBottom = "2px solid white";
    prevStep.style.border = 'none';
}
//Funzione selettore sezione
function stepsSelector(id){
    currentStep = document.querySelector(`#${id}`);
    if (currentStep == document.querySelector('#s00')) {
        homePage.style.display = 'flex';
        setHomeBg();
    } else {
        homePage.style.display = 'none';
    }
    if (currentStep == document.querySelector('#s01')) {
        destinationPage.style.display = 'flex';
        setDestinationBg();
    } else {
        destinationPage.style.display = 'none';
    }
    if (currentStep == document.querySelector('#s02')) {
        crewPage.style.display = 'flex';
        setCrewBg();
    } else {
        crewPage.style.display = 'none';
    }
}

const steps = document.querySelectorAll('.step');
steps.forEach(step => step.addEventListener('click', (e) => {
    stepsBorder(e.target.id);
    stepsSelector(e.target.id);
}))



//Event listeners per hover selezione navbar e selettore pianeti
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

//Event listener per bottone 'Esplora'
const exploreButton = document.querySelector('.main-button');

function exploreDestinations(){
    homePage.style.display = 'none';
    destinationPage.style.display = 'flex';
    setDestinationBg();
    stepsBorder('s01')
}

exploreButton.addEventListener('click', exploreDestinations)



