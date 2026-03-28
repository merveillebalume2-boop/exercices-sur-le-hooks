import React from 'react';
import { useAppContext } from '../context/AppContext';

export const SectionModal = () => {
  const { activeSection, setActiveSection, t } = useAppContext();

  if (!activeSection) return null;

  const getContent = () => {
    switch(activeSection) {
      case 'docs': return { title: t.documentation, text: t.docsText, icon: '📄' };
      case 'profile': return { title: t.profile, text: t.profileText, icon: '👤' };
      case 'settings': return { title: t.parameters, text: t.settingsText, icon: '⚙️' };
      default: return null;
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-all duration-300 pointer-events-auto"
        onClick={() => setActiveSection(null)}
      ></div>
      
      <div className="relative glass-card w-full max-w-lg p-10 border border-white/10 shadow-2xl animate-float">
        <button 
          onClick={() => setActiveSection(null)}
          className="absolute top-8 right-8 text-slate-500 hover:text-white transition-all text-xs font-black uppercase tracking-widest"
        >
          {t.close}
        </button>

        <div className="flex flex-col items-center text-center space-y-6">
           <div className="w-20 h-20 rounded-full bg-primary-600/10 border border-primary-500/20 flex items-center justify-center text-4xl shadow-inner">
              {content?.icon}
           </div>
           
           <h2 className="text-3xl font-black gradient-text uppercase tracking-widest leading-tight">
              {content?.title}
           </h2>
           
           <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
              {content?.text}
           </p>

           <div className="pt-8 w-full border-t border-white/5">
              <button 
                onClick={() => setActiveSection(null)}
                className="premium-button w-full"
              >
                {t.back}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
