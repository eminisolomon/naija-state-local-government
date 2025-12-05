# Getting Started

Welcome to ng-states-core! This guide will help you get up and running quickly.

## What is ng-states-core?

ng-states-core is a comprehensive TypeScript library that provides complete data for all Nigerian states, including:

- 🏛️ State capitals
- 🗺️ Geopolitical zones
- 📮 Postal codes
- 📍 Geographic coordinates
- 👥 Population data
- 🏙️ Local Government Areas (LGAs)
- 🌆 Major towns
- 🎯 Senatorial districts

## Features

### Complete Data Coverage

All 36 states plus the Federal Capital Territory with accurate, up-to-date information.

### Zero Dependencies

Lightweight package with no external dependencies - just pure data and utility functions.

### TypeScript Support

Full type safety with comprehensive type definitions and excellent IntelliSense support.

### Powerful Search

Find states by LGA, town, or use fuzzy search to locate what you need.

### Geopolitical Zones

Filter and group states by Nigeria's 6 geopolitical zones.

## Installation

Install ng-states-core using your preferred package manager:

::: code-group

```bash [npm]
npm install ng-states-core
```

```bash [yarn]
yarn add ng-states-core
```

```bash [pnpm]
pnpm add ng-states-core
```

:::

## Basic Usage

### Import the Package

```typescript
// ES Modules
import { getStates, getState, getCapital } from "ng-states-core";

// CommonJS
const { getStates, getState, getCapital } = require("ng-states-core");
```

### Get All States

```typescript
import { getStates } from "ng-states-core";

const allStates = getStates();
console.log(allStates.length); // 37

// Each state has complete data
console.log(allStates[0]);
// {
//   state: 'Abia',
//   capital: 'Umuahia',
//   region: 'South-East',
//   postal_code: '440001',
//   coordinates: { latitude: 5.52491, longitude: 7.49461 },
//   population: 4200000,
//   created: '1991-08-27',
//   slogan: "God's Own State",
//   lgas: [...],
//   senatorial_districts: [...],
//   towns: [...]
// }
```

### Get Specific State Data

```typescript
import { getState } from "ng-states-core";

const lagos = getState("Lagos");
console.log(lagos.capital); // 'Ikeja'
console.log(lagos.population); // 15400000
console.log(lagos.region); // 'South-West'
```

### Search and Filter

```typescript
import { findStateByLga, getStatesByRegion } from "ng-states-core";

// Find state by LGA
const state = findStateByLga("Ikeja");
console.log(state?.state); // 'Lagos'

// Get all states in a region
const southWest = getStatesByRegion("South-West");
console.log(southWest.map((s) => s.state));
// ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
```

## Next Steps

- [Quick Start Guide](/guide/quick-start) - Dive deeper with more examples
- [API Reference](/api/overview) - Explore all available functions
- [Examples](/examples/basic) - See real-world usage examples

## Need Help?

- 📖 Check the [API Reference](/api/overview)
- 💬 Join [GitHub Discussions](https://github.com/eminisolomon/ng-states-core/discussions)
- 🐛 Report [Issues](https://github.com/eminisolomon/ng-states-core/issues)
- 🤝 Read [Contributing Guide](/guide/contributing)
