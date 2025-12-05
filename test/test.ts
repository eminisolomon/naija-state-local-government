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
  State,
  StateData,
} from "../dist/index";

describe("ng-states-core v2.1.0", function () {
  // Existing tests
  it("#getStates()", function () {
    const response: State[] = getStates();

    assert.equal(response.length, 37);
    assert.equal(typeof response, typeof []);
    assert.ok(response[0].state);
    assert.ok(response[0].capital);
    assert.ok(response[0].lgas);
    assert.ok(response[0].senatorial_districts);
    assert.ok(response[0].towns);
    // New fields
    assert.ok(response[0].region);
    assert.ok(response[0].postal_code);
    assert.ok(response[0].coordinates);
    assert.ok(typeof response[0].population === "number");
    assert.ok(response[0].created);
    assert.ok(response[0].slogan);
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

  // New v2.1.0 tests
  it("#findStateByLga()", function () {
    const state = findStateByLga("Ikeja");

    assert.ok(state);
    assert.equal(state.state, "Lagos");
  });

  it("#findStateByLga() - returns undefined for invalid LGA", function () {
    const state = findStateByLga("InvalidLGA");

    assert.equal(state, undefined);
  });

  it("#findStateByTown()", function () {
    const state = findStateByTown("Aba");

    assert.ok(state);
    assert.equal(state.state, "Abia");
  });

  it("#findStateByTown() - returns undefined for invalid town", function () {
    const state = findStateByTown("InvalidTown");

    assert.equal(state, undefined);
  });

  it("#getGeopoliticalZones()", function () {
    const zones = getGeopoliticalZones();

    assert.ok(Array.isArray(zones));
    assert.equal(zones.length, 6);
    assert.ok(zones.includes("South-West"));
    assert.ok(zones.includes("North-Central"));
  });

  it("#getStatesByRegion()", function () {
    const southWest = getStatesByRegion("South-West");

    assert.ok(Array.isArray(southWest));
    assert.equal(southWest.length, 6);
    assert.ok(southWest.some((s) => s.state === "Lagos"));
    assert.ok(southWest.some((s) => s.state === "Oyo"));
  });

  it("#getStatesByRegion() - case insensitive", function () {
    const southWest = getStatesByRegion("south-west");

    assert.equal(southWest.length, 6);
  });

  it("#getRegion()", function () {
    const region = getRegion("Lagos");

    assert.equal(region, "South-West");
  });

  it("#searchStates()", function () {
    const results = searchStates("lag");

    assert.ok(Array.isArray(results));
    assert.ok(results.length > 0);
    assert.ok(results.some((s) => s.state === "Lagos"));
  });

  it("#searchStates() - returns empty for no match", function () {
    const results = searchStates("xyz123");

    assert.equal(results.length, 0);
  });

  it("#searchTowns()", function () {
    const results = searchTowns("aba");

    assert.ok(Array.isArray(results));
    assert.ok(results.length > 0);
    assert.ok(results[0].state);
    assert.ok(results[0].town);
  });

  it("#getPostalCode()", function () {
    const postalCode = getPostalCode("Lagos");

    assert.equal(typeof postalCode, "string");
    assert.equal(postalCode, "100001");
  });

  it("#getCoordinates()", function () {
    const coords = getCoordinates("Lagos");

    assert.ok(coords);
    assert.ok(typeof coords.latitude === "number");
    assert.ok(typeof coords.longitude === "number");
    assert.ok(coords.latitude > 0);
    assert.ok(coords.longitude > 0);
  });

  it("#getPopulation()", function () {
    const population = getPopulation("Lagos");

    assert.ok(typeof population === "number");
    assert.ok(population > 0);
  });

  it("#getCreationDate()", function () {
    const created = getCreationDate("Lagos");

    assert.equal(typeof created, "string");
    assert.ok(created.match(/^\d{4}-\d{2}-\d{2}$/)); // ISO date format
  });

  it("#getSlogan()", function () {
    const slogan = getSlogan("Lagos");

    assert.equal(typeof slogan, "string");
    assert.equal(slogan, "Centre of Excellence");
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

  it("should throw error for invalid region", function () {
    assert.throws(() => {
      getStatesByRegion("Invalid Region");
    }, /not found/);
  });
});
