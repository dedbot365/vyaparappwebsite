import React, { useState } from "react";
import Pricing from "./components/Pricing";
import CompareButton from "./components/CompareButton";
import ComparePopup from "./components/ComparePopup";
import PricingCardThree from "./components/PricingCardThree";

function PricingPage() {
  const [display, setDisplay] = useState(false);
  const [dropdownOne, setDropdownOne] = useState(false);
  const [dropdownTwo, setDropdownTwo] = useState(false);

  const dropdownOneHandler = () => {
    setDropdownOne((prev) => !prev);
  };

  const dropdownTwoHandler = () => {
    setDropdownTwo((prev) => !prev);
  };
  const clickHandler = () => {
    setDisplay(true);
  };
  const closeHandler = () => {
    setDisplay(false);
  };
  return (
    <div className="bg-gray-100">
      <PricingCardThree
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
