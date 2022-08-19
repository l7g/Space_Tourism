//Event listener per selezione destination 
// Funzione per bordi selettore -- SUL MODELLO DI stepsBorder(riga 24)
let currentPlanet = document.querySelector('#moon');
currentPlanet.style.borderBottom = '2px solid white';
currentPlanet.style.color = 'white';
function planetsBorders(id){
    let prevPlanet = currentPlanet;
    currentPlanet = document.querySelector(`#${id}`);
    currentPlanet.style.borderBottom = '2px solid white';
    currentPlanet.style.color = 'white';
    prevPlanet.style.borderBottom = 'none';
    prevPlanet.style.color = '#d0d6f9';
}

//Funzione caricamento dinamico dati pianeti
const planetsDestinationData = toInsertData.destinations;
console.log(planetsDestinationData);
//Definizione div contenuti
const planetImgFirst = document.querySelector('.destination-aside-planet-img');
const planetImg = planetImgFirst.querySelector('img');
const planetName = document.querySelector('.destination-info-planet');
const planetDesc = document.querySelector('.destination-info-more');
const planetDist = document.querySelector('.planet-distance');
const planetTravelTime = document.querySelector('.planet-travel-time');
function planetDetails(id) {
    planetsDestinationData.forEach(planet => {
        if (id == planet.name.toLowerCase()) {
            planetImg.src = planet.images.png;
            planetName.innerHTML = planet.name;
            planetDesc.innerHTML = planet.description;
            planetDist.innerHTML = planet.distance;
            planetTravelTime.innerHTML = planet.travel;
        }
    })
}

const planets = document.querySelectorAll('.planet');
planets.forEach(planet => planet.addEventListener('click', (e) => {
    planetsBorders(e.target.id);
    planetDetails(e.target.id);
}))

//Mouse over and out effects
planets.forEach(planet => planet.addEventListener('mouseover', (e) => {
    mouseoverEffect(e.target.id)
}))
function mouseOutPlanet(id){
    let currPlanet = document.querySelector(`#${id}`);
    if (currPlanet != currentPlanet){
        currPlanet.style.borderBottom = 'none';
    }
}
planets.forEach(planet => planet.addEventListener('mouseout', (e) => {
    mouseOutPlanet(e.target.id)
}))
