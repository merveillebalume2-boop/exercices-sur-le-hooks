import React from 'react';
import { useAppContext } from '../context/AppContext';

const ContextHook = () => {
  const { theme, toggleTheme, t, setActiveHook } = useAppContext();

  return (
    <div className="glass-card group flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-6">
          <button 
            onClick={() => setActiveHook('useContext')}
            className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-3.447c.186-1.13.13-2.2-.165-3.179L12 12M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <span className="spec-badge">État Global</span>
        </div>

        <h2 className="text-3xl font-black gradient-text mb-4 text-purple-400 leading-none">{t.useContext.name}</h2>
        <p className="text-slate-400 text-sm mb-8">{t.useContext.desc}</p>

        <div className="relative p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 mb-6 group-hover:bg-slate-950/80 transition-all flex flex-col items-center">
           <div className={`w-full p-6 rounded-2xl border transition-all flex flex-col items-center justify-center gap-4 ${theme === 'dark' ? 'bg-slate-900 border-white/5 shadow-2xl' : 'bg-slate-100 border-purple-500 text-purple-900 shadow-xl'}`}>
               <span className="text-sm font-black uppercase tracking-widest">{t.theme}: {theme}</span>
               <button 
                onClick={toggleTheme}
                className={`px-8 py-3 rounded-xl font-bold transition-all active:scale-95 text-xs tracking-widest leading-loose ${theme === 'dark' ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'}`}
               >
                  {theme === 'dark' ? '🌑' : '☀️'}
               </button>
           </div>
        </div>
      </div>

      <div className="p-6 bg-slate-950/60 border-t border-slate-800/50">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-3 flex items-center gap-2">
           {t.specificity}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed italic">
          "{t.useContext.spec}"
        </p>
      </div>
    </div>
  );
};

export default ContextHook;
