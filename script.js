// Write your JavaScript code here!


window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotName.value === "" ||
         fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (isNaN(fuelLevelInput.value)) {
         alert("fuel level must be a number");
         event.preventDefault();
      }

      if (!isNaN(pilotNameInput.value)) {
         alert("Pilot name cannot be a number");
         event.preventDefault();
      }

      if (isNaN(cargoMassInput.value)) {
         alert("cargo mass must be a number")
         event.preventDefault();
      }

      if (!isNaN(copilotName.value)) {
         alert("Copilot name cannot be a number");
         event.preventDefault();
      }

      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      faultyItems.style.visibility = "visible";
      event.preventDefault();
      pilotStatus.innerHTML = `${pilotNameInput.value} is ready`;
      copilotStatus.innerHTML = `${copilotName.value} is ready`;
      if (fuelLevelInput.value <= 10000) {
         fuelStatus.innerHTML = "Fuel level is too low for launch!"
         launchStatus.innerHTML = "Shuttle not ready for launch!"
         launchStatus.style.color = "red"
      }
      if (cargoMassInput.value >= 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch!"
         launchStatus.style.color = "red"
         cargoStatus.innerHTML = "Cargo mass is too high for launch!"
      }
      if (cargoMassInput.value < 10000 && fuelLevelInput.value > 9999) {
         launchStatus.innerHTML = "Shuttle is ready for launch!"
         launchStatus.style.color = "green"
      }
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      return response.json()
         .then(function (json) {
            let randomNumber = Math.round(Math.random() * 6);
            let destination = json[randomNumber];
            let missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${destination.name}</li>
            <li>Diameter: ${destination.diameter}</li>
            <li>Star: ${destination.star}</li>
            <li>Distance from Earth: ${destination.distance}</li>
            <li>Number of Moons: ${destination.moons}</li>
         </ol>
         <img src="${destination.image}">`
         })
   })
});



/* This block of code shows how to format the HTML once you fetch some planetary destination!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
