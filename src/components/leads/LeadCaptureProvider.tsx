'use client';

import { useState, useCallback } from 'react';
import StickyContactButton from './StickyContactButton';
import QuickLeadForm from './QuickLeadForm';
import ExitIntentPopup from './ExitIntentPopup';
import { useModal } from '@/contexts/ModalContext';

const LeadCaptureProvider: React.FC = () => {
  const [isQuickFormOpen, setIsQuickFormOpen] = useState(false);
  const { openSuccessModal } = useModal();

  const handleSuccess = useCallback(() => {
    openSuccessModal();
  }, [openSuccessModal]);

  return (
    <>
      {/* Sticky floating contact button */}
      <StickyContactButton onOpenForm={() => setIsQuickFormOpen(true)} />
      
      {/* Quick lead form modal */}
      <QuickLeadForm 
        isOpen={isQuickFormOpen} 
        onClose={() => setIsQuickFormOpen(false)} 
        onSuccess={() => {
          setIsQuickFormOpen(false);
          handleSuccess();
        }}
        source="sticky_button"
      />
      
      {/* Exit intent popup */}
      <ExitIntentPopup onSuccess={handleSuccess} />
    </>
  );
};

export default LeadCaptureProvider;
