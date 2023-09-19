import React from "react";

const Step = (props) => {
  return (
    <div>
      <form>
        <input
          type="number"
          value={props.valueSetup}
          onChange={props.stepChange}
        />
      </form>
    </div>
  );
};
export default Step;
