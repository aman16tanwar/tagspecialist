import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiChat } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Marketing Director",
            role: "Google/Meta Tracking",
            company: "E-commerce Client",
            content: "Aman is hands down the best Google and Meta tracking specialist I've ever worked with. His deep expertise, problem-solving skills, and attention to detail make him an absolute game-changer.",
            rating: 5,
            highlight: "$2,314 project • 41 hours",
            image: "MD",
            // Removed gradients
        },
        {
            id: 2,
            name: "Business Owner",
            role: "GA4 Implementation",
            company: "E-commerce Brands",
            content: "Aman did a fantastic job setting up GA4 and Tag Manager for 3 ecommerce websites I have. I will definitely work with him again and be referring others to him.",
            rating: 5,
            highlight: "$405 project • 7 hours",
            image: "BO",
        },
        {
            id: 3,
            name: "Marketing Manager",
            role: "Facebook Attribution",
            company: "SaaS Company",
            content: "Incredibly skilled with Facebook attribution, and was thorough in troubleshooting and solving my issue, even on my checkout software that he wasn't already familiar with.",
            rating: 5,
            highlight: "$35 project • Quick fix",
            image: "MM",
        },
        {
            id: 4,
            name: "E-commerce Manager",
            role: "CAPI Setup",
            company: "ThriveCart User",
            content: "Excellent troubleshooting and testing. Professional and knowledgeable with Google Analytics, Tag Manager, Facebook Ads Manager. Would highly recommend and will gladly rehire in future.",
            rating: 5,
            highlight: "$70 project • 1 hour",
            image: "EM",
        },
        {
            id: 5,
            name: "Growth Lead",
            role: "GTM Implementation",
            company: "Long-term Client",
            content: "Very good developer. Always did a good job. We've worked together for over 3 years with 172 hours logged. Aman has been instrumental in our tracking success.",
            rating: 5,
            highlight: "$7,740 • 172 hours",
            image: "GL",
        },
        {
            id: 6,
            name: "Analytics Manager",
            role: "SA360 Account Audit",
            company: "Digital Agency",
            content: "Aman is great and knowledgeable. He's a great communicator too. His audit helped us identify critical tracking gaps and improve our campaign performance significantly.",
            rating: 5,
            highlight: "$366 project • 6 hours",
            image: "AM",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
            },
        },
    };

    const TestimonialCard = ({ testimonial, index }) => (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative group h-full"
        >
            <div className="relative h-full bg-white border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm hover:border-blue-400 transition-all duration-300">
                {/* Quote Icon */}
                <FaQuoteLeft className="w-8 h-8 text-gray-300 mb-4" />
                
                {/* Content */}
                <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.content}"</p>
                
                {/* Highlight */}
                <div className="inline-flex items-center mb-6">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {testimonial.highlight}
                    </span>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-white font-bold border border-gray-200">
                        {testimonial.image}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                        <h4 className="text-navy-900 font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                            {testimonial.role} • {testimonial.company}
                        </p>
                        <p className="text-xs text-green-600 mt-1 font-medium">
                            ✓ Verified Client
                        </p>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex flex-col items-end">
                        <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <HiStar key={i} className="w-4 h-4 text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="testimonials" className="relative py-20 bg-gray-50 overflow-hidden">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                            <HiChat className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-blue-800 font-medium">Client Success Stories</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                            Don't Just Take <span className="text-blue-600">My Word For It</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from the businesses I've helped transform their data operations
                        </p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                        ))}
                    </div>

                    {/* Stats Section */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            { number: "70+", label: "Happy Clients" },
                            { number: "8+", label: "Years Experience" },
                            { number: "5.0", label: "Average Rating" },
                            { number: "451%", label: "Average ROAS" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                    className="text-4xl md:text-5xl font-bold text-navy-900 mb-2"
                                >
                                    {stat.number}
                                </motion.div>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 flex flex-col items-center gap-6"
                    >
                        <p className="text-gray-600 text-center">
                            Testimonials from verified enterprise and agency clients.
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                             <div className="flex items-center gap-2 text-gray-500">
                                <HiStar className="w-5 h-5 text-yellow-500" />
                                <span>100% Client Satisfaction</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <HiStar className="w-5 h-5 text-yellow-500" />
                                <span>Top Tier Engineering</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
