# ng-states-core

[![npm version](https://img.shields.io/npm/v/ng-states-core.svg)](https://www.npmjs.com/package/ng-states-core)
[![npm downloads](https://img.shields.io/npm/dm/ng-states-core.svg)](https://www.npmjs.com/package/ng-states-core)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, type-safe TypeScript library for Nigerian states, LGAs, senatorial districts, capitals, and major towns with **zero dependencies**.

## Features

- 🎯 **TypeScript First** - Full type safety with comprehensive type definitions
- 📦 **Zero Dependencies** - Lightweight and fast
- 🌍 **Complete Data** - All 36 states + FCT with LGAs, senatorial districts, capitals, and major towns
- 🗺️ **Geopolitical Zones** - Filter and group states by Nigeria's 6 geopolitical zones
- � **Rich Metadata** - Coordinates, postal codes, population, creation dates, and slogans
- � **Powerful Search** - Find states by LGA, town, or use fuzzy search
- ✅ **Well Tested** - 28+ tests ensuring reliability

## Installation

```bash
npm install ng-states-core
```

## Quick Start

```typescript
import { getState, findStateByLga, getStatesByRegion } from "ng-states-core";

// Get complete state data
const lagos = getState("Lagos");
console.log(lagos.capital); // 'Ikeja'
console.log(lagos.population); // 15400000
console.log(lagos.region); // 'South-West'

// Find state by LGA
const state = findStateByLga("Ikeja");
console.log(state?.state); // 'Lagos'

// Get all South-West states
const southWest = getStatesByRegion("South-West");
// ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
```

## Available Functions

### State Functions

`getStates()` · `getStateNames()` · `getState()` · `getStatesAndCapitals()` · `getCapital()` · `getLgas()` · `getSenatorialDistricts()` · `getTowns()`

### Search Functions

`findStateByLga()` · `findStateByTown()` · `searchStates()` · `searchTowns()`

### Geopolitical Zones

`getGeopoliticalZones()` · `getStatesByRegion()` · `getRegion()`

### Metadata

`getPostalCode()` · `getCoordinates()` · `getPopulation()` · `getCreationDate()` · `getSlogan()`

## Documentation

📚 **[Full Documentation](https://github.com/eminisolomon/ng-states-core/tree/main/docs)** - Comprehensive guides and API reference

� **[Examples](https://github.com/eminisolomon/ng-states-core/tree/main/examples)** - React, Vue, Next.js, and more

🤝 **[Contributing](CONTRIBUTING.md)** - Help improve this package

## Data Coverage

| Category                  | Count |
| ------------------------- | ----- |
| States                    | 36    |
| Federal Capital Territory | 1     |
| Total LGAs                | 774   |
| Senatorial Districts      | 109   |
| State Capitals            | 37    |
| Major Towns               | 1000+ |
| Geopolitical Zones        | 6     |

## TypeScript Support

```typescript
import type { State, StateData, GeopoliticalZone } from "ng-states-core";

const state: State = getState("Lagos");
const zone: GeopoliticalZone = "South-West";
```

## License

MIT © [Solomon Olatunji](https://github.com/eminisolomon)

---

**Made with ❤️ for Nigeria** 🇳🇬
