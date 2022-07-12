/* Write your JavaScript code here!*/

const { myFetch } = require("./scriptHelper");

{ formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
  }).then(function () {
    console.log(listedPlanets);
    //  Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    let pickedPlanet = pickPlanet(listedPlanets);
    console.log(pickedPlanet)
    addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
  });

  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let faultyItems = document.getElementById("faultyItems");
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    formSubmission(document, faultyItems.value, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)
  });

});


