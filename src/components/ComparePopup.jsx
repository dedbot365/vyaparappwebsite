import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { LuCrown } from "react-icons/lu";
function ComparePopup({ display, onClose }) {
  return display ? (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white max-h-screen overflow-y-auto rounded-lg w-full max-w-3xl p-6 relative">
          <div className="flex justify-between py-3 sticky">
            <div className="text-center text-lg font-semibold pb-4">
              Features Comparison
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <div className="bg-blue-100 rounded-full px-2 items-center border border-blue-300 flex gap-2 hover:cursor-pointer">
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      1 Year Plan
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-600">
                      <IoIosArrowDropdownCircle />
                    </span>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-full px-2 items-center border border-blue-300 flex gap-2 hover:cursor-pointer">
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Desktop + Mobile
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-600">
                      <IoIosArrowDropdownCircle />
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <ImCross />
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-2 px-3 flex items-center justify-between text-sm sticky">
            <p className="p-3">Features & Details</p>
            <div className="p-3 flex">
              <h2 className="text-gray-500 text-sm p-1">
                <LuCrown />
              </h2>
              <p>Silver Plan</p>
            </div>
            <div className="p-3 flex">
              <h2 className="text-yellow-600 text-sm p-1">
                <LuCrown />
              </h2>
              <p>Gold Plan</p>
            </div>
          </div>

          <div className="py-2 px-8 flex text-xs sticky">
            <p className="p-3 text-orange-600">FEATURES</p>
          </div>

          <div className=" max-h-screen overflow-y-auto">
            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Sync data across devices</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Create multiple companies</p>
              <div className="p-3 flex">
                <p>3 companies</p>
              </div>
              <div className="p-3 flex">
                <p>unlimited</p>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Remove advertisement on invoices</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Set multiple pricing for items</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Quick Billing</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Manage godowns & Transfer stock</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Service Reminders</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Restore deleted transactions</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Update Items in bulk</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Export data to Tally</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Generate barcodes for items</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Set credit limit for parties</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Add Fixed Assets</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Billwise Profit and Loss Report</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Partywise Profit and Loss Report</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Balance Sheet</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Item Batch Report</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Item Serial Report</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Stock transfer Report</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Create Multiple Firms</p>
              <div className="p-3 flex">
                <p>3 firms</p>
              </div>
              <div className="p-3 flex">
                <p>5 firms</p>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Check Profit on Invoices</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Add additional fields to items</p>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>

            <div className="py-2 px-3 flex items-center justify-between text-sm border-b-2">
              <p className="p-3">Keep different rates for each party</p>
              <div className="p-3 flex">
                <span className="text-red-500 px-3 text-xs">
                  <ImCross />
                </span>
              </div>
              <div className="p-3 flex">
                <span className="text-green-500 px-3 text-xs">
                  <FaCheck />
                </span>
              </div>
            </div>
          </div>
          {/* Pricing and Buy Buttons */}
          <div className="px-8 py-6 mt-4 bg-blue-50 flex justify-end items-center border-t gap-8">
            <div>
              <div className="flex items-center gap-3 ">
                <p className="text-lg line-through px-3 text-gray-500">$100</p>
                <p className="text-xl font-bold">$79.99</p>
              </div>
              <button className="w-40 bg-red-100 text-red-500 py-3 rounded-3xl font-semibold border-2 border-red-300">
                Buy Silver
              </button>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <p className="text-lg line-through px-3 text-gray-500">$190</p>
                <p className="text-xl font-bold">$119.99</p>
              </div>
              <button className="w-40 bg-red-600 text-white py-3 rounded-3xl font-semibold border-2 border-red-600">
                Buy Gold
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ComparePopup;
