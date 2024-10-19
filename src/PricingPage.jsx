import React, { useState } from "react";
import PricingCard from "./components/PricingCard";
import CompareButton from "./components/CompareButton";
import ComparePopup from "./components/ComparePopup";
import TestComponent from "./partnerComponents/TestComponent";

function PricingPage() {
  const [display, setDisplay] = useState(false);
  const [dropdownOne, setDropdownOne] = useState(false);
  const [dropdownTwo, setDropdownTwo] = useState(false);

  const clickHandler = () => {
    setDisplay(true);
  };
  const closeHandler = () => {
    setDisplay(false);
  };

  const dropdownOneHandler = () => {
    setDropdownOne((prev) => !prev);
  };

  const dropdownTwoHandler = () => {
    setDropdownTwo((prev) => !prev);
  };

  // tests
  const [test, setTest] = useState(false);

  const testHandler = () => {
    setTest(true);
  };

  return (
    <div className="bg-gray-100">
      <TestComponent test={test} onClick={testHandler} />
      <PricingCard
        onClick={clickHandler}
        dropdownOne={dropdownOne}
        onClickOne={dropdownOneHandler}
        dropdownTwo={dropdownTwo}
        onClickTwo={dropdownTwoHandler}
      />
      <CompareButton onClick={clickHandler} />
      <ComparePopup display={display} onClose={closeHandler} />
    </div>
  );
}

export default PricingPage;
