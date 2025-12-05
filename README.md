# ng-states-core

[![npm version](https://img.shields.io/npm/v/ng-states-core.svg)](https://www.npmjs.com/package/ng-states-core)
[![npm downloads](https://img.shields.io/npm/dm/ng-states-core.svg)](https://www.npmjs.com/package/ng-states-core)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, type-safe TypeScript library for Nigerian states, local government areas (LGAs), and senatorial districts with **zero dependencies**.

## ✨ Features

- 🎯 **TypeScript First** - Full type safety with comprehensive type definitions
- 📦 **Zero Dependencies** - Lightweight and fast
- 🌍 **Complete Data** - All 36 states + FCT with LGAs and senatorial districts
- 🔍 **Case Insensitive** - Flexible querying (e.g., "lagos", "Lagos", "LAGOS" all work)
- 🚀 **Modern Package** - ESM and CommonJS support
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
const { all, states, lgas, senatorial_districts } = require("ng-states-core");

// Get all states with complete data
const allStates = all();
console.log(allStates.length); // 37

// Get just state names
const stateNames = states();
console.log(stateNames); // ['Abia', 'Adamawa', 'Akwa Ibom', ...]

// Get LGAs for a specific state
const lagosData = lgas("Lagos");
console.log(lagosData.lgas); // ['Agege', 'Ajeromi-Ifelodun', ...]
```

**📄 [View full CommonJS example](examples/commonjs-usage.js)**

### TypeScript (ESM)

```typescript
import {
  all,
  states,
  lgas,
  senatorial_districts,
  State,
  StateData,
} from "ng-states-core";

// Type-safe state data
const allStates: State[] = all();

// Get complete state data with types
const lagosData: StateData = lgas("Lagos");
console.log(lagosData.state); // 'Lagos'
console.log(lagosData.lgas.length); // 21
```

**📄 [View full TypeScript example](examples/basic-usage.ts)**

## 📚 API Reference

### `all()`

Returns all Nigerian states with their complete data.

**Returns:** `State[]`

```typescript
interface State {
  state: string;
  senatorial_districts: string[];
  lgas: string[];
}
```

**Example:**

```javascript
const allStates = all();
console.log(allStates[0]);
// {
//   state: 'Abia',
//   senatorial_districts: ['Abia Central', 'Abia North', 'Abia South'],
//   lgas: ['Aba North', 'Aba South', 'Arochukwu', ...]
// }
```

---

### `states()`

Returns an array of all Nigerian state names.

**Returns:** `string[]`

**Example:**

```javascript
const stateNames = states();
console.log(stateNames);
// ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', ...]
```

---

### `lgas(state: string)`

Returns complete data for a specific state including LGAs and senatorial districts.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `StateData`

**Throws:** `Error` if state is invalid or not found

**Example:**

```javascript
const oyoData = lgas("Oyo");
console.log(oyoData);
// {
//   state: 'Oyo',
//   senatorial_districts: ['Oyo Central', 'Oyo North', 'Oyo South'],
//   lgas: ['Afijio', 'Akinyele', 'Atiba', ...]
// }
```

---

### `senatorial_districts(state: string)`

Returns senatorial districts for a specific state.

**Parameters:**

- `state` (string) - Name of the state (case-insensitive)

**Returns:** `string[]`

**Throws:** `Error` if state is invalid or not found

**Example:**

```javascript
const districts = senatorial_districts("Lagos");
console.log(districts);
// ['Lagos Central', 'Lagos East', 'Lagos West']
```

## 🎯 TypeScript Support

This package is written in TypeScript and provides full type definitions out of the box.

### Available Types

```typescript
import type { State, StateData } from "ng-states-core";

// State interface
interface State {
  state: string;
  senatorial_districts: string[];
  lgas: string[];
}

// StateData (same as State)
interface StateData extends State {}
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
@ng-states/
├── src/
│   ├── index.ts              # Main module
│   ├── types.ts              # TypeScript type definitions
│   └── statesAndLocalGov.json # Data source
├── dist/                     # Built files (generated)
├── test/
│   └── test.js              # Test suite
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

## 🙏 Acknowledgments

- Data sourced from official Nigerian government records
- Maintained by the community

## 📊 Data Coverage

| Category                  | Count |
| ------------------------- | ----- |
| States                    | 36    |
| Federal Capital Territory | 1     |
| Total LGAs                | 774   |
| Senatorial Districts      | 109   |

---

**Made with ❤️ for Nigeria**
