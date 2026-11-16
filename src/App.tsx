// App.tsx
import React, { useContext } from 'react';
import abner from './components/an.png';
import './switch.css';
import ingles from './components/inglaterra.png';
import brasil from './components/brasil.png';
import { ThemeContext } from './ThemeContext';
import './App.css';
import { Academico } from './components/Academico';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import RobotMascot from './components/RobotMascot';
import { useLanguage } from './useLanguage';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`app ${theme}`}>
      <header className="minimal-header">
        <div className="minimal-header-inner">
          <a href="#top" className="brand-mark">
            <span className="telemetry-dot" aria-hidden="true" />
            <span>Dr. Abner • UERN</span>
          </a>

          <div className="header-controls">
            <nav className="inline-anchors" aria-label={language === 'en' ? 'Page sections' : 'Seções da página'}>
              <a href="#sobre">{language === 'en' ? 'About' : 'Sobre'}</a>
              <a href="#publicacoes">{language === 'en' ? 'Publications' : 'Publicações'}</a>
              <a href="#projetos">{language === 'en' ? 'Projects' : 'Projetos'}</a>
              <a href="#academico">{language === 'en' ? 'Academic' : 'Acadêmico'}</a>
            </nav>

            <div className="controls-divider" aria-hidden="true" />

            <label className="switch">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label={language === 'en' ? 'Toggle dark mode' : 'Alternar modo escuro'}
              />
              <span className="slider round"></span>
            </label>

            <div className="language-switch">
              <button
                type="button"
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="Switch language to English"
                aria-pressed={language === 'en'}
              >
                <img src={ingles} alt="English" />
              </button>
              <button
                type="button"
                className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
                onClick={() => setLanguage('pt')}
                aria-label="Mudar idioma para Português"
                aria-pressed={language === 'pt'}
              >
                <img src={brasil} alt="Português" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="single-page-shell">
        <section className="open-hero">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span>{language === 'en' ? 'Computer Science Professor • UERN' : 'Professor de Ciência da Computação • UERN'}</span>
            </div>
            <h1>Dr. Anderson Abner de Santana Souza</h1>
            <p className="hero-lead">
              {language === 'en'
                ? 'Researching Mobile Robotics, Computer Vision, Stochastic Filtering, Embedded Systems & Artificial Intelligence.'
                : 'Pesquisando Robótica Móvel, Visão Computacional, Filtragem Estocástica, Sistemas Embarcados & Inteligência Artificial.'}
            </p>
            <div className="hero-inline-meta">
              <span>🤖 {language === 'en' ? 'LAR Robotics Lab' : 'Laboratório LAR'}</span>
              <span aria-hidden="true">·</span>
              <span>🎓 Ph.D. UFRN</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="imageabner"
              src={abner}
              alt="Dr. Anderson Abner de Santana Souza"
              decoding="async"
            />
            <div className="hero-mascot-float">
              <RobotMascot />
            </div>
          </div>
        </section>

        <Sobre />
        <Projetos />
        <Academico />
      </main>

      <footer className="footer">
        <p>
          Desenvolvido por <a href="https://github.com/Misians">Artemísia K. 👩‍💻</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
