import React from "react";
import feature1 from "../assets/feature1.webp";
import feature2 from "../assets/feature2.webp";
import feature3 from "../assets/feature3.webp";
import feature4 from "../assets/feature4.webp";
import feature5 from "../assets/feature5.webp";
import feature6 from "../assets/feature6.webp";
import feature7 from "../assets/feature7.webp";
import feature8 from "../assets/feature8.webp";

function FeaturesSection() {
  const features = [
    {
      icon: feature1,
      title: "Billing",
      description:
        "Create customized GST bills in 10+ formats that comply with the goods and services tax laws of India. Share bills with customers on WhatsApp.",
    },
    {
      icon: feature2,
      title: "Inventory",
      description:
        "Track complete inventory with parameters like serial number, batch number, expiry date and more. Check item wise P&L, discount report etc.",
    },
    {
      icon: feature3,
      title: "Accounting",
      description:
        "Record, manage and track all your business activities digitally. Get all accounting reports, sales & purchase reports, party-wise reports & expense reports.",
    },
    {
      icon: feature4,
      title: "Online Store",
      description:
        "Generate GST reports including GSTR1, GSTR2, GSTR3B, GSTR9, GST detail report. Export it to your tax consultant in excel or pdf formats easily.",
    },
    {
      icon: feature5,
      title: "Auto Backup",
      description:
        "Take your business online. Add items with images, additional charges, minimum cart value. View & manage your online orders with order dashboard",
    },
    {
      icon: feature6,
      title: "Inventory",
      description:
        "Get a hassle free auto backup system that ensures that your data is never lost. Back up data to your personal google drive and set backup frequency",
    },
    {
      icon: feature7,
      title: "Auto Sync",
      description:
        "Use on multiple devices and sync your business data. Create user permission to restrict which users can access what features",
    },
    {
      icon: feature8,
      title: "E-Way Bill",
      description:
        "Generate E-way bill on Vyapar software in a single click after you made the invoice. Share invoice with E-way bill with your transporter",
    },
  ];
  return (
    <>
      <div className="items-center flex text-4xl font-semibold justify-center py-20">
        Vyapar features at a glance
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 py-20 gap-y-24">
        {features.map((feature, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="absolute -top-12 rounded-full border-1 z-10 w-24">
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col items-center bg-white p-8 pt-16 rounded-3xl border-2 w-5/6 shadow-md">
              <h2 className="text-2xl text-blue-500 font-semibold mb-2">
                {feature.title}
              </h2>
              <p className="text-center text-md font-semibold text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturesSection;
