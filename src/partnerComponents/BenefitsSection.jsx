import React, { useState } from "react";
import benefits1 from "../assets/benefits1.webp";
import benefits2 from "../assets/benefits2.webp";
import benefits3 from "../assets/benefits3.webp";
import benefits4 from "../assets/benefits4.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function BenefitsSection() {
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  const contents = [
    {
      id: 1,
      icon: (
        <div className="w-20">
          <img src={benefits1} alt="benefit1" />
        </div>
      ),
      benefit: "Attractive Program Benefits",
      contentTitle: "Get benefits on every subscription",
      content:
        "Get revenue share every time your client purchases a Vyapar subscription. Get additional benefits on renewal. Special quarterly rewards for top partners in North, South, East and West Zones.",
    },
    {
      id: 2,
      icon: (
        <div className="w-20">
          <img src={benefits2} alt="benefit2" />
        </div>
      ),
      benefit: "Super Fast Settlement",
      contentTitle: "Get your commission in weeks, not months",
      content:
        "Payment settlements are done within a week of your clients purchasing Vyapar subscription. Everything is transparent with your web-based business portal on Vyapar with earnings dashboard.",
    },
    {
      id: 3,
      icon: (
        <div className="w-20">
          <img src={benefits3} alt="benefit3" />
        </div>
      ),
      benefit: "Dedicated Account Manager",
      contentTitle: "You help us, we help you back",
      content:
        "Get a dedicated account manager who will help you every step of the way. Whether its marketing collaterals, local business conference sponsorships, client queries on software or your queries regarding payouts.",
    },
    {
      id: 4,
      icon: (
        <div className="w-20">
          <img src={benefits4} alt="benefit4" />
        </div>
      ),
      benefit: "Zero Investments",
      contentTitle: "No charges or fees for becoming a Vyapar Partner",
      content:
        "Vyapar partner program is 100% free to join with no investments required, either in monetary terms or in terms of office space or other infrastructure. All you require is a strong business network to sell to.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-24 px-4">
      {/* Left Section */}
      <div className="items-center py-4 space-y-4">
        {contents.map((con, index) => (
          <div
            key={con.id}
            onClick={() => setSelectedBenefit(index)}
            className={`flex items-center gap-4 px-6 py-4 p-2 shadow-lg rounded-lg cursor-pointer hover:bg-gray-50 ${
              selectedBenefit === index ? "bg-blue-50" : "bg-white"
            }`}
          >
            <div>{con.icon}</div>
            <div className="text-xl md:text-2xl font-semibold">
              {con.benefit}
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <motion.div
        key={selectedBenefit} // Ensure a unique key so motion detects content change
        initial={{ opacity: 0, y: -100 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 1 }} // Duration of the animation
        className="items-center py-10 md:py-20 px-4 md:px-12"
      >
        <div className="pb-8 pt-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {contents[selectedBenefit].contentTitle}
          </h2>
        </div>
        <div className="pb-6">
          <p className="text-xl md:text-md font-semibold">
            {contents[selectedBenefit].content}
          </p>
        </div>
        <div className="pt-12">
          <Link
            to="/partnerWithUsPage"
            className="text-blue-600 font-semibold flex items-center gap-4 hover:cursor-pointer hover:underline"
          >
            <p className="text-md md:text-lg">Become a Partner</p>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default BenefitsSection;
