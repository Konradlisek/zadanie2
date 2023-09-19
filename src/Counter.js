import Step from "./Step";
import { useState } from "react";

const Counter = () => {
  const [valuew, setValuwe] = useState(1);

  const stepChange = () => {
    console.log(`funkcja działa`);
  };

  return (
    <div className="App">
      <Step valueSetup={valuew} stepChange={stepChange} />
    </div>
  );
};

export default Counter;
