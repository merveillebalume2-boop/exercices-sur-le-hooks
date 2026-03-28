import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const EffectHook = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { t, setActiveHook } = useAppContext();

  const fetchData = async () => {
    setLoading(true);
    setTimeout(() => {
      const jokes = {
        fr: ["Un développeur n'a pas besoin de sommeil.", "Mon code ne marche pas? C'est la faute d'Internet."],
        en: ["A developer doesn't need sleep.", "My code doesn't work? It's the Internet's fault."],
        sw: ["Msanidi programu haitaji usingizi.", "Kodi yangu haifanyi kazi? Ni kosa la Mtandao."]
      };
      const l = t.useState.name === 'useState' ? 'fr' : (t.language === 'Language' ? 'en' : 'sw'); // Simple check
      // Actually use a more robust check for context or just default
      setData({ joke: "Code loaded..." });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="glass-card group flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-6">
          <button 
           onClick={() => setActiveHook('useEffect')}
           className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/30 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-3.447c.186-1.13.13-2.2-.165-3.179L12 12M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <span className="spec-badge">Cycles de vie</span>
        </div>

        <h2 className="text-3xl font-black gradient-text mb-4 text-indigo-400 leading-none">{t.useEffect.name}</h2>
        <p className="text-slate-400 text-sm mb-8">{t.useEffect.desc}</p>

        <div className="relative p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 mb-6 group-hover:bg-slate-950/80 transition-all min-h-[120px] flex items-center justify-center">
          {loading ? <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-500"></div> : <p className="text-slate-300 italic text-center text-sm">{data?.joke}</p>}
        </div>
      </div>

      <div className="p-6 bg-slate-950/60 border-t border-slate-800/50">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-3 flex items-center gap-2">
           {t.specificity}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed italic">
          "{t.useEffect.spec}"
        </p>
      </div>
    </div>
  );
};

export default EffectHook;
