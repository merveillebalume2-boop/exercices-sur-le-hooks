import React, { useState, useMemo, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';

const MemoHook = () => {
  const [number, setNumber] = useState(0);
  const { t, setActiveHook } = useAppContext();

  const slowFunction = (num) => {
    for (let i = 0; i < 10000000; i++) {} // Delay
    return num * 2;
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div className="glass-card group flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-6">
          <button 
           onClick={() => setActiveHook('useMemo')}
           className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500/30 transition-all active:scale-95"
          >
             🧠
          </button>
          <span className="spec-badge">Performance</span>
        </div>

        <h2 className="text-3xl font-black gradient-text mb-4 text-amber-500 leading-none">{t.useMemo.name}</h2>
        <p className="text-slate-400 text-sm mb-8">{t.useMemo.desc}</p>

        <div className="relative p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 mb-6 group-hover:bg-slate-950/80 transition-all space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] text-slate-500 uppercase font-black tracking-widest leading-loose">
               <span>Valeur: {number}</span>
               <span>Résultat: {doubleNumber}</span>
            </div>
            <input 
              type="range" 
              value={number} 
              onChange={(e) => setNumber(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-amber-500"
            />
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-950/60 border-t border-slate-800/50">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-3 flex items-center gap-2">
           {t.specificity}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed italic">
          "{t.useMemo.spec}"
        </p>
      </div>
    </div>
  );
};

export default MemoHook;
