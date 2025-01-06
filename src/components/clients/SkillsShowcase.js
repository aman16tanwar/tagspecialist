import React from 'react';
import { FaCode, FaChartBar, FaCloud, FaRobot } from 'react-icons/fa';

const SkillCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl">
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const SkillsShowcase = () => (
  <section className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-white">My Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <SkillCard 
        icon={<FaCode />}
        title="Advanced Analytics"
        description="Expertise in implementing complex analytics solutions using GA4 and BigQuery."
      />
      <SkillCard 
        icon={<FaChartBar />}
        title="Data Visualization"
        description="Creating insightful dashboards and reports to drive data-informed decisions."
      />
      <SkillCard 
        icon={<FaCloud />}
        title="Cloud Solutions"
        description="Proficient in Google Cloud Platform for scalable and efficient data processing."
      />
      <SkillCard 
        icon={<FaRobot />}
        title="AI & Machine Learning"
        description="Developing custom AI solutions to automate tasks and generate insights."
      />
    </div>
  </section>
);

export default SkillsShowcase;