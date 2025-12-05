// React component example using @ng-states
import { useState, useEffect } from "react";
import { states, lgas } from "ng-states-core";

function StateSelector() {
  const [selectedState, setSelectedState] = useState("");
  const [localGovts, setLocalGovts] = useState<string[]>([]);

  const allStates = states();

  useEffect(() => {
    if (selectedState) {
      const stateData = lgas(selectedState);
      setLocalGovts(stateData.lgas);
    }
  }, [selectedState]);

  return (
    <div>
      <select onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select State</option>
        {allStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {localGovts.length > 0 && (
        <select>
          <option value="">Select LGA</option>
          {localGovts.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default StateSelector;
