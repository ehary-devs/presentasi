import { useState, useEffect, useRef } from 'react';
import Slide01 from './slides/Slide01';
import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import SlideUsecase from './slides/SlideUsecase';
import SlideDFD0 from './slides/SlideDFD0';
import SlideDFD1 from './slides/SlideDFD1';
import SlideERD from './slides/SlideERD';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import Slide17 from './slides/Slide17';
import Slide18 from './slides/Slide18';
import Slide19 from './slides/Slide19';
import Slide20 from './slides/Slide20';
import SlideUIWebUser from './slides/SlideUIWebUser';
import SlideUIWebAdmin from './slides/SlideUIWebAdmin';
import SlideUIMobile from './slides/SlideUIMobile';

const allSlides = [
  { component: Slide01, hidden: false },
  { component: Slide02, hidden: true },
  { component: Slide03, hidden: false },
  { component: Slide04, hidden: false },
  { component: Slide05, hidden: false },
  { component: Slide06, hidden: false },
  { component: Slide07, hidden: true },
  { component: Slide08, hidden: false },
  { component: Slide09, hidden: false },
  { component: Slide10, hidden: false },
  { component: Slide11, hidden: false },
  { component: SlideUsecase, hidden: false },
  { component: SlideDFD0, hidden: false },
  { component: SlideDFD1, hidden: false },
  { component: SlideERD, hidden: false },
  { component: Slide12, hidden: false },
  { component: SlideUIWebUser, hidden: false },
  { component: SlideUIWebAdmin, hidden: false },
  { component: SlideUIMobile, hidden: false },
  { component: Slide13, hidden: false },
  { component: Slide14, hidden: false },
  { component: Slide15, hidden: false },
  { component: Slide16, hidden: false },
  { component: Slide17, hidden: false },
  { component: Slide18, hidden: false },
  { component: Slide19, hidden: false },
  { component: Slide20, hidden: false }
];

const slides = allSlides.filter(s => !s.hidden).map(s => s.component);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const deckRef = useRef(null);

  const totalSlides = slides.length;

  const show = (n) => {
    setCurrentSlide(Math.max(0, Math.min(totalSlides - 1, n)));
  };

  const next = () => show(currentSlide + 1);
  const prev = () => show(currentSlide - 1);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const k = e.key;
      if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter') {
        e.preventDefault();
        setCurrentSlide(curr => Math.min(totalSlides - 1, curr + 1));
      } else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') {
        e.preventDefault();
        setCurrentSlide(curr => Math.max(0, curr - 1));
      } else if (k === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (k === 'End') {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    if (deckRef.current) deckRef.current.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [totalSlides]);

  const handleDeckClick = (e) => {
    if (!deckRef.current) return;
    const r = deckRef.current.getBoundingClientRect();
    if (e.clientX - r.left < r.width * 0.3) {
      prev();
    } else {
      next();
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
    if (deckRef.current) deckRef.current.focus();
  };

  const fillWidth = (currentSlide / (totalSlides - 1)) * 100;

  return (
    <>
      <div id="deck" tabIndex="0" ref={deckRef} onClick={handleDeckClick}>
        {currentSlide !== 0 && currentSlide !== totalSlides - 1 && (
          <div style={{ position: 'absolute', top: '2.5em', right: '3.2em', zIndex: 100, pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: '1em' }}>
            <div style={{ fontSize: '0.7em', color: 'rgba(231, 234, 229, 0.75)', textAlign: 'right' }}>
              Program Studi S1 Teknik Informatika · Fakultas Teknik dan Ilmu Komputer<br/>
              Universitas Muhammadiyah Semarang · 2026
            </div>
            <img 
              src="/logo.png" 
              alt="Logo" 
              style={{ 
                width: '3em', 
                opacity: 0.75,
                filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.5)) drop-shadow(0 0 2px rgba(255,255,255,0.3))'
              }} 
            />
          </div>
        )}
        {slides.map((SlideComponent, index) => (
          <div key={index} style={{ display: index === currentSlide ? 'contents' : 'none' }}>
            <SlideComponent />
          </div>
        ))}
      </div>

      <div id="bar">
        <button id="prev" aria-label="Slide sebelumnya" onClick={(e) => { e.stopPropagation(); prev(); }}>← Sebelumnya</button>
        <button id="next" aria-label="Slide berikutnya" onClick={(e) => { e.stopPropagation(); next(); }}>Berikutnya →</button>
        <div id="track">
          <div id="fill" style={{ width: `${fillWidth}%` }}></div>
        </div>
        <div id="count">{currentSlide + 1} / {totalSlides}</div>
        <button id="fs" onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}>
          {isFullscreen ? 'Tutup layar penuh' : 'Layar penuh'}
        </button>
        <div id="hint">Panah kiri/kanan · spasi</div>
      </div>
    </>
  );
}
