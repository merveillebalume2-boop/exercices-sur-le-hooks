import React from 'react';
import { useAppContext } from '../context/AppContext';

export const Navbar = () => {
  const { theme, toggleTheme, lang, setLang, toggleMenu, t } = useAppContext();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-6 lg:px-12 flex items-center justify-between backdrop-blur-xl border-b border-white/5 bg-slate-950/20 shadow-lg">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleMenu}
          className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group"
          title={t.menu}
        >
          <div className="w-5 h-[2px] bg-primary-400 mb-1.5 transition-all group-hover:w-6"></div>
          <div className="w-6 h-[2px] bg-primary-400 mb-1.5"></div>
          <div className="w-5 h-[2px] bg-primary-400 transition-all group-hover:w-4"></div>
        </button>
        <div className="hidden sm:flex flex-col">
          <span className="text-sm font-black tracking-widest text-white uppercase leading-none mb-1">React Hooks</span>
          <span className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.2em] leading-none">Learning Studio</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <select 
          value={lang} 
          onChange={(e) => setLang(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-slate-300 focus:outline-none hover:bg-white/10 transition-all cursor-pointer"
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="sw">SW</option>
        </select>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-lg transition-all active:scale-95"
          title={t.theme}
        >
          {theme === 'dark' ? '🌑' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export const Sidebar = () => {
  const { isMenuOpen, toggleMenu, t, setLang, lang, setActiveSection } = useAppContext();

  const handleLink = (section) => {
    setActiveSection(section);
    toggleMenu();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      ></div>

      {/* Drawer */}
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900 z-50 transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-white/5 shadow-2xl p-8 flex flex-col`}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-black gradient-text uppercase tracking-widest leading-none">Menu</h2>
          <button onClick={toggleMenu} className="text-slate-500 hover:text-white transition-colors">{t.close}</button>
        </div>

        <nav className="flex-grow space-y-6">
          <button onClick={() => handleLink('docs')} className="block text-lg font-bold text-slate-400 hover:text-primary-400 transition-all text-left w-full uppercase tracking-tighter">{t.documentation}</button>
          <button onClick={() => handleLink('profile')} className="block text-lg font-bold text-slate-400 hover:text-primary-400 transition-all text-left w-full uppercase tracking-tighter">{t.profile}</button>
          <button onClick={() => handleLink('settings')} className="block text-lg font-bold text-slate-400 hover:text-primary-400 transition-all text-left w-full uppercase tracking-tighter">{t.parameters}</button>
        </nav>

        <div className="pt-8 border-t border-white/5">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-4">{t.language}</p>
           <div className="flex gap-2">
              {['fr', 'en', 'sw'].map(l => (
                <button 
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${lang === l ? 'bg-primary-600 border-primary-500 text-white' : 'bg-white/5 border-white/10 text-slate-500 hover:border-white/20'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
           </div>
        </div>
      </aside>
    </>
  );
};
