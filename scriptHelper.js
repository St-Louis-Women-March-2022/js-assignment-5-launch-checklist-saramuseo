// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
//take in string parameter (test Input) return value - "empty, not..."
//parameters will actually be in the form submission function 

    //window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
           let pilotNameInput = document.querySelector("input[name=pilotName]");
           let copilotNameInput = document.querySelector("input[name=copilotName]");
           let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
           let cargoMassInput = document.querySelector("input[name=cargoMass]");
           let readyForLaunch=true

    if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
        alert("All fields are required!");
        // stop the form submission
        console.log("empty");
        readyForLaunch=false
        event.preventDefault();
     }

    else if (isNaN(pilotNameInput.value) === true|| isNaN(copilotNameInput.value)===true|| isNaN(fuelLevelInput.value)===false || isNaN(cargoMassInput.value)===false){
        alert("Incorrect Data Type!");
        console.log("this is not a number")
        readyForLaunch=false
        event.preventDefault();
    }

    return (readyForLaunch)
     
    });
/*}); add this back if needing the window load function*/

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //take in validate input, then based on return , return corresponding alert (empty/required, wrong data, ready/not ready [extra validation with these])
  let pilotNameChange = document.getElementByName("pilotName");
  let copilotNameChange = document.getElementByName("copilotName");

    let pilotStatusChange = document.getElementById("pilotStatus");  
    let copilotStatusChange = document.getElementById("copilotStatus");     

       if (validateInput()) {
        pilotStatusChange.innerHTML = `Pilot ${pilotNameChange.value} is Ready`;
        copilotStatusChange.innerHTML = `Co-Pilot ${copilotNameChange.value} is Ready`;
      
            if (fuelLevel.value <10000){
                let faultyItems = document.getElementById("faultyItems");
                faultyItems.style.visibility = "visible";
                let launchStatusChange = document.getElementById ("launchStatus");
                launchStatusChange.innerHTML = "Shuttle not ready for launch";
                let launchStatusCheck = document.getElementById ("launchStatusCheck");
                launchStatusCheck.style.backgroundColor = "red";
            }

            else if (cargoLevel.value >10000) {
                let faultyItems = document.getElementById("faultyItems");
                faultyItems.style.visibility = "visible";
                let launchStatusChange = document.getElementById ("launchStatus");
                launchStatusChange.innerHTML = "Shuttle not ready for launch";
                let launchStatusCheck = document.getElementById ("launchStatusCheck");
                launchStatusCheck.style.backgroundColor = "red"
            }

            else {
                let launchStatusChange = document.getElementById ("launchStatus");
                launchStatusChange.innerHTML = "Shuttle is ready for Launch";
                let launchStatusCheck = document.getElementById ("launchStatusCheck");
                launchStatusCheck.style.backgroundColor = "green"
            }


       }
    //update pilotStatus, copilotStatus with names - using template literals
   //make div fault items visible and change message to not enough fuel for journey if fuel too low && change launch status to red and "Shuttle not ready for launch"
   //if cargo mass too give, make visible, change message to too much mass && launch status is red and "Shuttle not ready for launch"
   //if shuttle ready , change status to green and "Shuttle is ready for launch"
   

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;
