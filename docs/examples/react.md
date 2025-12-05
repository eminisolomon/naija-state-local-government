# React Integration

Learn how to use ng-states-core in React applications with hooks and components.

## State Selector Component

A simple state selector dropdown:

```tsx
import { useState } from "react";
import { getStateNames } from "ng-states-core";

function StateSelector() {
  const [selectedState, setSelectedState] = useState("");
  const states = getStateNames();

  return (
    <select
      value={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
    >
      <option value="">Select a state</option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
}
```

## State and LGA Selector

Cascading dropdowns for state and LGA selection:

```tsx
import { useState, useEffect } from "react";
import { getStateNames, getLgas } from "ng-states-core";

function StateAndLgaSelector() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [lgas, setLgas] = useState<string[]>([]);

  const states = getStateNames();

  useEffect(() => {
    if (selectedState) {
      const stateLgas = getLgas(selectedState);
      setLgas(stateLgas);
      setSelectedLga(""); // Reset LGA when state changes
    } else {
      setLgas([]);
    }
  }, [selectedState]);

  return (
    <div>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {lgas.length > 0 && (
        <select
          value={selectedLga}
          onChange={(e) => setSelectedLga(e.target.value)}
        >
          <option value="">Select LGA</option>
          {lgas.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
```

## State Information Card

Display detailed state information:

```tsx
import { useState } from "react";
import { getState, type State } from "ng-states-core";

function StateInfoCard({ stateName }: { stateName: string }) {
  const [state, setState] = useState<State | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const stateData = getState(stateName);
      setState(stateData);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "State not found");
      setState(null);
    }
  }, [stateName]);

  if (error) return <div className="error">{error}</div>;
  if (!state) return <div>Loading...</div>;

  return (
    <div className="state-card">
      <h2>{state.state}</h2>
      <p>
        <strong>Capital:</strong> {state.capital}
      </p>
      <p>
        <strong>Region:</strong> {state.region}
      </p>
      <p>
        <strong>Population:</strong> {state.population.toLocaleString()}
      </p>
      <p>
        <strong>Slogan:</strong> {state.slogan}
      </p>
      <p>
        <strong>LGAs:</strong> {state.lgas.length}
      </p>
      <p>
        <strong>Postal Code:</strong> {state.postal_code}
      </p>
    </div>
  );
}
```

## Search with Autocomplete

Implement a search autocomplete feature:

```tsx
import { useState, useMemo } from "react";
import { searchStates, searchTowns } from "ng-states-core";

function LocationSearch() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const results = useMemo(() => {
    if (query.length < 2) return [];

    const states = searchStates(query).map((s) => ({
      type: "state" as const,
      name: s.state,
      label: `${s.state} (State)`,
    }));

    const towns = searchTowns(query)
      .slice(0, 5)
      .map((t) => ({
        type: "town" as const,
        name: t.town,
        state: t.state,
        label: `${t.town}, ${t.state}`,
      }));

    return [...states, ...towns];
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 200)}
        placeholder="Search states or towns..."
      />

      {showResults && results.length > 0 && (
        <ul className="search-results">
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => {
                setQuery(result.label);
                setShowResults(false);
              }}
            >
              {result.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## Custom Hook: useStateData

Create a reusable hook for state data:

```tsx
import { useState, useEffect } from "react";
import { getState, type State } from "ng-states-core";

function useStateData(stateName: string) {
  const [state, setState] = useState<State | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!stateName) {
      setState(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const stateData = getState(stateName);
      setState(stateData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setState(null);
    } finally {
      setLoading(false);
    }
  }, [stateName]);

  return { state, loading, error };
}

// Usage
function MyComponent() {
  const { state, loading, error } = useStateData("Lagos");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!state) return null;

  return <div>{state.capital}</div>;
}
```

## Geopolitical Zone Filter

Filter states by geopolitical zone:

```tsx
import { useState } from "react";
import { getGeopoliticalZones, getStatesByRegion } from "ng-states-core";

function StatesByZone() {
  const [selectedZone, setSelectedZone] = useState("");
  const zones = getGeopoliticalZones();
  const states = selectedZone ? getStatesByRegion(selectedZone) : [];

  return (
    <div>
      <select
        value={selectedZone}
        onChange={(e) => setSelectedZone(e.target.value)}
      >
        <option value="">Select Geopolitical Zone</option>
        {zones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>

      {states.length > 0 && (
        <ul>
          {states.map((state) => (
            <li key={state.state}>
              {state.state} - {state.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## Form with Validation

Use in a registration form:

```tsx
import { useState } from "react";
import { getStateNames, getLgas } from "ng-states-core";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    lga: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const states = getStateNames();
  const lgas = formData.state ? getLgas(formData.state) : [];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.lga) newErrors.lga = "LGA is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Full Name"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <select
          value={formData.state}
          onChange={(e) =>
            setFormData({ ...formData, state: e.target.value, lga: "" })
          }
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {errors.state && <span className="error">{errors.state}</span>}
      </div>

      <div>
        <select
          value={formData.lga}
          onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
          disabled={!formData.state}
        >
          <option value="">Select LGA</option>
          {lgas.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
        {errors.lga && <span className="error">{errors.lga}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

## Next Steps

- [Vue Integration](/examples/vue) - Use in Vue applications
- [Next.js App](/examples/nextjs) - Server-side rendering examples
- [API Reference](/api/overview) - Complete API documentation
