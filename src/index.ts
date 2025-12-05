import statesAndLocalGov from "./statesAndLocalGov.json";
import { State, StateData, StateWithCapital } from "./interface";

/**
 * Normalize input string to lowercase and trim whitespace
 * @param input - The string to normalize
 * @returns Normalized string
 */
function normalize(input: string): string {
  return input.toLowerCase().trim();
}

/**
 * Normalize FCT aliases to the official name
 * @param state - State name to normalize
 * @returns Normalized state name
 */
function normalizeFCT(state: string): string {
  const fctAliases = [
    "fct",
    "f.c.t",
    "abuja",
    "f c t",
    "federal capital territory",
  ];
  return fctAliases.includes(normalize(state))
    ? "Federal Capital Territory"
    : state;
}

/**
 * Find a state by name (case-insensitive)
 * @param stateName - Name of the state to find
 * @returns The state object or undefined
 */
function findState(stateName: string): State | undefined {
  const normalizedName = normalize(normalizeFCT(stateName));
  return (statesAndLocalGov as State[]).find(
    (s) => normalize(s.state) === normalizedName
  );
}

/**
 * Get all Nigerian states with complete data
 * @returns Array of all states with complete data
 * @example
 * ```typescript
 * const allStates = getStates();
 * console.log(allStates.length); // 37
 * ```
 */
export function getStates(): State[] {
  return statesAndLocalGov as State[];
}

/**
 * Get list of all Nigerian state names
 * @returns Array of state names
 * @example
 * ```typescript
 * const names = getStateNames();
 * console.log(names); // ['Abia', 'Adamawa', ...]
 * ```
 */
export function getStateNames(): string[] {
  return (statesAndLocalGov as State[]).map((state) => state.state);
}

/**
 * Get complete data for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Complete state data
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const lagos = getState('Lagos');
 * console.log(lagos.capital); // 'Ikeja'
 * ```
 */
export function getState(state: string): StateData {
  if (!state || normalize(state) === "") {
    throw new Error("Invalid state name");
  }

  const stateData = findState(state);

  if (!stateData) {
    throw new Error(`State "${state}" not found`);
  }

  return stateData as StateData;
}

/**
 * Alias for getState() - Get complete data for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Complete state data
 * @throws {Error} If state name is invalid or not found
 */
export function getStateData(state: string): StateData {
  return getState(state);
}

/**
 * Get all states with their capital cities
 * @returns Array of states with capitals
 * @example
 * ```typescript
 * const statesAndCapitals = getStatesAndCapitals();
 * console.log(statesAndCapitals[0]); // { state: 'Abia', capital: 'Umuahia' }
 * ```
 */
export function getStatesAndCapitals(): StateWithCapital[] {
  return (statesAndLocalGov as State[]).map((state) => ({
    state: state.state,
    capital: state.capital,
  }));
}

/**
 * Get the capital city of a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Capital city name
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const capital = getCapital('Lagos');
 * console.log(capital); // 'Ikeja'
 * ```
 */
export function getCapital(state: string): string {
  const stateData = getState(state);
  return stateData.capital;
}

/**
 * Get local government areas for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Array of LGA names
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const lgas = getLgas('Lagos');
 * console.log(lgas.length); // 21
 * ```
 */
export function getLgas(state: string): string[] {
  const stateData = getState(state);
  return stateData.lgas;
}

/**
 * Get senatorial districts for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Array of senatorial districts
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const districts = getSenatorialDistricts('Lagos');
 * console.log(districts); // ['Lagos Central', 'Lagos East', 'Lagos West']
 * ```
 */
export function getSenatorialDistricts(state: string): string[] {
  const stateData = getState(state);
  return stateData.senatorial_districts;
}

/**
 * Get major towns in a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Array of major town names
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const towns = getTowns('Lagos');
 * console.log(towns); // ['Ikeja', 'Lekki', 'Victoria Island', ...]
 * ```
 */
export function getTowns(state: string): string[] {
  const stateData = getState(state);
  return stateData.towns;
}

// Export types for consumers
export { State, StateData, StateWithCapital } from "./interface";

// Default export for CommonJS compatibility
export default {
  getStates,
  getStateNames,
  getState,
  getStateData,
  getStatesAndCapitals,
  getCapital,
  getLgas,
  getSenatorialDistricts,
  getTowns,
};
