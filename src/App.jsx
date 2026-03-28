import React, { useRef } from 'react'
import { AppProvider, useAppContext } from './context/AppContext'
import { Navbar, Sidebar } from './components/Nav'
import { HookModal } from './components/HookModal'
import { SectionModal } from './components/SectionModal'

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CounterHook from './components/CounterHook'
import EffectHook from './components/EffectHook'
import MemoHook from './components/MemoHook'
import RefHook from './components/RefHook'
import ContextHook from './components/ContextHook'

const Content = () => {
  const { theme, t, setActiveHook } = useAppContext();
  const exploreRef = useRef(null);

  const handleGetStarted = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-all duration-700 font-sans ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar />
      <Sidebar />
      <HookModal />
      <SectionModal />

      {/* Cinematic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full animate-float ${theme === 'dark' ? 'bg-primary-900/10' : 'bg-primary-400/20'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[150px] rounded-full animate-pulse-slow ${theme === 'dark' ? 'bg-indigo-900/10' : 'bg-indigo-400/20'}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-48 flex flex-col items-center">
        <div className="relative group mb-12">
           <div className={`absolute -inset-10 blur-[60px] rounded-full transition-all duration-1000 ${theme === 'dark' ? 'bg-primary-400/20' : 'bg-primary-400/30'}`}></div>
           <svg className="w-32 h-32 lg:w-48 lg:h-48 animate-pulse text-primary-400 relative z-10" viewBox="-11.5 -10.23174 23 20.46348">
              <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
        </div>

        <header className="mb-24 text-center space-y-8 animate-float">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-primary-400 backdrop-blur-md">
            React Hooks Masterclass
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] drop-shadow-2xl">
             {t.title}
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <button 
            onClick={handleGetStarted}
            className="premium-button mt-4 px-10 py-4 h-14 min-w-[200px] shadow-2xl cursor-pointer"
          >
            {t.getStarted}
          </button>
        </header>

        {/* Carousel Section */}
        <section ref={exploreRef} className="w-full max-w-6xl pb-32">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="p-10 !pb-20"
          >
            <SwiperSlide className="!w-[340px] md:!w-[400px]">
              <CounterHook />
            </SwiperSlide>
            <SwiperSlide className="!w-[340px] md:!w-[400px]">
              <EffectHook />
            </SwiperSlide>
            <SwiperSlide className="!w-[340px] md:!w-[400px]">
              <RefHook />
            </SwiperSlide>
            <SwiperSlide className="!w-[340px] md:!w-[400px]">
              <MemoHook />
            </SwiperSlide>
            <SwiperSlide className="!w-[340px] md:!w-[400px]">
              <ContextHook />
            </SwiperSlide>
            
            <SwiperSlide className="!w-[340px] md:!w-[400px]">
              <div 
                onClick={() => setActiveHook('useContext')}
                className={`glass-card h-full p-10 flex flex-col items-center justify-center gap-6 border-dashed border-2 transition-all cursor-pointer ${theme === 'dark' ? 'border-slate-800/50 hover:bg-white/5' : 'border-slate-300 hover:bg-slate-200'}`}
              >
                 <div className="w-16 h-16 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                 </div>
                 <p className="text-xs uppercase tracking-[0.2em] font-black text-slate-500 text-center">
                    Explore More Hooks
                 </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <footer className="w-full pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(22,163,74,0.5)]"></div>
             Operational Studio
          </div>
          <div className="flex gap-12 font-sans tracking-widest leading-loose">
            <span className="hover:text-primary-400 transition-all">React 19.x</span>
            <span className="hover:text-primary-400 transition-all">Vite v8.x</span>
            <span className="hover:text-primary-400 transition-all">Tailwind 4.x</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App = () => (
  <AppProvider>
    <Content />
  </AppProvider>
);

export default App;
