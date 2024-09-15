import React, { useState } from 'react';
import banner from '../../assets/banner.jpeg';
import ContactForm from '../ContactForm/ContactForm';

const HeroSection = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    return (
        <div className="relative overflow-hidden min-h-[70vh]">
            <div className="absolute inset-0 transform scale-110">
                {/* Added transform and scale for parallax */}
                <img
                    src={banner}
                    alt="TAG Specialist Background"
                    className="w-full h-full object-cover object-center transform scale-110 transition-transform duration-1000"
                    style={{ transform: 'translateY(var(--scroll-offset, 0))' }}
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
            </div>

            <div className="relative container mx-auto px-4 py-20 flex items-center">
                <div className="md:w-1/2 space-y-6 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold text-white animate-slideInLeft">
                        Data Analytics <span className="text-yellow-400">&</span> AI Solutions
                    </h1>
                    <p className="text-xl text-white animate-slideInLeft animation-delay-300">
                        Hello, I'm Aman, GA4 Expert & AI Consultant
                    </p>
                    <p className="text-gray-300 animate-slideInLeft animation-delay-500">
                        GA4 • Server-Side Tracking • Google Cloud • GenAI Solutions
                    </p>
                    <div className="space-x-4 animate-fadeIn animation-delay-700">
                        <button
                            onClick={() => setIsContactFormOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
                        >
                            Get in Touch
                        </button>
                        <a
                            href="https://www.upwork.com/freelancers/~01528e07812749b309"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
                        >
                            Available for Hire
                        </a>
                    </div>
                    <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
