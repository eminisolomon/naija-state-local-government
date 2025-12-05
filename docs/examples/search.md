# Search & Filter Examples

Learn how to search and filter Nigerian states data effectively.

## Find State by LGA

Find which state a local government area belongs to:

```typescript
import { findStateByLga } from "ng-states-core";

// Find state by LGA name
const state = findStateByLga("Ikeja");

if (state) {
  console.log(state.state); // 'Lagos'
  console.log(state.capital); // 'Ikeja'
}

// Case insensitive
const state2 = findStateByLga("ikeja");
console.log(state2?.state); // 'Lagos'

// Returns undefined if not found
const notFound = findStateByLga("Invalid LGA");
console.log(notFound); // undefined
```

## Find State by Town

Find which state a town belongs to:

```typescript
import { findStateByTown } from "ng-states-core";

// Find state by town name
const state = findStateByTown("Lekki");

if (state) {
  console.log(state.state); // 'Lagos'
  console.log(state.region); // 'South-West'
}

// Another example
const abaState = findStateByTown("Aba");
console.log(abaState?.state); // 'Abia'
```

## Fuzzy Search States

Search for states using partial matches:

```typescript
import { searchStates } from "ng-states-core";

// Search with partial name
const results = searchStates("lag");
console.log(results.map((s) => s.state));
// ['Lagos', 'Plateau'] (any state containing 'lag')

// Search for 'Oyo'
const oyoResults = searchStates("oyo");
console.log(oyoResults.map((s) => s.state));
// ['Oyo']

// Returns empty array if no match
const noMatch = searchStates("xyz123");
console.log(noMatch); // []
```

## Search Towns

Search for towns across all states:

```typescript
import { searchTowns } from "ng-states-core";

// Search for towns containing 'aba'
const results = searchTowns("aba");

results.forEach(({ state, town }) => {
  console.log(`${town} in ${state}`);
});
// Aba in Abia
// Abakaliki in Ebonyi
// Abeokuta in Ogun
// ...

// Case insensitive
const results2 = searchTowns("IKE");
console.log(results2);
// [{ state: 'Lagos', town: 'Ikeja' }, ...]
```

## Filter by Geopolitical Zone

Get all states in a specific geopolitical zone:

```typescript
import { getStatesByRegion } from "ng-states-core";

// Get all South-West states
const southWest = getStatesByRegion("South-West");
console.log(southWest.map((s) => s.state));
// ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']

// Get all North-Central states
const northCentral = getStatesByRegion("North-Central");
console.log(northCentral.map((s) => s.state));
// ['Benue', 'Federal Capital Territory', 'Kogi', 'Kwara', 'Nasarawa', 'Niger', 'Plateau']

// Case insensitive
const southEast = getStatesByRegion("south-east");
console.log(southEast.length); // 5
```

## Get All Geopolitical Zones

List all available geopolitical zones:

```typescript
import { getGeopoliticalZones } from "ng-states-core";

const zones = getGeopoliticalZones();
console.log(zones);
// [
//   'North-Central',
//   'North-East',
//   'North-West',
//   'South-East',
//   'South-South',
//   'South-West'
// ]
```

## Practical Example: Location Autocomplete

Build a location autocomplete feature:

```typescript
import { searchStates, searchTowns, findStateByLga } from "ng-states-core";

function autocompleteLocation(query: string) {
  const results = [];

  // Search states
  const states = searchStates(query);
  results.push(
    ...states.map((s) => ({
      type: "state",
      name: s.state,
      label: `${s.state} (State)`,
    }))
  );

  // Search towns
  const towns = searchTowns(query).slice(0, 10); // Limit results
  results.push(
    ...towns.map((t) => ({
      type: "town",
      name: t.town,
      state: t.state,
      label: `${t.town}, ${t.state}`,
    }))
  );

  return results;
}

// Usage
const results = autocompleteLocation("lag");
console.log(results);
// [
//   { type: 'state', name: 'Lagos', label: 'Lagos (State)' },
//   { type: 'town', name: 'Lekki', state: 'Lagos', label: 'Lekki, Lagos' },
//   ...
// ]
```

## Practical Example: State Selector with Regions

Group states by geopolitical zones:

```typescript
import { getGeopoliticalZones, getStatesByRegion } from "ng-states-core";

function getStatesByZone() {
  const zones = getGeopoliticalZones();

  return zones.map((zone) => ({
    zone,
    states: getStatesByRegion(zone).map((s) => ({
      name: s.state,
      capital: s.capital,
    })),
  }));
}

const grouped = getStatesByZone();
console.log(grouped);
// [
//   {
//     zone: 'North-Central',
//     states: [
//       { name: 'Benue', capital: 'Makurdi' },
//       { name: 'Federal Capital Territory', capital: 'Abuja' },
//       ...
//     ]
//   },
//   ...
// ]
```

## Practical Example: Validate Location

Validate if a location exists:

```typescript
import { findStateByLga, findStateByTown } from "ng-states-core";

function validateLocation(location: string, type: "lga" | "town") {
  if (type === "lga") {
    const state = findStateByLga(location);
    return {
      valid: !!state,
      state: state?.state,
      message: state
        ? `${location} is in ${state.state}`
        : `${location} is not a valid LGA`,
    };
  } else {
    const state = findStateByTown(location);
    return {
      valid: !!state,
      state: state?.state,
      message: state
        ? `${location} is in ${state.state}`
        : `${location} is not a valid town`,
    };
  }
}

console.log(validateLocation("Ikeja", "lga"));
// { valid: true, state: 'Lagos', message: 'Ikeja is in Lagos' }

console.log(validateLocation("Invalid", "town"));
// { valid: false, state: undefined, message: 'Invalid is not a valid town' }
```

## Next Steps

- [React Integration](/examples/react) - Use search in React components
- [Map Integration](/examples/maps) - Display results on a map
- [API Reference](/api/search) - Complete search API documentation
