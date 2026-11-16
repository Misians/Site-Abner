import React, { useState } from 'react';
import { useLanguage } from '../useLanguage';

/** Interactive sky-blue robot mascot that shares Dr. Abner's robotics highlights on click. */
const RobotMascot: React.FC = () => {
  const { language } = useLanguage();
  const [tipIndex, setTipIndex] = useState(0);
  const [bouncing, setBouncing] = useState(false);

  const tipsPt = [
    'Oi! Clique em mim para explorar a robótica do LAR! 🤖',
    'CellBots: robôs educativos de baixo custo controlados por celular! 📱',
    'OEG: mapeamento 3D para navegação autônoma de robôs! 🗺️',
    'Visão Computacional & VSLAM ajudando na acessibilidade! 👁️',
  ];

  const tipsEn = [
    'Hi! Click me to explore LAR robotics! 🤖',
    'CellBots: low-cost educational robots controlled by smartphone! 📱',
    'OEG: 3D mapping for autonomous robot navigation! 🗺️',
    'Computer Vision & VSLAM aiding visual accessibility! 👁️',
  ];

  const tips = language === 'en' ? tipsEn : tipsPt;

  const handleClick = () => {
    setBouncing(true);
    setTipIndex((prev) => (prev + 1) % tips.length);
    setTimeout(() => setBouncing(false), 450);
  };

  return (
    <div className="robot-mascot-wrap">
      <div className="robot-bubble" role="status" aria-live="polite">
        {tips[tipIndex]}
      </div>
      <button
        type="button"
        className={`robot-mascot-btn ${bouncing ? 'is-bouncing' : ''}`}
        onClick={handleClick}
        aria-label={
          language === 'en'
            ? 'Interactive robotics mascot. Click for a robotics fact.'
            : 'Mascote interativo de robótica. Clique para ver uma curiosidade.'
        }
      >
        <svg
          width="88"
          height="92"
          viewBox="0 0 88 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Antenna */}
          <line x1="44" y1="10" x2="44" y2="22" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="44" cy="8" r="5" fill="#7dd3fc" className="robot-antenna-glow" />
          {/* Ears */}
          <rect x="8" y="36" width="8" height="18" rx="4" fill="#7dd3fc" />
          <rect x="72" y="36" width="8" height="18" rx="4" fill="#7dd3fc" />
          {/* Head */}
          <rect x="15" y="22" width="58" height="44" rx="18" fill="#ffffff" stroke="#7dd3fc" strokeWidth="3" />
          {/* Visor */}
          <rect x="23" y="31" width="42" height="22" rx="10" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="35" cy="42" r="4.5" fill="#0284c7" className="robot-eye" />
          <circle cx="53" cy="42" r="4.5" fill="#0284c7" className="robot-eye" />
          <circle cx="36.5" cy="40.5" r="1.4" fill="#ffffff" />
          <circle cx="54.5" cy="40.5" r="1.4" fill="#ffffff" />
          {/* Cute Cheeks */}
          <circle cx="28" cy="47" r="2.8" fill="#bae6fd" />
          <circle cx="60" cy="47" r="2.8" fill="#bae6fd" />
          {/* Smile */}
          <path d="M39 48C41.5 50.5 46.5 50.5 49 48" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" />
          {/* Neck & Body */}
          <rect x="38" y="66" width="12" height="5" rx="2.5" fill="#bae6fd" />
          <rect x="24" y="70" width="40" height="18" rx="9" fill="#ffffff" stroke="#7dd3fc" strokeWidth="3" />
          <circle cx="44" cy="79" r="4" fill="#38bdf8" className="robot-antenna-glow" />
        </svg>
      </button>
    </div>
  );
};

export default RobotMascot;
