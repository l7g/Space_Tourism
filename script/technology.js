// Event listener selezione technology
//funzione bg cerchi selettore
let currentTechSelector = document.querySelector('#b0');
currentTechSelector.style.background = 'white';
currentTechSelector.style.color = 'black';
function bgTechSelector(id) {
    let prevSelector = currentTechSelector
    currentTechSelector = document.querySelector(`#${id}`);
    currentTechSelector.style.background = 'white';
    currentTechSelector.style.color = 'black';
    prevSelector.style.background = 'transparent';
    prevSelector.style.color = 'white';
}

//Funzione caricamento dinamico dati
const techData = toInsertData.technology;
//definizione div contenuti
const techName = document.querySelector('.tech-info-main-description-name');
const techInfo = document.querySelector('.tech-info-main-description-more');
const techFirstImg = document.querySelector('.tech-img');
const techImg = techFirstImg.querySelector('img');
function techDetails(id){
    techData.forEach(tech => {
        let checkId = `b${techData.indexOf(tech)}`;
        if (id == checkId) {
            techName.innerHTML = tech.name;
            techInfo.innerHTML = tech.description;
            techImg.src = tech.images.portrait; 
        }
    })
}

const bubbles = document.querySelectorAll('.bubble');
bubbles.forEach(bubble => bubble.addEventListener('click', (e) =>{
    bgTechSelector(e.target.id);
    techDetails(e.target.id);
}))



//Funzioni mouseover e mouse out selezione tech
function mouseoverEffectTech(id){
    let currBubb = document.querySelector(`#${id}`);
    if (currBubb.style.background != 'white') {
       currBubb.style.background = "rgba(255, 255, 255, .5)";
    }
    
}
bubbles.forEach(bubble => bubble.addEventListener('mouseover', (e) => {
    mouseoverEffectTech(e.target.id)
}))

//mouseout
function mouseOutEffectTech(id){
    let currBubb = document.querySelector(`#${id}`);
    if (currBubb != currentTechSelector) {
        currBubb.style.background = "transparent";
    }
}

bubbles.forEach(bubble => bubble.addEventListener('mouseout', (e) => {
    mouseOutEffectTech(e.target.id)
}))
