import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from '../team/TeamMember';

const AboutSection = () => {
    const team = [
        {
            name: "Aman Tanwar",
            role: "Lead Data Engineer & Architect",
            bio: "Bridging the gap between marketing ambition and engineering execution. I specialize in building scalable data pipelines, AI-powered analytics systems, and server-side tracking infrastructure. My focus is on technical precision and data accuracy.",
            expertise: ["Google Cloud Platform", "BigQuery", "Python", "GA4 & GTM", "AI/LangChain"],
            links: {
                linkedin: "https://linkedin.com/in/amantagspecialist",
                github: "https://github.com/amantagspecialist",
                email: "aman@tagspecialist.ca"
            }
        },
        {
            name: "Anand Batavia",
            role: "Campaign Manager & Growth Strategist",
            bio: "Turning data insights into revenue. I manage high-performance campaigns across Google Ads, Meta, and DV360. With a focus on ROI and creative strategy, I ensure your data infrastructure translates into actual business growth.",
            expertise: ["Google Ads", "Meta Ads", "DV360", "Campaign Strategy", "Growth Marketing"],
            links: {
                // Placeholder links - user to update
                email: "anand@tagspecialist.ca"
            }
        }
    ];

    return (
        <section id="about" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Team</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A complete partnership: Technical data engineering meets strategic campaign management.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <TeamMember key={index} {...member} delay={index * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;