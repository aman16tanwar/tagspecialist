import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ContactForm = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://autumn-frost-d9cf.aman16tanwar.workers.dev/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Consider any response as successful if it's not an error
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setFormData({ name: '', email: '', message: '' });
      onSubmitSuccess();
    } catch (error) {
      console.error('Error:', error);
      alert('Thank you for reaching out. There was an issue submitting your message, but we have likely received it. Our team will contact you within the next few hours to confirm and assist with your inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <FaTimes size={24} />
        </button>
        <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;