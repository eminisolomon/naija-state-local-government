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

/**
 * Find which state an LGA belongs to
 * @param lga - Name of the LGA (case-insensitive)
 * @returns State data or undefined if not found
 * @example
 * ```typescript
 * const state = findStateByLga('Ikeja');
 * console.log(state?.state); // 'Lagos'
 * ```
 */
export function findStateByLga(lga: string): StateData | undefined {
  const normalizedLga = normalize(lga);
  return (statesAndLocalGov as State[]).find((state) =>
    state.lgas.some((stateLga) => normalize(stateLga) === normalizedLga)
  ) as StateData | undefined;
}

/**
 * Find which state a town belongs to
 * @param town - Name of the town (case-insensitive)
 * @returns State data or undefined if not found
 * @example
 * ```typescript
 * const state = findStateByTown('Lekki');
 * console.log(state?.state); // 'Lagos'
 * ```
 */
export function findStateByTown(town: string): StateData | undefined {
  const normalizedTown = normalize(town);
  return (statesAndLocalGov as State[]).find((state) =>
    state.towns.some((stateTown) => normalize(stateTown) === normalizedTown)
  ) as StateData | undefined;
}

/**
 * Get list of all geopolitical zones
 * @returns Array of geopolitical zone names
 * @example
 * ```typescript
 * const zones = getGeopoliticalZones();
 * console.log(zones); // ['North-Central', 'North-East', ...]
 * ```
 */
export function getGeopoliticalZones(): string[] {
  const zones = new Set(
    (statesAndLocalGov as State[]).map((state) => state.region)
  );
  return Array.from(zones).sort();
}

/**
 * Get all states in a specific geopolitical zone
 * @param region - Name of the geopolitical zone
 * @returns Array of states in the zone
 * @throws {Error} If region is invalid
 * @example
 * ```typescript
 * const southWest = getStatesByRegion('South-West');
 * console.log(southWest.map(s => s.state)); // ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
 * ```
 */
export function getStatesByRegion(region: string): State[] {
  if (!region || normalize(region) === "") {
    throw new Error("Invalid region name");
  }

  const normalizedRegion = normalize(region);
  const states = (statesAndLocalGov as State[]).filter(
    (state) => normalize(state.region) === normalizedRegion
  );

  if (states.length === 0) {
    throw new Error(`Region "${region}" not found`);
  }

  return states;
}

/**
 * Get the geopolitical zone for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Geopolitical zone name
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const region = getRegion('Lagos');
 * console.log(region); // 'South-West'
 * ```
 */
export function getRegion(state: string): string {
  const stateData = getState(state);
  return stateData.region;
}

/**
 * Search for states by name (fuzzy search)
 * @param query - Search query
 * @returns Array of matching states
 * @example
 * ```typescript
 * const results = searchStates('lag');
 * console.log(results[0].state); // 'Lagos'
 * ```
 */
export function searchStates(query: string): State[] {
  if (!query || normalize(query) === "") {
    return [];
  }

  const normalizedQuery = normalize(query);
  return (statesAndLocalGov as State[]).filter((state) =>
    normalize(state.state).includes(normalizedQuery)
  );
}

/**
 * Search for towns across all states
 * @param query - Search query
 * @returns Array of town search results with state information
 * @example
 * ```typescript
 * const results = searchTowns('aba');
 * console.log(results); // [{ state: 'Abia', town: 'Aba' }, ...]
 * ```
 */
export function searchTowns(
  query: string
): Array<{ state: string; town: string }> {
  if (!query || normalize(query) === "") {
    return [];
  }

  const normalizedQuery = normalize(query);
  const results: Array<{ state: string; town: string }> = [];

  (statesAndLocalGov as State[]).forEach((state) => {
    state.towns.forEach((town) => {
      if (normalize(town).includes(normalizedQuery)) {
        results.push({ state: state.state, town });
      }
    });
  });

  return results;
}

/**
 * Get the postal code for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Postal code
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const postalCode = getPostalCode('Lagos');
 * console.log(postalCode); // '100001'
 * ```
 */
export function getPostalCode(state: string): string {
  const stateData = getState(state);
  return stateData.postal_code;
}

/**
 * Get coordinates for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Coordinates object with latitude and longitude
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const coords = getCoordinates('Lagos');
 * console.log(coords); // { latitude: 6.601838, longitude: 3.3514863 }
 * ```
 */
export function getCoordinates(state: string): {
  latitude: number;
  longitude: number;
} {
  const stateData = getState(state);
  return stateData.coordinates;
}

/**
 * Get population for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Population number
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const population = getPopulation('Lagos');
 * console.log(population); // 15400000
 * ```
 */
export function getPopulation(state: string): number {
  const stateData = getState(state);
  return stateData.population;
}

/**
 * Get creation date for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns Creation date in ISO format
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const created = getCreationDate('Lagos');
 * console.log(created); // '1967-05-27'
 * ```
 */
export function getCreationDate(state: string): string {
  const stateData = getState(state);
  return stateData.created;
}

/**
 * Get slogan for a specific state
 * @param state - Name of the state (case-insensitive)
 * @returns State slogan
 * @throws {Error} If state name is invalid or not found
 * @example
 * ```typescript
 * const slogan = getSlogan('Lagos');
 * console.log(slogan); // 'Centre of Excellence'
 * ```
 */
export function getSlogan(state: string): string {
  const stateData = getState(state);
  return stateData.slogan;
}

// Export types for consumers
export {
  State,
  StateData,
  StateWithCapital,
  TownSearchResult,
  GeopoliticalZone,
  Coordinates,
} from "./interface";

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
  findStateByLga,
  findStateByTown,
  getGeopoliticalZones,
  getStatesByRegion,
  getRegion,
  searchStates,
  searchTowns,
  getPostalCode,
  getCoordinates,
  getPopulation,
  getCreationDate,
  getSlogan,
};
