import React, { useState } from "react";
import CompareButton from "./components/CompareButton";
import ComparePopup from "./components/ComparePopup";
import OneYearDesktopCard from "./components/OneYearDesktopCard";
import ThreeYearDesktopCard from "./components/ThreeYearDesktopCard";

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

  return (
    <div className="bg-gray-100">
      <ThreeYearDesktopCard
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
