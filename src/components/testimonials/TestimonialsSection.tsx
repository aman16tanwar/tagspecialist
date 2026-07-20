'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { HiStar, HiChat, HiBadgeCheck } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
    id: number;
    service: string;
    content: string;
    rating: number;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

interface Stat {
    number: string;
    label: string;
}

const TestimonialsSection: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            service: "Google & Meta Tracking",
            content: "Aman is hands down the best Google and Meta tracking specialist I've ever worked with. His deep expertise, problem-solving skills, and attention to detail make him an absolute game-changer.",
            rating: 5,
        },
        {
            id: 2,
            service: "GA4 & GTM Implementation",
            content: "Aman did a fantastic job setting up GA4 and Tag Manager for 3 ecommerce websites I have. I will definitely work with him again and be referring others to him.",
            rating: 5,
        },
        {
            id: 3,
            service: "Facebook Attribution",
            content: "Incredibly skilled with Facebook attribution, and was thorough in troubleshooting and solving my issue, even on my checkout software that he wasn't already familiar with.",
            rating: 5,
        },
        {
            id: 4,
            service: "Meta CAPI Setup",
            content: "Excellent troubleshooting and testing. Professional and knowledgeable with Google Analytics, Tag Manager, Facebook Ads Manager. Would highly recommend and will gladly rehire in future.",
            rating: 5,
        },
        {
            id: 5,
            service: "GTM Implementation",
            content: "Very good developer. Always did a good job. We've worked together for over 3 years. Aman has been instrumental in our tracking success.",
            rating: 5,
        },
        {
            id: 6,
            service: "SA360 Account Audit",
            content: "Aman is great and knowledgeable. He's a great communicator too. His audit helped us identify critical tracking gaps and improve our campaign performance significantly.",
            rating: 5,
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
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

    const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative group h-full"
        >
            <div className="relative h-full bg-white border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm hover:border-blue-400 transition-all duration-300">
                {/* Quote Icon */}
                <FaQuoteLeft className="w-8 h-8 text-gray-300 mb-4" />

                {/* Content */}
                <p className="text-gray-600 mb-6 flex-grow italic">&quot;{testimonial.content}&quot;</p>

                {/* Attribution */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <HiBadgeCheck className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-navy-900 font-semibold text-sm">{testimonial.service}</h4>
                        <p className="text-xs text-emerald-600 font-semibold">Verified Upwork Review</p>
                    </div>
                    <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <HiStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const stats: Stat[] = [
        { number: "Verified", label: "Upwork Client Reviews" },
        { number: "3+ yrs", label: "Longest Client Engagement" },
        { number: "24h", label: "Response Time" },
        { number: "100%", label: "Senior-Level Delivery" }
    ];

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
                            <span className="text-sm text-blue-800 font-medium">Verified Client Reviews</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                            Don&apos;t Just Take <span className="text-blue-600">My Word For It</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real reviews from paid client engagements — every project completed, logged, and rated on Upwork.
                        </p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                    className="text-3xl md:text-4xl font-bold text-navy-900 mb-2"
                                >
                                    {stat.number}
                                </motion.div>
                                <p className="text-gray-600 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Trust Note */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 flex flex-col items-center gap-6"
                    >
                        <p className="text-gray-600 text-center text-sm">
                            Every review shown is from a verified, paid engagement on Upwork.
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <div className="flex items-center gap-2 text-gray-500">
                                <HiBadgeCheck className="w-5 h-5 text-emerald-500" />
                                <span>Verified Upwork Engagements</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <HiStar className="w-5 h-5 text-yellow-500" />
                                <span>Direct Expert Access</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
