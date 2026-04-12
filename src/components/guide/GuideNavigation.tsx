'use client';

import { useState, useEffect } from 'react';
import { HiCheck } from 'react-icons/hi';

interface NavItem {
  id: string;
  label: string;
}

export default function GuideNavigation({ navItems }: { navItems: NavItem[] }) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || '');
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set([navItems[0]?.id || '']));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setVisitedSections(prev => {
        const newSet = new Set(prev);
        newSet.add(id);
        return newSet;
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          setVisitedSections(prev => {
            const newSet = new Set(prev);
            newSet.add(navItems[i].id);
            return newSet;
          });
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contents</h3>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-[#eff6ff] text-[#1e40af] font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                visitedSections.has(item.id) ? 'bg-[#2563eb] border-[#2563eb]' : 'border-gray-300'
              }`}>
                {visitedSections.has(item.id) && <HiCheck className="w-3 h-3 text-white" />}
              </div>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
