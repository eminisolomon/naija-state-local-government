export interface State {
  state: string;
  capital: string;
  lgas: string[];
  senatorial_districts: string[];
  towns: string[];
}

export interface StateData extends State {}

export interface StateWithCapital {
  state: string;
  capital: string;
}
