'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ModalContextType {
  isContactFormOpen: boolean;
  isSuccessModalOpen: boolean;
  formMessage: string;
  leadType: 'Client' | 'Partner';
  openContactForm: (options?: { message?: string; service?: string; leadType?: 'Client' | 'Partner' }) => void;
  closeContactForm: () => void;
  openSuccessModal: () => void;
  closeSuccessModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [leadType, setLeadType] = useState<'Client' | 'Partner'>('Client');

  const openContactForm = useCallback((options?: { message?: string; service?: string; leadType?: 'Client' | 'Partner' }) => {
    setIsContactFormOpen(true);

    // Set lead type if specified, otherwise infer from service name
    const type = options?.leadType || (options?.service?.includes('Partner') ? 'Partner' : 'Client');
    setLeadType(type);

    if (options?.message) {
      setFormMessage(options.message);
    } else if (options?.service) {
      setFormMessage(`I'm interested in: ${options.service}`);
    }
  }, []);

  const closeContactForm = useCallback(() => {
    setIsContactFormOpen(false);
    setFormMessage('');
    setLeadType('Client');
  }, []);

  const openSuccessModal = useCallback(() => {
    setIsContactFormOpen(false);
    setIsSuccessModalOpen(true);
    setFormMessage('');
  }, []);

  const closeSuccessModal = useCallback(() => {
    setIsSuccessModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isContactFormOpen,
        isSuccessModalOpen,
        formMessage,
        leadType,
        openContactForm,
        closeContactForm,
        openSuccessModal,
        closeSuccessModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
