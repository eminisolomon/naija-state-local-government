# API Overview

ng-states-core provides a comprehensive set of functions to work with Nigerian state data.

## Function Categories

### State Functions

Core functions for retrieving state information.

- [`getStates()`](/api/states#getstates) - Get all states
- [`getStateNames()`](/api/states#getstatenames) - Get state names
- [`getState(state)`](/api/states#getstate) - Get specific state
- [`getStateData(state)`](/api/states#getstatedata) - Alias for getState
- [`getStatesAndCapitals()`](/api/states#getstatesandcapitals) - Get states with capitals
- [`getCapital(state)`](/api/states#getcapital) - Get state capital
- [`getLgas(state)`](/api/states#getlgas) - Get LGAs
- [`getSenatorialDistricts(state)`](/api/states#getsenatorialdistricts) - Get senatorial districts
- [`getTowns(state)`](/api/states#gettowns) - Get major towns

### Search Functions

Find states by various criteria.

- [`findStateByLga(lga)`](/api/search#findstatebylga) - Find state by LGA
- [`findStateByTown(town)`](/api/search#findstatebytown) - Find state by town
- [`searchStates(query)`](/api/search#searchstates) - Fuzzy search states
- [`searchTowns(query)`](/api/search#searchtowns) - Search towns

### Geopolitical Zone Functions

Work with Nigeria's geopolitical zones.

- [`getGeopoliticalZones()`](/api/zones#getgeopoliticalzones) - Get all zones
- [`getStatesByRegion(region)`](/api/zones#getstatesbyregion) - Get states by zone
- [`getRegion(state)`](/api/zones#getregion) - Get state's zone

### Metadata Functions

Access additional state information.

- [`getPostalCode(state)`](/api/metadata#getpostalcode) - Get postal code
- [`getCoordinates(state)`](/api/metadata#getcoordinates) - Get coordinates
- [`getPopulation(state)`](/api/metadata#getpopulation) - Get population
- [`getCreationDate(state)`](/api/metadata#getcreationdate) - Get creation date
- [`getSlogan(state)`](/api/metadata#getslogan) - Get state slogan

## Quick Reference

```typescript
import {
  // State functions
  getStates,
  getState,
  getCapital,

  // Search functions
  findStateByLga,
  searchStates,

  // Zone functions
  getStatesByRegion,

  // Metadata
  getCoordinates,
  getPopulation,
} from "ng-states-core";
```

## Type Definitions

All functions are fully typed. See [Type Definitions](/api/types) for details.

```typescript
interface State {
  state: string;
  capital: string;
  region: string;
  postal_code: string;
  coordinates: Coordinates;
  population: number;
  created: string;
  slogan: string;
  lgas: string[];
  senatorial_districts: string[];
  towns: string[];
}
```

## Error Handling

Functions that accept state names throw errors for invalid input:

```typescript
try {
  const state = getState("Invalid State");
} catch (error) {
  console.error(error.message); // 'State "Invalid State" not found'
}
```

Search functions return `undefined` or empty arrays instead of throwing:

```typescript
const state = findStateByLga("Invalid LGA");
console.log(state); // undefined

const results = searchStates("xyz");
console.log(results); // []
```

## Case Insensitivity

All string inputs are case-insensitive:

```typescript
(getState("lagos") === getState("Lagos")) === getState("LAGOS");
```

## FCT Aliases

The Federal Capital Territory can be referenced by multiple names:

```typescript
getState("FCT");
getState("Abuja");
getState("Federal Capital Territory");
// All return the same state
```

## Next Steps

- [State Functions](/api/states) - Detailed state function reference
- [Search Functions](/api/search) - Search and filter capabilities
- [Examples](/examples/basic) - See functions in action
