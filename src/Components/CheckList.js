/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";

const checkList = [
  "Wax Procedure",
  "Foundry Procedure",
  "Cut-Off Procedure",
  "Linishing Procedure",
  "Straightening/IPC Procedure",
  "Fettling Procedure",
  "Visual Procedure",
  "Part Mark Procedure",
];

function CheckList() {
  const [checkedState, setCheckedState] = useState(
    new Array(checkList.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="checklist">
      <div className="title">Procedure Check List:</div>
      <div className="list-container">
        {checkList.map((item, index) => (
          <div key={index}>
            <input
              name={item}
              value={item}
              type="checkbox"
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckList;
