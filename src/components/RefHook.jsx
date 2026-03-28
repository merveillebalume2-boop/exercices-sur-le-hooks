import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const RefHook = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const prevValue = useRef("");
  const { t, setActiveHook } = useAppContext();

  useEffect(() => {
    prevValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="glass-card group flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-6">
          <button 
           onClick={() => setActiveHook('useRef')}
           className="w-12 h-12 rounded-2xl bg-teal-600/20 border border-teal-500/20 flex items-center justify-center text-teal-400 text-lg font-black hover:bg-teal-500/30 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </button>
          <span className="spec-badge">Accès Direct</span>
        </div>

        <h2 className="text-3xl font-black gradient-text mb-4 text-teal-400 leading-none">{t.useRef.name}</h2>
        <p className="text-slate-400 text-sm mb-8">{t.useRef.desc}</p>

        <div className="relative p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 mb-6 group-hover:bg-slate-950/80 transition-all space-y-4 flex flex-col items-center">
          <input 
            ref={inputRef}
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
            className="w-full h-12 bg-slate-900 border border-white/5 rounded-xl px-4 text-center text-sm font-bold tracking-widest transition-all focus:outline-none"
          />
          <button 
            onClick={focusInput}
            className="w-full h-12 premium-button bg-teal-600 hover:bg-teal-500"
          >
            Focus Input
          </button>
        </div>
      </div>

      <div className="p-6 bg-slate-950/60 border-t border-slate-800/50">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400 mb-3 flex items-center gap-2">
           {t.specificity}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed italic">
          "{t.useRef.spec}"
        </p>
      </div>
    </div>
  );
};

export default RefHook;
