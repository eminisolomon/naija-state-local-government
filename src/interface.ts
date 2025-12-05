/**
 * Represents a Nigerian state with complete location data
 */
export interface State {
  /** Name of the state */
  state: string;
  /** Capital city of the state */
  capital: string;
  /** List of local government areas in the state */
  lgas: string[];
  /** List of senatorial districts in the state */
  senatorial_districts: string[];
  /** List of major towns in the state */
  towns: string[];
}

/**
 * Response type for state data queries
 */
export interface StateData extends State {}

/**
 * Simplified state with capital information
 */
export interface StateWithCapital {
  /** Name of the state */
  state: string;
  /** Capital city of the state */
  capital: string;
}
