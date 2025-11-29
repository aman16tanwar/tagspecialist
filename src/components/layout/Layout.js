import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from '../ContactForm/ContactForm';
import SuccessModal from '../SuccessModal/SuccessModal';

const Layout = ({ children }) => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    useEffect(() => {
      const handleOpenContact = () => setIsContactFormOpen(true);
      window.addEventListener('openContactForm', handleOpenContact);
      return () => window.removeEventListener('openContactForm', handleOpenContact);
    }, []);
  
    const handleContactFormSuccess = () => {
      setIsContactFormOpen(false);
      setIsSuccessModalOpen(true);
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
          onClose={() => setIsContactFormOpen(false)}
          onSubmitSuccess={handleContactFormSuccess}
        />
        <SuccessModal 
          isOpen={isSuccessModalOpen} 
          onClose={() => setIsSuccessModalOpen(false)} 
        />
      </div>
    );
  };
  
  export default Layout;