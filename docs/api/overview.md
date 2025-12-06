# API Overview

Complete reference for all functions in ng-states-core.

> [!TIP]
> All functions are case-insensitive and handle FCT aliases automatically.

## Quick Links

- **[State Functions](#state-functions)** - Get state data
- **[LGA Functions](#lga-location-functions)** - Work with LGAs and towns
- **[Region Functions](#region-functions)** - Filter by geopolitical zones
- **[Search Functions](#search-functions)** - Search states and towns
- **[Metadata Functions](#metadata-functions)** - Get coordinates, population, etc.

For detailed documentation with examples, see the [API Reference](/api-reference).

## State Functions

| Function                 | Description                            |
| ------------------------ | -------------------------------------- |
| `getStates()`            | Get all states with complete data      |
| `getStateNames()`        | Get list of all state names            |
| `getState(state)`        | Get complete data for a specific state |
| `getStateData(state)`    | Alias for getState()                   |
| `getStatesAndCapitals()` | Get all states with their capitals     |
| `getCapital(state)`      | Get the capital city of a state        |

## LGA & Location Functions

| Function                        | Description                            |
| ------------------------------- | -------------------------------------- |
| `getLgas(state)`                | Get local government areas for a state |
| `getSenatorialDistricts(state)` | Get senatorial districts for a state   |
| `getTowns(state)`               | Get major towns in a state             |
| `findStateByLga(lga)`           | Find which state an LGA belongs to     |
| `findStateByTown(town)`         | Find which state a town belongs to     |

## Region Functions

| Function                    | Description                           |
| --------------------------- | ------------------------------------- |
| `getGeopoliticalZones()`    | Get list of all geopolitical zones    |
| `getStatesByRegion(region)` | Get all states in a geopolitical zone |
| `getRegion(state)`          | Get the geopolitical zone for a state |

## Search Functions

| Function              | Description                        |
| --------------------- | ---------------------------------- |
| `searchStates(query)` | Search for states by name          |
| `searchTowns(query)`  | Search for towns across all states |

## Metadata Functions

| Function                 | Description                            |
| ------------------------ | -------------------------------------- |
| `getPostalCode(state)`   | Get postal code for a state            |
| `getCoordinates(state)`  | Get geographic coordinates for a state |
| `getPopulation(state)`   | Get population for a state             |
| `getCreationDate(state)` | Get creation date for a state          |
| `getSlogan(state)`       | Get slogan for a state                 |

## TypeScript Types

```typescript
interface State {
  state: string;
  capital: string;
  region: string;
  postal_code: string;
  coordinates: { latitude: number; longitude: number };
  population: number;
  created: string;
  slogan: string;
  lgas: string[];
  senatorial_districts: string[];
  towns: string[];
}

type GeopoliticalZone =
  | "North-Central"
  | "North-East"
  | "North-West"
  | "South-East"
  | "South-South"
  | "South-West";
```

## Next Steps

- [API Reference](/api-reference) - Detailed function reference with examples
- [Examples](/examples) - Practical code examples
- [Getting Started](/guide/getting-started) - Installation and quick start
