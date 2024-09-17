import React, { useState } from 'react';
import Navbar from './Navbar';
import ContactForm from '../ContactForm/ContactForm';
import SuccessModal from '../SuccessModal/SuccessModal';

const Layout = ({ children }) => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
    const handleContactFormSuccess = () => {
      setIsContactFormOpen(false);
      setIsSuccessModalOpen(true);
    };

    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar onContactClick={() => setIsContactFormOpen(true)} />
        <main className="pt-16 space-y-12">
          {children}
        </main>
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