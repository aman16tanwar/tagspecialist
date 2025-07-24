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
            highlight: "Best tracking specialist",
            image: "MD",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            name: "Business Owner",
            role: "GA4 Implementation",
            company: "E-commerce Brands",
            content: "Aman did a fantastic job setting up GA4 and Tag Manager for 3 ecommerce websites I have. I will definitely work with him again and be referring others to him.",
            rating: 5,
            highlight: "3 sites implemented",
            image: "BO",
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            id: 3,
            name: "Marketing Manager",
            role: "Facebook Attribution",
            company: "SaaS Company",
            content: "Incredibly skilled with Facebook attribution, and was thorough in troubleshooting and solving my issue, even on my checkout software that he wasn't already familiar with.",
            rating: 5,
            highlight: "Expert troubleshooting",
            image: "MM",
            gradient: "from-green-500 to-teal-500"
        },
        {
            id: 4,
            name: "E-commerce Manager",
            role: "CAPI Setup",
            company: "ThriveCart User",
            content: "Excellent troubleshooting and testing. Professional and knowledgeable with Google Analytics, Tag Manager, Facebook Ads Manager. Would highly recommend and will gladly rehire in future.",
            rating: 5,
            highlight: "Highly professional",
            image: "EM",
            gradient: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            name: "Growth Lead",
            role: "GTM Implementation",
            company: "Long-term Client",
            content: "Very good developer. Always did a good job. We've worked together for over 3 years with 172 hours logged. Aman has been instrumental in our tracking success.",
            rating: 5,
            highlight: "3+ years partnership",
            image: "GL",
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            id: 6,
            name: "Analytics Manager",
            role: "SA360 Account Audit",
            company: "Digital Agency",
            content: "Aman is great and knowledgeable. He's a great communicator too. His audit helped us identify critical tracking gaps and improve our campaign performance significantly.",
            rating: 5,
            highlight: "Great communicator",
            image: "AM",
            gradient: "from-pink-500 to-rose-500"
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
            {/* Gradient border effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
            
            <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col">
                {/* Quote Icon */}
                <FaQuoteLeft className="w-8 h-8 text-gray-700 mb-4" />
                
                {/* Content */}
                <p className="text-gray-300 mb-6 flex-grow">"{testimonial.content}"</p>
                
                {/* Highlight */}
                <div className="inline-flex items-center mb-6">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${testimonial.gradient} text-transparent bg-clip-text`}>
                        {testimonial.highlight}
                    </span>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                        {testimonial.image}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">
                            {testimonial.role} at {testimonial.company}
                        </p>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <HiStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="testimonials" className="relative py-20 bg-gray-900 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
                            <HiChat className="w-5 h-5 text-yellow-400" />
                            <span className="text-sm text-yellow-300 font-medium">Client Success Stories</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Don't Just Take{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                My Word For It
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                            { number: "50+", label: "Happy Clients" },
                            { number: "4+", label: "Years on Upwork" },
                            { number: "5.0", label: "Average Rating" },
                            { number: "$15K+", label: "Earned on Platform" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2"
                                >
                                    {stat.number}
                                </motion.div>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 flex flex-wrap justify-center items-center gap-8"
                    >
                        <div className="flex items-center gap-2 text-gray-400">
                            <HiStar className="w-5 h-5 text-yellow-400" />
                            <span>Top Rated on Upwork</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <HiStar className="w-5 h-5 text-yellow-400" />
                            <span>Google Analytics Certified</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <HiStar className="w-5 h-5 text-yellow-400" />
                            <span>Meta Marketing Partner</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;