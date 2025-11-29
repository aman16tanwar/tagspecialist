import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const TeamMember = ({ name, role, bio, image, links, expertise, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
        >
            <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    {/* Avatar/Image Placeholder */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 text-3xl font-bold text-white shadow-inner">
                        {image ? (
                            <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
                        ) : (
                            name.charAt(0)
                        )}
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy-900 mb-1">{name}</h3>
                        <p className="text-blue-600 font-medium mb-4">{role}</p>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {bio}
                        </p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {expertise.map((skill, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-600 border border-gray-200 font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {links.linkedin && (
                                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                            )}
                            {links.github && (
                                <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-navy-900 transition-colors">
                                    <FaGithub className="w-5 h-5" />
                                </a>
                            )}
                            {links.email && (
                                <a href={`mailto:${links.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <HiMail className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamMember;
