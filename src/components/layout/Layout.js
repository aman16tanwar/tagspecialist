import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from '../ContactForm/ContactForm';
import SuccessModal from '../SuccessModal/SuccessModal';

const Layout = ({ children }) => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [leadType, setLeadType] = useState('Client'); // Default to Client

    useEffect(() => {
      const handleOpenContact = (event) => {
        setIsContactFormOpen(true);
        // Set lead type if specified in event, otherwise infer from service name
        const type = event.detail?.leadType || (event.detail?.service?.includes('Partner') ? 'Partner' : 'Client');
        setLeadType(type);

        if (event.detail?.message) {
          setFormMessage(event.detail.message);
        } else if (event.detail?.service) {
          setFormMessage(`I'm interested in: ${event.detail.service}`);
        }
      };
      window.addEventListener('openContactForm', handleOpenContact);
      return () => window.removeEventListener('openContactForm', handleOpenContact);
    }, []);
  
    const handleContactFormSuccess = () => {
      setIsContactFormOpen(false);
      setIsSuccessModalOpen(true);
      setFormMessage('');
    };

    const handleCloseContact = () => {
      setIsContactFormOpen(false);
      setFormMessage('');
      setLeadType('Client');
    };

    return (
      <div className="bg-white text-navy-900 min-h-screen flex flex-col">
        <Navbar onContactClick={() => setIsContactFormOpen(true)} />
        <main className="pt-16 space-y-12 flex-grow">
          {children}
        </main>
        <Footer />
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={handleCloseContact}
          onSubmitSuccess={handleContactFormSuccess}
          initialMessage={formMessage}
          leadType={leadType}
        />
        <SuccessModal 
          isOpen={isSuccessModalOpen} 
          onClose={() => setIsSuccessModalOpen(false)} 
        />
      </div>
    );
  };
  
  export default Layout;