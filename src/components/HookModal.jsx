import React from 'react';
import { useAppContext } from '../context/AppContext';

export const HookModal = () => {
  const { activeHook, setActiveHook, t } = useAppContext();

  if (!activeHook) return null;

  const getHookInfo = () => {
    switch(activeHook) {
      case 'useState': return t.useState;
      case 'useEffect': return t.useEffect;
      case 'useRef': return t.useRef;
      case 'useMemo': return t.useMemo;
      case 'useContext': return t.useContext;
      default: return null;
    }
  };

  const info = getHookInfo();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-all duration-300 pointer-events-auto"
        onClick={() => setActiveHook(null)}
      ></div>
      
      <div className="relative glass-card w-full max-w-2xl p-10 lg:p-14 border border-white/10 shadow-[0_0_100px_rgba(14,165,233,0.1)] transform animate-float">
        <button 
          onClick={() => setActiveHook(null)}
          className="absolute top-8 right-8 text-slate-500 hover:text-white transition-all text-xs font-black uppercase tracking-widest"
        >
          {t.close}
        </button>

        <div className="flex items-center gap-6 mb-10">
           <div className="w-16 h-16 rounded-3xl bg-primary-600/20 border border-primary-500/20 flex items-center justify-center text-primary-400 text-2xl font-black">
              {activeHook.substring(0, 3)}
           </div>
           <div>
              <span className="spec-badge mb-2">Hook Reference</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-none capitalize">{activeHook}</h2>
           </div>
        </div>

        <div className="space-y-8">
           <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary-400 mb-4">{t.useState.name === 'useState' ? 'Description' : 'Maelezo'}</h3>
              <p className="text-lg text-slate-300 leading-relaxed font-sans">{info?.desc}</p>
           </div>

           <div className="p-8 rounded-3xl bg-primary-900/10 border border-primary-500/20">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary-400 mb-4">{t.specificity}</h3>
              <p className="text-lg text-primary-100 leading-relaxed italic">{info?.spec}</p>
           </div>
        </div>

        <div className="mt-12 text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
           React Hooks Learning Studio v1.0
        </div>
      </div>
    </div>
  );
};
