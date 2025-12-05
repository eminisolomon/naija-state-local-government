/**
 * Geographic coordinates
 */
export interface Coordinates {
  latitude: number;
  longitude: number;
}

/**
 * Represents a Nigerian state with complete location data
 */
export interface State {
  state: string;
  capital: string;
  region: string;
  postal_code: string;
  coordinates: Coordinates;
  population: number;
  created: string;
  slogan: string;
  lgas: string[];
  senatorial_districts: string[];
  towns: string[];
  website?: string;
}

export interface StateData extends State {}

export interface StateWithCapital {
  state: string;
  capital: string;
}

/**
 * Search result for town queries
 */
export interface TownSearchResult {
  state: string;
  town: string;
}

/**
 * Geopolitical zones in Nigeria
 */
export type GeopoliticalZone =
  | "North-Central"
  | "North-East"
  | "North-West"
  | "South-East"
  | "South-South"
  | "South-West";
