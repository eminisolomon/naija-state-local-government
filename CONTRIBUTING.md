# Contributing to ng-states-core

Thank you for considering contributing to ng-states-core! 🇳🇬

## Quick Start

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/ng-states-core.git
cd ng-states-core

# Install and test
npm install
npm test
```

## Ways to Contribute

### 🐛 Report Bugs

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) and include:

- Steps to reproduce
- Expected vs actual behavior
- Code example
- Environment details

### 💡 Suggest Features

Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and describe:

- The problem you're solving
- Your proposed solution
- Use cases

### 📊 Correct Data

Use the [data correction template](.github/ISSUE_TEMPLATE/data_correction.md) and provide:

- Current incorrect data
- Correct data with source
- Reliable source URL

## Making Changes

### 1. Create a Branch

```bash
git checkout -b feat/your-feature
# or
git checkout -b fix/your-bug
```

### 2. Make Your Changes

- Follow existing code style
- Add tests for new features
- Update documentation

### 3. Test

```bash
npm test
npm run build
```

### 4. Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add new feature"
git commit -m "fix: correct bug"
git commit -m "docs: update readme"
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### 5. Submit PR

- Clear title and description
- Link related issues
- Ensure tests pass

## Code Guidelines

### TypeScript

```typescript
// ✅ Good
export function getState(state: string): StateData {
  if (!state) throw new Error("Invalid state name");
  return findState(state);
}

// ❌ Avoid
function getstate(s) {
  return data[s];
}
```

### Tests

```typescript
// ✅ Good - descriptive and complete
it("#getState() - should return state data", function () {
  const state = getState("Lagos");
  assert.equal(state.capital, "Ikeja");
});

it("#getState() - should throw for invalid state", function () {
  assert.throws(() => getState("Invalid"));
});
```

### Documentation

- Add JSDoc comments for public functions
- Update README if API changes
- Add examples for new features

## Data Contributions

### Adding New Data

1. Ensure accuracy from reliable sources
2. Add for ALL 37 states (consistency)
3. Update TypeScript interfaces
4. Add getter functions
5. Write tests

### Preferred Sources

- Official government websites
- National Bureau of Statistics (NBS)
- NIPOST (postal codes)
- Reputable geographic databases

## Project Structure

```sh
ng-states-core/
├── src/
│   ├── index.ts              # Main API
│   ├── interface.ts          # Type definitions
│   └── statesAndLocalGov.json # Data
├── test/
│   └── test.ts              # Tests
├── docs/                     # VitePress docs
└── examples/                 # Usage examples
```

## Need Help?

- 📖 [Documentation](docs/)
- 💬 [GitHub Discussions](https://github.com/eminisolomon/ng-states-core/discussions)
- 🐛 [Issues](https://github.com/eminisolomon/ng-states-core/issues)

## Code of Conduct

Be respectful and constructive. We're building this for the Nigerian developer community! 🇳🇬

---

**Thank you for contributing!** Every contribution, no matter how small, makes a difference.
