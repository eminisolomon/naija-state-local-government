---
layout: home

hero:
  name: ng-states-core
  text: Nigerian Location Data
  tagline: Complete data for all 36 states + FCT with zero dependencies
  image:
    src: /logo.svg
    alt: ng-states-core
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/eminisolomon/ng-states-core
    - theme: alt
      text: API Reference
      link: /api/overview

features:
  - icon: 🎯
    title: TypeScript First
    details: Full type safety with comprehensive type definitions and IntelliSense support

  - icon: 📦
    title: Zero Dependencies
    details: Lightweight package with no external dependencies, just pure data and functions

  - icon: 🌍
    title: Complete Data
    details: All 37 states with LGAs, capitals, towns, coordinates, population, and more

  - icon: 🔍
    title: Powerful Search
    details: Find states by LGA, town, or region with fuzzy search capabilities

  - icon: 🗺️
    title: Geopolitical Zones
    details: Filter and group states by Nigeria's 6 geopolitical zones

  - icon: 📍
    title: Location Data
    details: Coordinates, postal codes, and geographic information for all states

  - icon: 🚀
    title: Modern API
    details: Intuitive function names with comprehensive documentation and examples

  - icon: ✅
    title: Well Tested
    details: 28+ tests ensuring reliability and correctness of all functions
---

## Quick Example

```typescript
import { getState, findStateByLga, getStatesByRegion } from "ng-states-core";

// Get complete state data
const lagos = getState("Lagos");
console.log(lagos.capital); // 'Ikeja'
console.log(lagos.population); // 15400000

// Find state by LGA
const state = findStateByLga("Ikeja");
console.log(state?.state); // 'Lagos'

// Get all South-West states
const southWest = getStatesByRegion("South-West");
console.log(southWest.map((s) => s.state));
// ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
```

## Installation

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

## Why ng-states-core?

- **🇳🇬 Made for Nigeria** - Accurate, up-to-date data for all Nigerian states
- **👨‍💻 Developer Friendly** - Simple, intuitive API that just works
- **📚 Well Documented** - Comprehensive guides and examples
- **🔄 Actively Maintained** - Regular updates with community contributions
- **⚡ Production Ready** - Used in real-world applications

## What's Included?

### State Data

- State names and capitals
- Geopolitical zones
- Postal codes
- Geographic coordinates
- Population data
- Creation dates
- State slogans

### Administrative Divisions

- Local Government Areas (LGAs) - 774 total
- Senatorial Districts - 109 total
- Major Towns - 1000+ across all states

### Powerful Functions

- State queries and searches
- LGA and town lookups
- Geopolitical zone filtering
- Fuzzy search capabilities
- Metadata accessors

## Community

- [GitHub Discussions](https://github.com/eminisolomon/ng-states-core/discussions)
- [Report Issues](https://github.com/eminisolomon/ng-states-core/issues)
- [Contribute](https://github.com/eminisolomon/ng-states-core/blob/main/CONTRIBUTING.md)

## License

MIT © [Solomon Olatunji](https://github.com/eminisolomon)
