import React from "react";
import { FaPlus } from "react-icons/fa6";
function CompareButton({ onClick }) {
  return (
    <>
      <div className="flex justify-center items-center py-10">
        <div
          className="bg-blue-50 rounded-full px-4 py-3 items-center border border-blue-300 flex gap-2 hover:cursor-pointer"
          onClick={onClick}
        >
          <p className="text-blue-500 text-xl items-center ">
            <FaPlus />
          </p>
          <p className="text-xs font-semibold text-blue-500">
            Compare Silver & Gold Plan
          </p>
        </div>
      </div>
    </>
  );
}

export default CompareButton;
