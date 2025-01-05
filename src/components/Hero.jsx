import React from 'react';

const Hero = () => (
  <section className="py-16 px-32">
    {/* Breadcrumb Navigation */}
    <div id="breadcrumbs" className="text-gray-500 mb-6 text-center lg:text-left">
      <a href="https://vyaparapp.in/" className="hover:text-gray-700">Home</a>
      &nbsp;›&nbsp;
      <span className="text-gray-700">
        Billing Software For PC
      </span>
    </div>

    {/* Grid Layout for text and image */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Text Section */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#314259' }}>
          <strong>Billing Software for PC</strong>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Create professional invoices in seconds, track income & expenses easily, 
          and stay organized! Download Vyapar Now & Experience Faster Billing on PC with a Free Trial!
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Mobile Button */}
          <a
            href="#download"
            className="block lg:hidden bg-[#E4484F] text-white py-2 px-6 rounded-md w-full text-center hover:bg-red-600"
            style={{ borderRadius: '12px' }}
          >
            Download Vyapar Now!
          </a>

          {/* Desktop Button */}
          <a
            href="#download"
            className="hidden lg:block bg-red-600 text-white py-2 px-6 rounded-md w-auto hover:bg-[#E4484F]"
            style={{ borderRadius: '12px' }}
          >
            Download Vyapar Now!
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="https://vyaparapp.in/v/z/wp-content/uploads/2024/07/New-Popout-1-1-1.webp"
          alt="Billing Software for PC"
          className="w-full max-w-lg lg:max-w-full"
        />
      </div>
    </div>

    {/* Highlight Section */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
      {/* Highlight 1 */}
      <div className="flex flex-col items-center">
        <img
          src="https://vyaparapp.in/v/z/wp-content/uploads/2023/05/happy_customer-1.webp"
          alt="Happy Customers"
          width="56"
          height="56"
        />
        <p className="text-lg font-bold">1 Cr+</p>
        <p>Happy Customers</p>
      </div>

      {/* Highlight 2 */}
      <div className="flex flex-col items-center">
        <img
          src="https://vyaparapp.in/v/z/wp-content/uploads/2023/05/phone_icon-1.webp"
          alt="Mobile App"
          width="34"
          height="56"
        />
        <p className="text-lg font-bold">FREE</p>
        <p>Android Mobile App</p>
      </div>

      {/* Highlight 3 */}
      <div className="flex flex-col items-center">
        <img
          src="https://vyaparapp.in/v/z/wp-content/uploads/2023/05/gplay_store-2.webp"
          alt="Google Play Store"
          width="50"
          height="56"
        />
        <p className="text-lg font-bold">Rated 4.7 / 5</p>
        <p>On Google Play Store</p>
      </div>

      {/* Highlight 4 */}
      <div className="flex flex-col items-center">
        <img
          src="https://vyaparapp.in/v/z/wp-content/uploads/2023/05/multi_device-1.webp"
          alt="Multi Device"
          width="61"
          height="56"
        />
        <p className="text-lg font-bold">Multi-Device</p>
        <p>Use together on Mobile/Desktop</p>
      </div>

      {/* Highlight 5 */}
      <div className="flex flex-col items-center">
        <img
          src="https://vyaparapp.in/v/z/wp-content/uploads/2023/05/multi_user-1.webp"
          alt="Multi User"
          width="56"
          height="56"
        />
        <p className="text-lg font-bold">Multi-User</p>
        <p>User Management Feature</p>
      </div>
    </div>
  </section>
);

export default Hero;
