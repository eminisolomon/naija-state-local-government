// Basic usage example for ng-states-core v2.0.0
import {
  getStates,
  getStateNames,
  getState,
  getStatesAndCapitals,
  getCapital,
  getLgas,
  getSenatorialDistricts,
  getTowns,
  State,
  StateData,
} from "ng-states-core";

// Get all states with complete data
const allStates: State[] = getStates();
console.log("Total states:", allStates.length); // 37

// Get just state names
const stateNames: string[] = getStateNames();
console.log("First 5 states:", stateNames.slice(0, 5));

// Get complete data for a specific state
const lagosData: StateData = getState("Lagos");
console.log("\nLagos State:");
console.log("- Capital:", lagosData.capital);
console.log("- LGAs:", lagosData.lgas.length);
console.log("- Senatorial Districts:", lagosData.senatorial_districts);
console.log("- Major Towns:", lagosData.towns.length);

// Get states with their capitals
const statesAndCapitals = getStatesAndCapitals();
console.log("\nStates and Capitals:");
statesAndCapitals.slice(0, 3).forEach((s) => {
  console.log(`${s.state}: ${s.capital}`);
});

// Get specific information
const oyoCapital = getCapital("Oyo");
console.log("\nOyo Capital:", oyoCapital);

const oyoLgas = getLgas("Oyo");
console.log("Oyo LGAs count:", oyoLgas.length);

const oyoDistricts = getSenatorialDistricts("Oyo");
console.log("Oyo Senatorial Districts:", oyoDistricts);

const oyoTowns = getTowns("Oyo");
console.log("Major towns in Oyo:", oyoTowns.slice(0, 5));

// Case-insensitive queries work
const fctData = getState("abuja"); // Works with 'abuja', 'FCT', 'Abuja', etc.
console.log("\nFCT/Abuja Capital:", fctData.capital);
