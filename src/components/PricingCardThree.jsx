import { LuCrown } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

import React, { useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
// import { Navlink } from "react-router-dom";

const PricingCardThree = ({
  onClick,
  dropdownOne,
  onClickOne,
  dropdownTwo,
  onClickTwo,
}) => {
  const actualSilverPrice = 220;
  const actualGoldPrice = 420;

  const discountSilverPrice = 169.99;
  const discountGoldPrice = 249.99;

  //  useEffect(() => {
  // Silver Plan Features
  // const silverFeatures = [
  //   "Sync data across devices",
  //   "Create multiple companies (3 companies)",
  //   "Quick Billing",
  //   "Manage godowns & Transfer stock",
  //   "Create Multiple Firms (3 firms)",
  //   "Check Profit on Invoices",
  //   "Balance Sheet",
  //   "Restore deleted transactions",
  //   "Remove advertisement on invoices",
  // ];

  // const silverList = document.getElementById("silver-features");
  // silverList.innerHTML = ""; // Clear existing list items
  // silverFeatures.forEach((feature) => {
  //   const li = document.createElement("li");
  //   li.className = "flex items-center mb-2 text-sm";
  //   li.innerHTML =
  //     feature.includes("Quick Billing") ||
  //     feature.includes("Manage godowns & Transfer stock") ||
  //     feature.includes("Check Profit on Invoices") ||
  //     feature.includes("Restore deleted transactions")
  //       ? `<span class="text-red-500 px-2 text-xs">✘</span> ${feature}`
  //       : `<span class="text-green-500 px-1 text-xs">✔</span> ${feature}`;
  //   silverList.appendChild(li);
  // });

  // // Gold Plan Features
  // const goldFeatures = [
  //   "Sync data across devices",
  //   "Create multiple companies (unlimited)",
  //   "Quick Billing",
  //   "Manage godowns & Transfer stock",
  //   "Create Multiple Firms (5 firms)",
  //   "Check Profit on Invoices",
  //   "Balance Sheet",
  //   "Restore deleted transactions",
  //   "Remove advertisement on invoices",
  // ];

  // const goldList = document.getElementById("gold-features");
  // goldList.innerHTML = ""; // Clear existing list items
  // goldFeatures.forEach((feature) => {
  //   const li = document.createElement("li");
  //   li.className = "flex items-center mb-2 text-sm";
  //   li.innerHTML = `<span class="text-green-500 px-1 text-xs">✔</span> ${feature}`;
  //   goldList.appendChild(li);
  // });
  //}, []);

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
              <p className="text-sm font-semibold text-gray-800">3 Years</p>
            </div>
            <div>
              <span className="text-blue-600">
                <IoIosArrowDropdownCircle />
              </span>
            </div>
          </div>
          {dropdownOne && (
            <div className="flex flex-col absolute top-24 bg-white w-24 rounded-md shadow-lg">
              <ul className="flex flex-col gap-2 text-xs p-3">
                <Link to="/" className="active:font-bold">
                  1 Year Plan
                </Link>
                <Link
                  to="/pricingPageThree"
                  className="active:font-bold font-semibold"
                >
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
            <div className="flex flex-col absolute top-24 right-80 bg-white w-32 rounded-md shadow-lg">
              <ul className="flex flex-col gap-2 text-xs p-3">
                <Link
                  to="/pricingPageThree"
                  className="active:font-bold font-semibold"
                >
                  Desktop + Mobile
                </Link>
                <Link to="/threeYearDesktopPage" className="active:font-bold">
                  Desktop
                </Link>
                <Link to="/threeYearMobilePage" className="active:font-bold">
                  Mobile
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Silver Plan */}
          <div className="bg-gray-200 pt-6 p-2 w-full rounded-lg shadow-md">
            <h2 className="text-gray-500 text-2xl p-1 px-4">
              <LuCrown />
            </h2>
            <div className="flex justify-between items-center px-4">
              <h2 className="text-2xl font-semibold my-2">Silver Plan</h2>
              <p className="text-3xl font-bold my-2">${discountSilverPrice}</p>
            </div>
            <div className="flex justify-between items-center pt-3 pb-4 px-4">
              <div>
                <p className="bg-transparent px-2 py-1 rounded-3xl inline-block border-solid border-2 border-gray-300 text-xs">
                  3 Years
                </p>
                <p className="bg-transparent px-2 py-1 rounded-3xl inline-block ml-2 border-solid border-2 border-gray-300 text-xs">
                  Desktop + Mobile
                </p>
              </div>
              <p className="line-through text-gray-400">${actualSilverPrice}</p>
            </div>
            <button className="mt-4 w-full bg-red-100 text-red-500 py-2 rounded-3xl font-semibold border-2 border-red-300">
              Buy Silver
            </button>
            <div className="pt-5 w-full">
              <div className="bg-white py-4 rounded-md">
                <ul id="silver-features">
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>
                    Sync data across devices
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Create multiple companies
                    <span className="font-semibold px-2">(3 companies)</span>
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-red-500 px-3 text-xs">
                      {" "}
                      <ImCross />
                    </span>{" "}
                    Quick Billing
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-red-500 px-3 text-xs">
                      <ImCross />
                    </span>{" "}
                    Manage godowns & Transfer stock
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Check Multiple Firms
                    <span className="font-semibold px-2">(3 firms)</span>
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-red-500 px-3 text-xs">
                      <ImCross />
                    </span>{" "}
                    Check Profit on Invoices
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Balance Sheet
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-red-500 px-3 text-xs">
                      <ImCross />
                    </span>{" "}
                    Restore deleted transactions
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Remove advertisement on invooices
                  </li>
                </ul>
                <a
                  onClick={onClick}
                  className="text-blue-600 text-sm items-center justify-center flex pt-2 hover:cursor-pointer"
                >
                  + 14 More Features
                </a>
              </div>
            </div>
          </div>

          {/* Gold Plan */}
          <div className="bg-orange-100 pt-6 p-2 w-full rounded-lg shadow-md">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-yellow-600 text-2xl p-1">
                <LuCrown />
              </h2>
              <p className="bg-orange-500 text-white py-1 px-3 rounded-md text-sm">
                Most Popular
              </p>
            </div>
            <div className="flex justify-between items-center px-4">
              <h2 className="text-2xl font-semibold my-2">Gold Plan</h2>
              <p className="text-3xl font-bold my-2">${discountGoldPrice}</p>
            </div>
            <div className="flex justify-between items-center pt-3 pb-4 px-4">
              <div>
                <p className="bg-transparent px-2 py-1 rounded-3xl inline-block border-solid border-2 border-orange-200 text-xs text-yellow-700">
                  3 Years
                </p>
                <p className="bg-transparent px-2 py-1 rounded-3xl inline-block ml-2 border-solid border-2 border-orange-200 text-xs text-yellow-700">
                  Desktop + Mobile
                </p>
              </div>
              <p className="line-through text-gray-400">${actualGoldPrice}</p>
            </div>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-3xl font-semibold border-2 border-red-600">
              Buy Gold
            </button>
            <div className="pt-5 w-full">
              <div className="bg-white py-4 rounded-md">
                <ul id="gold-features">
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Sync data across devices
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Create multiple companies
                    <span className="font-semibold px-2">(unlimited)</span>
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Quick Billing
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Manage godowns & Transfer stock
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Check Multiple Firms
                    <span className="font-semibold px-2">(5 firms)</span>
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Check Profit on Invoices
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Balance Sheet
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Restore deleted transactions
                  </li>
                  <li className="flex items-center mb-2 text-sm">
                    <span className="text-green-500 px-3 text-xs">
                      <FaCheck />
                    </span>{" "}
                    Remove advertisement on invooices
                  </li>
                </ul>
                <a
                  onClick={onClick}
                  className="text-blue-600 text-sm items-center justify-center flex pt-2 hover:cursor-pointer"
                >
                  + 14 More Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCardThree;
