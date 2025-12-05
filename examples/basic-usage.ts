// Basic usage example for @ng-states
import {
  all,
  states,
  lgas,
  senatorial_districts,
  State,
  StateData,
} from "ng-states-core";

// Get all states with type safety
const allStates: State[] = all();
console.log("Total states:", allStates.length);

// Get state names
const stateNames: string[] = states();
console.log("First 5 states:", stateNames.slice(0, 5));

// Get data for a specific state
const lagosData: StateData = lgas("Lagos");
console.log("\nLagos State:");
console.log("- LGAs:", lagosData.lgas.length);
console.log("- Senatorial Districts:", lagosData.senatorial_districts);

// Get senatorial districts
const oyoDistricts: string[] = senatorial_districts("Oyo");
console.log("\nOyo Senatorial Districts:", oyoDistricts);

// Case-insensitive queries work
const fctData = lgas("abuja"); // Works with 'abuja', 'FCT', 'Abuja', etc.
console.log("\nFCT/Abuja LGAs:", fctData.lgas);
