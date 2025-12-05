// CommonJS usage example for @ng-states
const { all, states, lgas, senatorial_districts } = require("ng-states-core");

// Get all states with complete data
const allStates = all();
console.log("Total states:", allStates.length); // 37

// Get just state names
const stateNames = states();
console.log("State names:", stateNames); // ['Abia', 'Adamawa', 'Akwa Ibom', ...]

// Get LGAs for a specific state
const lagosData = lgas("Lagos");
console.log("\nLagos LGAs:", lagosData.lgas); // ['Agege', 'Ajeromi-Ifelodun', ...]

// Get senatorial districts
const districts = senatorial_districts("Oyo");
console.log("\nOyo Senatorial Districts:", districts); // ['Oyo Central', 'Oyo North', 'Oyo South']
