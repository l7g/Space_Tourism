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


const circles = document.querySelectorAll(".circle");
circles.forEach((circle) =>
  circle.addEventListener("click", (e) => {
    bgCrewSelector(e.target.id);
  })
);
