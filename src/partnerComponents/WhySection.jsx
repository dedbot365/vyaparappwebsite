import React from "react";
import whyImg from "../assets/whyImg.webp";

function WhySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 md:p-40">
      {/* Text Section */}
      <div>
        <h2 className="text-xl md:text-4xl font-semibold py-4 md:py-8">
          Why partner with us?
        </h2>
        <p className="text-lg md:text-md font-semibold">
          Vyapar is the fastest growing, most affordable & easy-to-use billing &
          accounting software for SMBs. We work with 5000+ partners across India
          and plan to double the partner network in the next year. We have
          disbursed 2 Crore+ in commissions already with weekly settlements. The
          market is big and the scope is huge. Come, be a part of Vyapar Partner
          Network and increase your income substantially.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img src={whyImg} alt="meet" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default WhySection;
