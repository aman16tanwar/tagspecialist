import React from 'react';
import { FaStar } from 'react-icons/fa';

const UpworkProfile = () => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-bold text-white mb-4">My Upwork Profile</h3>
    <div className="flex items-center mb-4">
      <div className="text-yellow-400 flex mr-2">
        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
      </div>
      <span className="text-white">5-Star Rating</span>
    </div>
    <p className="text-gray-300 mb-4">Check out my projects and client reviews on Upwork</p>
    <a 
      href="https://www.upwork.com/freelancers/~01528e07812749b309" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      View Upwork Profile
    </a>
  </div>
);

const PortfolioSection = () => (
  <section id="projects" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-white">Portfolio & Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <UpworkProfile />
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-4">Featured Projects</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>GA4 Implementation for E-commerce</li>
          <li>Gen AI Tasks</li>
          <li>Server-Side Tracking Solution</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PortfolioSection;