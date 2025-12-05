// CommonJS usage example for ng-states-core v2.0.0
const {
  getStates,
  getStateNames,
  getState,
  getStatesAndCapitals,
  getCapital,
  getLgas,
  getSenatorialDistricts,
  getTowns,
} = require("ng-states-core");

// Get all states with complete data
const allStates = getStates();
console.log("Total states:", allStates.length); // 37

// Get just state names
const stateNames = getStateNames();
console.log("State names:", stateNames); // ['Abia', 'Adamawa', 'Akwa Ibom', ...]

// Get complete data for a state
const lagosData = getState("Lagos");
console.log("\nLagos:");
console.log("- Capital:", lagosData.capital);
console.log("- LGAs:", lagosData.lgas);

// Get states with capitals
const statesAndCapitals = getStatesAndCapitals();
console.log("\nFirst 3 states with capitals:");
statesAndCapitals.slice(0, 3).forEach((s) => {
  console.log(`${s.state}: ${s.capital}`);
});

// Get specific information
const capital = getCapital("Oyo");
console.log("\nOyo Capital:", capital);

const districts = getSenatorialDistricts("Oyo");
console.log("Oyo Senatorial Districts:", districts);

const towns = getTowns("Lagos");
console.log("\nMajor towns in Lagos:", towns.slice(0, 10));
