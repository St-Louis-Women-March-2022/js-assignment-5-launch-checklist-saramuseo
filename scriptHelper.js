// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let destination = document.getElementById("missionTarget");

    destination.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
}

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput) === true) {
        return "Not a Number";
    }
    else if (isNaN(testInput) === false) {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log(pilot, copilot, fuelLevel, cargoLevel)

    let launchStatusChange = document.getElementById("launchStatus");
    let launchStatusCheck = document.getElementById("launchStatusCheck");

    if (validateInput(copilot) === "Empty" || validateInput(pilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        //console.log('no data populating');
        event.preventDefault();
    }
    else if (isNaN(pilot) === false || isNaN(copilot) === false || isNaN(fuelLevel) === true || isNaN(cargoLevel) === true) {
        alert("Incorrect Data Type!");
        //console.log("incorrect data here")
        event.preventDefault();
    }
    else if (fuelLevel < 10000 && cargoLevel < 10000) {
        faultyItems.style.visibility = "visible";
        faultyItems.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">There is not enough fuel for the journey.</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
                `
        launchStatusChange.innerHTML = "Shuttle not ready for launch";
        launchStatusCheck.style.backgroundColor = "red";
    }
    else if (cargoLevel > 10000 && fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        faultyItems.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">There is not enough fuel for the journey.</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
                </ol>`

        launchStatusChange.innerHTML = "Shuttle not ready for launch";
        launchStatusCheck.style.backgroundColor = "red";
    }
    else if (cargoLevel > 10000 && fuelLevel > 10000) {
        faultyItems.style.visibility = "visible";
        faultyItems.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too high for launch</li>
                </ol>`

        launchStatusChange.innerHTML = "Shuttle not ready for launch";
        launchStatusCheck.style.backgroundColor = "red";
    }
    else if (cargoLevel < 10000 && fuelLevel > 10000) {
        faultyItems.style.visibility = "visible";
        faultyItems.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>`

        launchStatusChange.innerHTML = "Shuttle ready for launch";
        launchStatusCheck.style.backgroundColor = "green";
    }


};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();


    });
    return planetsReturned;

}

function pickPlanet(planets) {
    randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
