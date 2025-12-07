import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = ({ chart }) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark', // Using dark theme to match your site's aesthetic
      securityLevel: 'loose',
      themeVariables: {
        fontFamily: 'Inter, sans-serif',
        primaryColor: '#2563eb', // blue-600
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#3b82f6',
        lineColor: '#94a3b8', // gray-400
        secondaryColor: '#1e293b', // gray-800
        tertiaryColor: '#0f172a', // gray-900
      }
    });

    // Render the diagram
    if (mermaidRef.current) {
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="mermaid bg-gray-900 p-6 rounded-lg shadow-lg overflow-x-auto flex justify-center my-8 border border-gray-800">
      <div ref={mermaidRef} className="w-full text-center">
        {chart}
      </div>
    </div>
  );
};

export default MermaidDiagram;