import React from "react";
import emerging1 from "../assets/emerging1.webp";
import emerging2 from "../assets/emerging2.webp";
import emerging3 from "../assets/emerging3.webp";
import emerging4 from "../assets/emerging4.webp";

function EmergingSection() {
  return (
    <>
      <div className="items-center flex text-4xl justify-center py-20">
        Emerging Partners
      </div>
      <div className="grid grid-cols-2 gap-16 px-28 pb-20">
        <div>
          <img src={emerging1} alt="1st person" />
        </div>
        <div>
          <img src={emerging2} alt="2nd person" />
        </div>
        <div>
          <img src={emerging3} alt="3rd person" />
        </div>
        <div>
          <img src={emerging4} alt="4th person" />
        </div>
      </div>
    </>
  );
}

export default EmergingSection;
