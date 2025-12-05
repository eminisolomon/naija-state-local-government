# Contributing to ng-states-core

First off, thank you for considering contributing to ng-states-core! It's people like you that make this package a great tool for the Nigerian developer community.

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, error messages)
- **Describe the behavior you observed** and what you expected
- **Include your environment details** (Node version, OS, package version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternative solutions** you've considered

### Data Corrections

If you find incorrect data (LGAs, towns, coordinates, etc.):

1. Open an issue with the "data-correction" label
2. Provide the incorrect data and the correct data
3. Include a reliable source for the correction
4. We'll verify and update the data

## Development Setup

### Prerequisites

- Node.js 16+ and npm
- Git

### Setup Steps

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/ng-states-core.git
cd ng-states-core

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Start development mode (watch)
npm run dev
```

### Project Structure

```bash
ng-states-core/
├── src/
│   ├── index.ts              # Main module with all functions
│   ├── interface.ts          # TypeScript type definitions
│   └── statesAndLocalGov.json # Core data
├── test/
│   └── test.ts              # Test suite
├── docs/                     # VitePress documentation
├── examples/                 # Usage examples
└── scripts/                  # Build and utility scripts
```

## Making Changes

### Workflow

1. **Create a branch** from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**:

   - Write clear, readable code
   - Follow the existing code style
   - Add/update tests as needed
   - Update documentation

3. **Test your changes**:

   ```bash
   npm test
   npm run build
   ```

4. **Commit your changes**:

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**

```github
feat(api): add getStateByCoordinates function
fix(data): correct Kano LGA count
docs(readme): update installation instructions
test(search): add tests for fuzzy search
```

### Code Style

- Use TypeScript for all new code
- Follow the existing code patterns
- Use meaningful variable and function names
- Add JSDoc comments for public functions
- Keep functions focused and small
- Write tests for new functionality

### Testing Guidelines

- All new features must include tests
- Aim for high test coverage
- Test both success and error cases
- Use descriptive test names

**Example:**

```typescript
it("#newFunction() - should return expected result", function () {
  const result = newFunction("input");
  assert.equal(result, "expected");
});

it("#newFunction() - should throw error for invalid input", function () {
  assert.throws(() => {
    newFunction("");
  }, /Invalid input/);
});
```

## Pull Request Process

1. **Update documentation** if you've changed APIs
2. **Update the README** if needed
3. **Ensure all tests pass**
4. **Update CHANGELOG.md** (if applicable)
5. **Create a Pull Request** with a clear title and description

### PR Title Format

Use the same format as commit messages:

```github
feat: add support for geopolitical zones
fix: correct Lagos postal code
docs: improve API reference
```

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

Describe the tests you ran

## Checklist

- [ ] My code follows the project's code style
- [ ] I have added tests that prove my fix/feature works
- [ ] I have updated the documentation
- [ ] All tests pass locally
```

## Data Contribution Guidelines

### Adding New Data

When adding new data fields:

1. Ensure data is accurate and from reliable sources
2. Add data for ALL 37 states (maintain consistency)
3. Update TypeScript interfaces
4. Add corresponding getter functions
5. Write comprehensive tests
6. Document in README

### Data Sources

Preferred sources for data:

- Official government websites
- National Bureau of Statistics (NBS)
- NIPOST (for postal codes)
- Reputable geographic databases

### Data Format

Follow the existing JSON structure:

```json
{
  "state": "State Name",
  "capital": "Capital City",
  "region": "Geopolitical Zone",
  "postal_code": "000000",
  "coordinates": {
    "latitude": 0.0,
    "longitude": 0.0
  },
  ...
}
```

## Documentation

### Updating Documentation

- Keep README.md concise and user-focused
- Add detailed examples to `/docs`
- Update API reference for new functions
- Include code examples for new features

### Writing Examples

Examples should be:

- Clear and easy to understand
- Practical and useful
- Well-commented
- Tested and working

## Release Process

(For maintainers)

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Run all tests
4. Build the package
5. Create a git tag
6. Publish to npm
7. Create GitHub release

## Questions?

Feel free to:

- Open an issue for questions
- Start a discussion
- Reach out to maintainers

## Recognition

Contributors will be recognized in:

- README.md contributors section
- GitHub contributors page
- Release notes

Thank you for contributing to ng-states-core! 🇳🇬
