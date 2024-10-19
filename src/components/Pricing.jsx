import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
function Pricing({ dropdownOne, onClickOne, dropdownTwo, onClickTwo }) {
  return (
    <>
      <div className="container mx-auto p-2 pt-8 flex justify-center items-center gap-11 relative">
        <div className="text-left items-start px-9">
          <h1 className="text-2xl font-semibold text-gray-800">
            Plans & Pricing
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Choose a plan that suits for your business
          </p>
        </div>

        <div className="flex justify-between items-center py-3 gap-2">
          <div
            className="bg-blue-100 rounded-lg px-2 py-1 items-center border border-blue-300 flex gap-2 hover:cursor-pointer"
            onClick={onClickOne}
          >
            <div>
              <p className="text-xs text-gray-500">Plan Duration</p>
              <p className="text-sm font-semibold text-gray-800">1 Year</p>
            </div>
            <div>
              <span className="text-blue-600">
                <IoIosArrowDropdownCircle />
              </span>
            </div>
          </div>
          {dropdownOne && (
            <div className="flex flex-col absolute top-32 bg-white w-24 rounded-md shadow-lg">
              <ul className="flex flex-col gap-2 text-xs p-3">
                <Link to="/" className="active:font-bold">
                  1 Year Plan
                </Link>
                <Link to="pricingPageThree" className="active:font-bold">
                  3 Years plan
                </Link>
              </ul>
            </div>
          )}

          <div
            className="bg-blue-100 rounded-lg px-2 py-1 items-center border border-blue-300 flex gap-2 hover:cursor-pointer"
            onClick={onClickTwo}
          >
            <div>
              <p className="text-xs text-gray-500">Select Device</p>
              <p className="text-sm font-semibold text-gray-800">
                Desktop + Mobile
              </p>
            </div>
            <div>
              <span className="text-blue-600">
                <IoIosArrowDropdownCircle />
              </span>
            </div>
          </div>
          {dropdownTwo && (
            <div className="flex flex-col relative top-20 right-32 bg-white w-32 rounded-md shadow-lg">
              <ul className="flex flex-col gap-2 text-xs p-3">
                <Link to="/" className="active:font-bold">
                  Desktop + Mobile
                </Link>
                <Link to="pricingPageThree" className="active:font-bold">
                  Desktop
                </Link>
                <Link to="pricingPageThree" className="active:font-bold">
                  Mobile
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Pricing;
