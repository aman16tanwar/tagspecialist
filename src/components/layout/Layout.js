import React, { useState } from 'react';
import Navbar from './Navbar';
import ContactForm from '../ContactForm/ContactForm';

const Layout = ({ children }) => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar onContactClick={() => setIsContactFormOpen(true)} />
        <main className="pt-16 space-y-12">
          {children}
        </main>
        <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      </div>
    );
  };
  
  export default Layout;