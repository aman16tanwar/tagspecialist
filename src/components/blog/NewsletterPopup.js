import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiMail, HiCheck } from 'react-icons/hi';

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Added missing state

    useEffect(() => {
        // Check if previously dismissed or subscribed
        const isDismissed = localStorage.getItem('newsletter_dismissed');
        if (isDismissed) return;

        const handleScroll = () => {
            if (hasScrolled) return;

            // Calculate scroll percentage
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            // Trigger at 50% scroll
            if (scrollPercentage > 50) {
                setHasScrolled(true);
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolled]);

    const handleDismiss = () => {
        setIsVisible(false);
        // Don't show again for 7 days
        const expiry = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
        localStorage.setItem('newsletter_dismissed', JSON.stringify({ value: true, expiry }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('loading'); // Set status to loading
        try {
            // Use Web3Forms directly, same as ContactForm
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '281edfc6-1b7f-429f-a500-da5b83ede63e', // Web3Forms Access Key
                    name: 'Newsletter Subscriber',
                    email: email,
                    subject: 'New Newsletter Subscription - Tag Specialist Blog',
                    message: `New subscriber email: ${email}`,
                    from_email: 'developer@tagspecialist.com', // Optional: where the email appears to come from
                }),
            });
            
            const data = await response.json();

            if (response.ok && data.success) { // Web3Forms returns { success: true }
                setStatus('success');
                localStorage.setItem('newsletter_dismissed', 'subscribed'); // Mark as subscribed
                setTimeout(() => {
                    setIsVisible(false);
                    setEmail(''); // Clear email field
                }, 3000);
            } else {
                console.error('Web3Forms error:', data);
                setStatus('error');
            }
        } catch (error) {
            console.error('Newsletter submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 right-4 z-50 w-full max-w-md md:bottom-8 md:right-8"
                >
                    <div className="bg-white rounded-lg shadow-2xl border border-blue-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-navy-900 p-4 flex justify-between items-center">
                            <h3 className="text-white font-bold flex items-center gap-2">
                                <HiMail className="w-5 h-5 text-blue-400" />
                                Get Data Engineering Tips
                            </h3>
                            <button 
                                onClick={handleDismiss}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <HiX className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {status === 'success' ? (
                                <div className="text-center py-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <HiCheck className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-navy-900 mb-1">You're In!</h4>
                                    <p className="text-gray-600 text-sm">Thanks for subscribing. Expect value, not spam.</p>
                                </div>
                            ) : (
                                <>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Join 500+ data engineers receiving weekly guides on GA4, BigQuery, and Python automation.
                                    </p>
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="work@email.com"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting} // Use isSubmitting here
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors text-sm flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Subscribe Free'}
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
                                        )}
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NewsletterPopup;
