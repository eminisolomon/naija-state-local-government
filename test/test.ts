import assert from "assert";
import {
  getStates,
  getStateNames,
  getState,
  getStateData,
  getStatesAndCapitals,
  getCapital,
  getLgas,
  getSenatorialDistricts,
  getTowns,
  State,
  StateData,
} from "../dist/index";

describe("ng-states-core v2.0.0", function () {
  it("#getStates()", function () {
    const response: State[] = getStates();

    assert.equal(response.length, 37);
    assert.equal(typeof response, typeof []);
    assert.ok(response[0].state);
    assert.ok(response[0].capital);
    assert.ok(response[0].lgas);
    assert.ok(response[0].senatorial_districts);
    assert.ok(response[0].towns);
  });

  it("#getStateNames()", function () {
    const response: string[] = getStateNames();

    assert.equal(response.length, 37);
    assert.equal(typeof response, typeof []);
    assert.ok(response.includes("Lagos"));
    assert.ok(response.includes("Abia"));
  });

  it("#getState()", function () {
    const response: StateData = getState("Lagos");

    assert.equal(response.state, "Lagos");
    assert.ok(response.capital);
    assert.ok(response.lgas.length > 0);
    assert.ok(response.senatorial_districts.length > 0);
    assert.ok(response.towns.length > 0);
  });

  it("#getStateData()", function () {
    const response: StateData = getStateData("Oyo");

    assert.equal(response.state, "Oyo");
    assert.ok(response.capital);
    assert.ok(response.lgas.length > 0);
  });

  it("#getStatesAndCapitals()", function () {
    const response = getStatesAndCapitals();

    assert.equal(response.length, 37);
    assert.ok(response[0].state);
    assert.ok(response[0].capital);
    assert.equal(Object.keys(response[0]).length, 2);
  });

  it("#getCapital()", function () {
    const capital = getCapital("Lagos");
    assert.equal(typeof capital, "string");
    assert.ok(capital.length > 0);
  });

  it("#getLgas()", function () {
    const lgas = getLgas("Lagos");
    assert.ok(Array.isArray(lgas));
    assert.ok(lgas.length > 0);
  });

  it("#getSenatorialDistricts()", function () {
    const districts = getSenatorialDistricts("Lagos");

    assert.ok(Array.isArray(districts));
    assert.equal(districts.length, 3);
  });

  it("#getTowns()", function () {
    const towns = getTowns("Lagos");

    assert.ok(Array.isArray(towns));
    assert.ok(towns.length > 0);
  });

  it("should handle FCT aliases", function () {
    const fct1 = getState("FCT");
    const fct2 = getState("Abuja");
    const fct3 = getState("Federal Capital Territory");

    assert.equal(fct1.state, fct2.state);
    assert.equal(fct2.state, fct3.state);
  });

  it("should throw error for invalid state", function () {
    assert.throws(() => {
      getState("Invalid State");
    }, /not found/);
  });
});
