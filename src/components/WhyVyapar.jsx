import React from 'react';
import features from '../assets/features.png';

const WhyVyapar = () => (
    <section className="container py-16 bg-[#FEEDEF]">
        <h2 className="text-center text-2xl font-bold mb-8">
            Why Vyapar is the Perfect Choice for Your Business
        </h2>

        <div className="px-56">
            <div className="relative d-flex justify-content-center bg-light-red rounded-md p-4">
                <img
                    src={features}
                    alt="Vyapar Logo"
                    className="w-full" // Ensure the image fits the container
                />
                <a
                    href="https://vyaparapp.in" // Add the actual download link here
                    className="absolute my-[-92px] z-10 ml-[827px] w-[315px] h-13 flex items-center justify-center transform -translate-x-1/2 bg-red-500 text-white font-bold py-4 px-10 rounded-2xl hover:bg-red-700 transition-all duration-300"
                >
                    Download Vyapar Now!
                </a>
            </div>
        </div>
    </section>
);

export default WhyVyapar;
