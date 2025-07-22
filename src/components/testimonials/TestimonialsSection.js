import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiChat } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "CMO",
            company: "TechStyle Commerce",
            content: "Aman built us a data pipeline that literally changed how we run our business. We went from guessing to knowing.",
            rating: 5,
            highlight: "From guessing to knowing",
            image: "SC",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Founder",
            company: "Growth Labs",
            content: "Finally, someone who speaks both marketing and engineering. Aman's AI assistant saves me 2 hours every morning.",
            rating: 5,
            highlight: "2 hours saved daily",
            image: "MR",
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            id: 3,
            name: "Jennifer Park",
            role: "Head of Growth",
            company: "Nexus Digital",
            content: "We tried 3 agencies before Aman. He fixed our tracking in 2 days and built a BigQuery setup that scales beautifully.",
            rating: 5,
            highlight: "Fixed in 2 days",
            image: "JP",
            gradient: "from-green-500 to-teal-500"
        },
        {
            id: 4,
            name: "David Thompson",
            role: "VP Marketing",
            company: "Ecom Brands Co",
            content: "The ROI on Aman's work is insane. We recovered tracking for 73% of our iOS traffic and cut CAC by 31%.",
            rating: 5,
            highlight: "31% CAC reduction",
            image: "DT",
            gradient: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            name: "Lisa Wang",
            role: "Data Lead",
            company: "Scale Agency",
            content: "Aman doesn't just implement solutions, he teaches you how to use them. Our team is now self-sufficient with data.",
            rating: 5,
            highlight: "Team empowerment",
            image: "LW",
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            id: 6,
            name: "Michael Foster",
            role: "CEO",
            company: "Direct Brands",
            content: "The predictive dashboards Aman built help us spot trends weeks before our competitors. Game-changing work.",
            rating: 5,
            highlight: "Weeks ahead of competition",
            image: "MF",
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
                            { number: "100+", label: "Happy Clients" },
                            { number: "9+", label: "Years Experience" },
                            { number: "5.0", label: "Average Rating" },
                            { number: "24hr", label: "Response Time" }
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