import React from "react";
import a1 from "../assets/a1.webp";
import a2 from "../assets/a2.webp";
import a3 from "../assets/a3.webp";
import a4 from "../assets/a4.webp";

function AchievementSection() {
  const stats = [
    {
      id: 1,
      icon: (
        <div className="w-12">
          <img src={a1} alt="a1" className="w-12" />
        </div>
      ),
      number: "8 Mn+",
      label: "Customers",
    },
    {
      id: 2,
      icon: (
        <div className="w-12">
          <img src={a2} alt="a1" className="w-12" />
        </div>
      ),
      number: "5000+",
      label: "Partners",
    },
    {
      id: 3,
      icon: (
        <div className="w-12">
          <img src={a3} alt="a1" className="w-8" />
        </div>
      ),
      number: "2 Crore+",
      label: "Commission paid to partners",
    },
    {
      id: 4,
      icon: (
        <div className="w-12">
          <img src={a4} alt="a1" className="w-10" />
        </div>
      ),
      number: "Rated 4.7/5",
      label: "On Google Playstore",
    },
  ];

  return (
    <div className="relative py-20 mb-16">
      <div className="absolute inset-0 -z-10 pt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#e6f0ff"
            fillOpacity="1"
            d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,106.7C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128V320H0V96Z"
          ></path>
        </svg>
      </div>
      <div className=" py-16 rounded-3xl flex flex-wrap justify-around p-20 w-full">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center m-4"
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <h2 className="text-3xl font-bold text-gray-700">{stat.number}</h2>
            <p className="text-gray-500 font-semibold mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementSection;
