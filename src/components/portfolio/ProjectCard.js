import React from 'react';

const ProjectCard = ({ title, description, image }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <button className="mt-4 text-yellow-400 hover:text-yellow-300">
        Learn more →
      </button>
    </div>
  </div>
);

export default ProjectCard;