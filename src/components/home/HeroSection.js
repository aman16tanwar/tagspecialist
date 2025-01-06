import React, { useState } from 'react';
import banner from '../../assets/banner.jpeg';
import ContactForm from '../ContactForm/ContactForm';

const HeroSection = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    return (
        <div className="relative overflow-hidden min-h-[80vh] bg-gray-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={banner}
                    alt="TAG Specialist Background"
                    className="w-full h-full object-cover object-center brightness-75 contrast-100"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content Section */}
            <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center items-center space-y-6 text-center md:text-left md:flex-row">
                <div className="md:w-1/2 space-y-6 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
                        Empowering Your Business with{' '}
                        <span className="text-yellow-400">Analytics</span> &{' '}
                        <span className="text-blue-400">AI Solutions</span>
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Hello, I'm Aman, GA4 Expert & AI Consultant.
                    </p>
                    <div className="bg-gray-800 bg-opacity-75 p-4 rounded shadow-lg text-gray-100">
                        <p className="text-md md:text-lg leading-relaxed">
                            Partner with me for customized GA4 setups, server-side tracking, Google Ads optimization, and cutting-edge AI tools.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-start">
                        <button
                            onClick={() => setIsContactFormOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-md transition-transform transform hover:scale-105"
                        >
                            Get in Touch
                        </button>
                        <a
                            href="https://www.upwork.com/freelancers/~01528e07812749b309"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-3 px-6 rounded shadow-md transition-transform transform hover:scale-105"
                        >
                            Available for Hire
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
        </div>
    );
};

export default HeroSection;
