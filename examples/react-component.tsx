// React component example using ng-states-core v2.0.0
import { useState, useEffect } from "react";
import { getStateNames, getLgas } from "ng-states-core";

function StateSelector() {
  const [selectedState, setSelectedState] = useState("");
  const [localGovts, setLocalGovts] = useState<string[]>([]);

  const allStates = getStateNames();

  useEffect(() => {
    if (selectedState) {
      const lgas = getLgas(selectedState);
      setLocalGovts(lgas);
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
