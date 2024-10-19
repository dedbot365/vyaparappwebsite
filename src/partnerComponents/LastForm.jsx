import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import forn1 from "../assets/forn1.svg";
import form2 from "../assets/form2.svg";
import form3 from "../assets/form3.svg";
import form4 from "../assets/form4.svg";

function LastForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    otp: "",
    email: "",
    pinCode: "",
    businessType: "",
    businessCategory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChangeNo = (event) => {
    const handleChangeNo = (value, country) => {
      setPhoneNumber(value);
      setValid(validatePhoneNumber(value));
      setFormData({ ...formData, phone: value });
    };
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?\d{10,15}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <>
      <div className="px-28 py-12">
        <div className="flex bg-white lg:p-8 rounded-lg shadow-xl max-w-5xl w-full lg:w-auto">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-8 lg:mb-12 text-center">
              Become a Partner
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg pl-10"
                  placeholder="Name"
                  required
                />
                <i className="absolute left-3 top-4 text-gray-500 text-xl">
                  <img src={forn1} alt="name" className="w-4" />
                </i>
              </div>
              {/* Phone Number */}
              <div className="relative">
                <PhoneInput
                  country={"in"}
                  name="phone"
                  value={PhoneNumber}
                  onChange={handleChangeNo}
                  className="w-full border rounded-lg"
                  placeholder="Phone"
                  required
                />
                {!valid && <p className="text-red-500">Invalid phone number</p>}
              </div>
              <p className="text-blue-500 font-semibold underline cursor-pointer px-2">
                send otp
              </p>
              {/* OTP */}
              <div className="relative">
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg pl-10"
                  placeholder="Enter OTP"
                  required
                />
                <i className="absolute left-3 top-4 text-gray-500 text-xl">
                  <img src={form2} alt="otp" className="w-4" />
                </i>
              </div>
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg pl-10"
                  placeholder="Email"
                  required
                />
                <i className="absolute left-3 top-5 text-gray-500 text-xl">
                  <img src={form3} alt="email" className="w-4" />
                </i>
              </div>
              {/* PIN Code */}
              <div className="relative">
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg pl-10"
                  placeholder="Enter PIN Code"
                  required
                />
                <i className="absolute left-3 top-5 text-gray-500 text-xl">
                  <img src={form4} alt="pin" className="w-4" />
                </i>
              </div>
              {/* Business Type */}
              <div>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                >
                  <option value="">Select Business Type...</option>
                  <option value="retail">Retail</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="distributor">Distributor</option>
                  <option value="service">Service</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              </div>
              {/* Business Category */}
              <div>
                <select
                  name="businessCategory"
                  value={formData.businessCategory}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                >
                  <option value="">Select Business Category...</option>
                  <option value="Accounting & CA">Accounting & CA</option>
                  <option value="Automobiles/ Auto partss">
                    Automobiles/ Auto parts
                  </option>
                  <option value="Book / Stationary store">
                    Book / Stationary store
                  </option>
                  <option value="Chemicals & Fertilizers">
                    Chemicals & Fertilizers
                  </option>
                  <option value="Coaching & Training">
                    Coaching & Training
                  </option>
                  <option value="Computer Equipments & Softwares">
                    Computer Equipments & Softwares
                  </option>
                  <option value="Construction Materials and Equipment">
                    Construction Materials and Equipment
                  </option>
                  <option value="Digital Marketers">Digital Marketers</option>
                  <option value="Electrical & Electronics Equipments">
                    Electrical & Electronics Equipments
                  </option>
                  <option value="Fashion Accessory/ Cosmetics">
                    Fashion Accessory/ Cosmetics
                  </option>
                  <option value="Fitness Center">Fitness Center</option>
                  <option value="FMCG Products">FMCG Products</option>
                  <option value="Fruit And Vegetable">
                    Fruit And Vegetable
                  </option>
                  <option value="Garment/Fashion & Hosiery">
                    Garment/Fashion & Hosiery
                  </option>
                  <option value="Hardware Store">Hardware Store</option>
                  <option value="Industrial Machinery & Equipment">
                    Industrial Machinery & Equipment
                  </option>
                  <option value="Kirana/ General Merchant">
                    Kirana/ General Merchant
                  </option>
                  <option value="Mobile & Accessories">
                    Mobile & Accessories
                  </option>
                  <option value="NGO & Charitable trust">
                    NGO & Charitable trust
                  </option>
                  <option value="Paper & Paper Products">
                    Paper & Paper Products
                  </option>
                  <option value="Pharmacy/ Medical">Pharmacy/ Medical</option>
                  <option value="Renting & Leasing">Renting & Leasing</option>
                  <option value="Repairing/ Plumbing/ Electrician">
                    Repairing/ Plumbing/ Electrician
                  </option>
                  <option value="Restaurant/ Hotel">Restaurant/ Hotel</option>
                  <option value="Software Sellers">Software Sellers</option>
                  <option value="Tax, GST and Financial Consultant">
                    Tax, GST and Financial Consultant
                  </option>
                  <option value="Tours and Travels">Tours and Travels</option>
                </select>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastForm;
