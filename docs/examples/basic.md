# Basic Usage

Learn the fundamentals of using ng-states-core with these basic examples.

## Getting All States

Get complete data for all Nigerian states:

```typescript
import { getStates } from "ng-states-core";

const allStates = getStates();
console.log(allStates.length); // 37

// Each state has complete data
allStates.forEach((state) => {
  console.log(`${state.state} - Capital: ${state.capital}`);
});
```

## Getting State Names

Get just the names of all states:

```typescript
import { getStateNames } from "ng-states-core";

const names = getStateNames();
console.log(names);
// ['Abia', 'Adamawa', 'Akwa Ibom', ...]

// Use in a dropdown
const stateOptions = names.map((name) => ({
  value: name,
  label: name,
}));
```

## Getting Specific State Data

Retrieve complete information for a specific state:

```typescript
import { getState } from "ng-states-core";

const lagos = getState("Lagos");

console.log(lagos);
// {
//   state: 'Lagos',
//   capital: 'Ikeja',
//   region: 'South-West',
//   postal_code: '100001',
//   coordinates: { latitude: 6.601838, longitude: 3.3514863 },
//   population: 15400000,
//   created: '1967-05-27',
//   slogan: 'Centre of Excellence',
//   lgas: [...],
//   senatorial_districts: [...],
//   towns: [...]
// }
```

## Case Insensitive Queries

All queries are case-insensitive:

```typescript
import { getState } from "ng-states-core";

// All of these work
const state1 = getState("lagos");
const state2 = getState("Lagos");
const state3 = getState("LAGOS");

console.log(state1.state === state2.state); // true
```

## FCT Aliases

The Federal Capital Territory has multiple aliases:

```typescript
import { getState } from "ng-states-core";

const fct1 = getState("FCT");
const fct2 = getState("Abuja");
const fct3 = getState("Federal Capital Territory");

console.log(fct1.state === fct2.state); // true
console.log(fct1.capital); // 'Abuja'
```

## Getting States with Capitals

Get a simplified list of states and their capitals:

```typescript
import { getStatesAndCapitals } from "ng-states-core";

const statesAndCapitals = getStatesAndCapitals();

statesAndCapitals.forEach(({ state, capital }) => {
  console.log(`${state}: ${capital}`);
});
// Abia: Umuahia
// Adamawa: Yola
// ...
```

## Getting LGAs

Get local government areas for a state:

```typescript
import { getLgas } from "ng-states-core";

const lagosLgas = getLgas("Lagos");
console.log(lagosLgas.length); // 21
console.log(lagosLgas);
// ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', ...]
```

## Getting Senatorial Districts

Get senatorial districts for a state:

```typescript
import { getSenatorialDistricts } from "ng-states-core";

const districts = getSenatorialDistricts("Lagos");
console.log(districts);
// ['Lagos Central', 'Lagos East', 'Lagos West']
```

## Getting Major Towns

Get major towns in a state:

```typescript
import { getTowns } from "ng-states-core";

const towns = getTowns("Lagos");
console.log(towns.length); // Many towns
console.log(towns.slice(0, 5));
// ['Ikeja', 'Lekki', 'Victoria Island', ...]
```

## Error Handling

Handle invalid state names gracefully:

```typescript
import { getState } from "ng-states-core";

try {
  const state = getState("Invalid State");
} catch (error) {
  console.error(error.message);
  // 'State "Invalid State" not found'
}

// Or check first
import { getStateNames } from "ng-states-core";

const stateName = "Lagos";
const validStates = getStateNames();

if (validStates.includes(stateName)) {
  const state = getState(stateName);
  // Safe to use
}
```

## CommonJS Usage

Using with CommonJS (Node.js):

```javascript
const { getStates, getState, getLgas } = require("ng-states-core");

const allStates = getStates();
const lagos = getState("Lagos");
const lgas = getLgas("Lagos");

console.log(lagos.capital); // 'Ikeja'
```

## Next Steps

- [React Integration](/examples/react) - Use in React components
- [Search & Filter](/examples/search) - Advanced search examples
- [API Reference](/api/overview) - Complete API documentation
