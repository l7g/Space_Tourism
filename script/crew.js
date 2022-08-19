//Event listener selettore crew member
//funzione bg cerchi selettore
let currentCrewSelector = document.querySelector("#c0");
currentCrewSelector.style.background = "white";
function bgCrewSelector(id) {
  let prevSelector = currentCrewSelector;
  currentCrewSelector = document.querySelector(`#${id}`);
  currentCrewSelector.style.background = "white";
  prevSelector.style.background = "rgba(255, 255, 255, .4)";
}

//inserimento dinamico dati crew members
const crewMembersData = toInsertData.crew;
console.log(crewMembersData);
//definizione elementi dom corrispondenti ai dati
const crewRole = document.querySelector(".crew-info-role");
const crewMember = document.querySelector(".crew-info-name");
const crewBio = document.querySelectorAll(".crew-info-description");
const crewFirstImg = document.querySelector(".crew-image");
const crewImg = crewFirstImg.querySelector("img");

function crewDetails(id) {
    crewMembersData.forEach(crew => {
        let checkId = `c${crewMembersData.indexOf(crew)}`;
        if (id == checkId) {
            crewImg.src = crew.images.png;
            crewRole.innerHTML = crew.role;
            crewBio.innerHTML = crew.bio;
            crewMember.innerHTML = crew.name;
        }
    })
}

const circles = document.querySelectorAll(".circle");
circles.forEach((circle) =>
  circle.addEventListener("click", (e) => {
    bgCrewSelector(e.target.id);
    crewDetails(e.target.id);
  })
);
