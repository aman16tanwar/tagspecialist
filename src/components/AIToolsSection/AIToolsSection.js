import React from 'react';
import { FaRobot, FaPencilAlt, FaYoutube } from 'react-icons/fa';

const AITool = ({ icon, title, description, price }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold text-white ml-3">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-yellow-400 font-bold">${price}</span>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Learn More
      </button>
    </div>
  </div>
);

const AIToolsSection = () => (
  <section className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-white">AI Tools & Scripts for Sale</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AITool 
        icon={<FaRobot className="text-4xl text-blue-500" />}
        title="Big Query Task Assistant"
        description="Automate and optimize your Big Query tasks with AI-powered assistance."
        price="49.99"
      />
      <AITool 
        icon={<FaPencilAlt className="text-4xl text-green-500" />}
        title="Ad Copy Generator"
        description="Generate compelling ad copy with AI to boost your marketing campaigns."
        price="39.99"
      />
      <AITool 
        icon={<FaYoutube className="text-4xl text-red-500" />}
        title="YouTube Channel Optimizer"
        description="Enhance your YouTube channel's performance with AI-driven insights and optimizations."
        price="59.99"
      />
    </div>
  </section>
);

export default AIToolsSection;