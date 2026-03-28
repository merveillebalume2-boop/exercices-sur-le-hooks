import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const CounterHook = () => {
  const [count, setCount] = useState(0);
  const { t, setActiveHook } = useAppContext();

  return (
    <div className="glass-card group flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-6">
          <button 
            onClick={() => setActiveHook('useState')}
            className="w-12 h-12 rounded-2xl bg-primary-600/20 border border-primary-500/20 flex items-center justify-center text-primary-400 hover:bg-primary-500/30 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
          <span className="spec-badge">Etat Local</span>
        </div>

        <h2 className="text-3xl font-black gradient-text mb-4 leading-none">{t.useState.name}</h2>
        <p className="text-slate-400 text-sm italic mb-8">{t.useState.desc}</p>

        <div className="relative flex items-center justify-center py-10 rounded-2xl bg-slate-950/50 border border-slate-800/50 mb-6 group-hover:bg-slate-950/80 transition-all">
          <div className="flex items-center gap-10">
            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-xl font-bold transition-all active:scale-90"
            >
              -
            </button>
            <span className="text-6xl font-black text-white tabular-nums drop-shadow-xl">{count}</span>
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="w-12 h-12 rounded-xl bg-primary-600 hover:bg-primary-500 shadow-xl shadow-primary-900/40 flex items-center justify-center text-xl font-bold transition-all active:scale-90"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-950/60 border-t border-slate-800/50">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-400 mb-3 flex items-center gap-2">
          {t.specificity}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed italic">
          "{t.useState.spec}"
        </p>
      </div>
    </div>
  );
};

export default CounterHook;
