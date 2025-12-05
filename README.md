# ng-states-core

[![npm version](https://img.shields.io/npm/v/ng-states-core.svg)](https://www.npmjs.com/package/ng-states-core)
[![npm downloads](https://img.shields.io/npm/dm/ng-states-core.svg)](https://www.npmjs.com/package/ng-states-core)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, type-safe TypeScript library for Nigerian states, local government areas (LGAs), senatorial districts, capitals, and major towns with **zero dependencies**.

## ✨ Features

- 🎯 **TypeScript First** - Full type safety with comprehensive type definitions
- 📦 **Zero Dependencies** - Lightweight and fast
- 🌍 **Complete Data** - All 36 states + FCT with LGAs, senatorial districts, capitals, and major towns
- 🏛️ **State Capitals** - Get capital cities for all states
- 🏙️ **Major Towns** - Access major towns for each state
- 🔍 **Case Insensitive** - Flexible querying (e.g., "lagos", "Lagos", "LAGOS" all work)
- 🚀 **Modern API** - Intuitive function names (v2.0.0)
- ✅ **Well Tested** - Comprehensive test coverage

## 📦 Installation

```bash
npm install ng-states-core
```

```bash
yarn add ng-states-core
```

```bash
pnpm add ng-states-core
```

## 🚀 Quick Start

### JavaScript (CommonJS)

```javascript
const { getStates, getState, getCapital, getLgas } = require("ng-states-core");

// Get all states
const allStates = getStates();
console.log(allStates.length); // 37

// Get specific state data
const lagos = getState("Lagos");
console.log(lagos.capital); // 'Ikeja'
console.log(lagos.lgas.length); // 21

// Get just the capital
const capital = getCapital("Oyo");
console.log(capital); // 'Ibadan'
```

**📄 [View full CommonJS example](examples/commonjs-usage.js)**

### TypeScript (ESM)

```typescript
import {
  getStates,
  getState,
  getStatesAndCapitals,
  State,
} from "ng-states-core";

// Type-safe state data
const allStates: State[] = getStates();

// Get complete state data
const lagos = getState("Lagos");
console.log(lagos.capital); // 'Ikeja'
console.log(lagos.towns); // Array of major towns

// Get states with capitals
const statesAndCapitals = getStatesAndCapitals();
// [{ state: 'Abia', capital: 'Umuahia' }, ...]
```

**📄 [View full TypeScript example](examples/basic-usage.ts)**

## 📚 API Reference

### `getStates()`

Get all Nigerian states with complete data.

**Returns:** `State[]`

```typescript
interface State {
  state: string;
  capital: string;
  lgas: string[];
  senatorial_districts: string[];
  towns: string[];
}
```

**Example:**

```javascript
const allStates = getStates();
console.log(allStates[0]);
// {
//   state: 'Abia',
//   capital: 'Umuahia',
//   lgas: ['Aba North', 'Aba South', ...],
//   senatorial_districts: ['Abia Central', 'Abia North', 'Abia South'],
//   towns: ['Aba', 'Umuahia', 'Arochukwu', ...]
// }
```

---

### `getStateNames()`

Get an array of all Nigerian state names.

**Returns:** `string[]`

**Example:**

```javascript
const names = getStateNames();
console.log(names); // ['Abia', 'Adamawa', 'Akwa Ibom', ...]
```

---

### `getState(state: string)`

Get complete data for a specific state.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `StateData`

**Throws:** `Error` if state is invalid or not found

**Example:**

```javascript
const lagos = getState("Lagos");
console.log(lagos);
// {
//   state: 'Lagos',
//   capital: 'Ikeja',
//   lgas: ['Agege', 'Ajeromi-Ifelodun', ...],
//   senatorial_districts: ['Lagos Central', 'Lagos East', 'Lagos West'],
//   towns: ['Ikeja', 'Lekki', 'Victoria Island', ...]
// }
```

---

### `getStateData(state: string)`

Alias for `getState()`. Get complete data for a specific state.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `StateData`

---

### `getStatesAndCapitals()`

Get all states with their capital cities.

**Returns:** `StateWithCapital[]`

```typescript
interface StateWithCapital {
  state: string;
  capital: string;
}
```

**Example:**

```javascript
const statesAndCapitals = getStatesAndCapitals();
console.log(statesAndCapitals[0]); // { state: 'Abia', capital: 'Umuahia' }
```

---

### `getCapital(state: string)`

Get the capital city of a specific state.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `string`

**Throws:** `Error` if state is invalid or not found

**Example:**

```javascript
const capital = getCapital("Lagos");
console.log(capital); // 'Ikeja'
```

---

### `getLgas(state: string)`

Get local government areas for a specific state.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `string[]`

**Throws:** `Error` if state is invalid or not found

**Example:**

```javascript
const lgas = getLgas("Lagos");
console.log(lgas.length); // 21
console.log(lgas); // ['Agege', 'Ajeromi-Ifelodun', ...]
```

---

### `getSenatorialDistricts(state: string)`

Get senatorial districts for a specific state.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `string[]`

**Throws:** `Error` if state is invalid or not found

**Example:**

```javascript
const districts = getSenatorialDistricts("Lagos");
console.log(districts); // ['Lagos Central', 'Lagos East', 'Lagos West']
```

---

### `getTowns(state: string)`

Get major towns in a specific state.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `string[]`

**Throws:** `Error` if state is invalid or not found

**Example:**

```javascript
const towns = getTowns("Lagos");
console.log(towns); // ['Ikeja', 'Lekki', 'Victoria Island', ...]
```

## 🎯 TypeScript Support

This package is written in TypeScript and provides full type definitions out of the box.

### Available Types

```typescript
import type { State, StateData, StateWithCapital } from "ng-states-core";

// Complete state interface
interface State {
  state: string;
  capital: string;
  lgas: string[];
  senatorial_districts: string[];
  towns: string[];
}

// State data (same as State)
interface StateData extends State {}

// Simplified state with capital
interface StateWithCapital {
  state: string;
  capital: string;
}
```

## 💡 Usage Examples

### React Component

Build a state and LGA selector component with type safety:

**📄 [View React example](examples/react-component.tsx)**

### Vue Component

Create a Vue 3 composition API component:

**📄 [View Vue example](examples/vue-component.vue)**

### More Examples

Check out the [examples](examples/) directory for more usage patterns:

- [basic-usage.ts](examples/basic-usage.ts) - Basic TypeScript usage
- [commonjs-usage.js](examples/commonjs-usage.js) - CommonJS usage
- [react-component.tsx](examples/react-component.tsx) - React component
- [vue-component.vue](examples/vue-component.vue) - Vue component

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/atomicman57/naija-state-local-government.git
cd naija-state-local-government

# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Development mode (watch)
npm run dev
```

### Project Structure

```text
ng-states-core/
├── src/
│   ├── index.ts              # Main module
│   ├── interface.ts          # TypeScript type definitions
│   └── statesAndLocalGov.json # Data source
├── dist/                     # Built files (generated)
├── test/
│   └── test.ts              # Test suite
├── examples/
│   ├── basic-usage.ts       # TypeScript basic usage
│   ├── commonjs-usage.js    # CommonJS usage
│   ├── react-component.tsx  # React component example
│   └── vue-component.vue    # Vue component example
├── tsconfig.json            # TypeScript configuration
└── package.json             # Package metadata
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes using conventional commits:

   ```bash
   feat(scope): add new feature
   fix(scope): fix bug
   docs(scope): update documentation
   ```

4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Message Convention

- **Type**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Scope**: Specific area of change (e.g., `api`, `types`, `data`)
- **Subject**: Present tense, lowercase, no period at end
- **Body** (optional): Detailed explanation of changes
- **Footer** (optional): Reference issues with `Fixes #123`, `Closes #456`

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 👨‍💻 Author

**Solomon Olatunji** ([@eminisolomon](https://github.com/eminisolomon))

**Made with ❤️ for Nigeria**
