// App.tsx
import React, { useState, useContext } from 'react';
import abner from './components/an.png';
import './switch.css';
import ingles from './components/inglaterra.png';
import brasil from './components/brasil.png';
import { ThemeContext } from './ThemeContext';
import './App.css';
import { Academico } from './components/Academico';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import { useLanguage } from './useLanguage';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeComponent, setActiveComponent] = useState<string>('Sobre');
  const { language, setLanguage } = useLanguage();

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Sobre':
        return <Sobre />;
      case 'Acadêmico':
        return <Academico />;
      case 'Projetos':
        return <Projetos />;
      default:
        return <Sobre />;
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setActiveComponent(section);
  };

  return (
    <div className={`app ${theme}`}>
      <header className="topbar-wrapper">
        <div className="topbar">
          <div className="brand-pill">
            <span className="brand-dot" aria-hidden="true">☁️</span>
            <span>Dr. Abner</span>
          </div>

          <nav className="menu" aria-label={language === 'en' ? 'Main navigation' : 'Navegação principal'}>
            <a
              href="#sobre"
              aria-current={activeComponent === 'Sobre' ? 'page' : undefined}
              onClick={(e) => handleNavClick(e, 'Sobre')}
            >
              {language === 'en' ? 'About' : 'Sobre'}
            </a>
            <a
              href="#projetos"
              aria-current={activeComponent === 'Projetos' ? 'page' : undefined}
              onClick={(e) => handleNavClick(e, 'Projetos')}
            >
              {language === 'en' ? 'Projects' : 'Projetos'}
            </a>
            <a
              href="#academico"
              aria-current={activeComponent === 'Acadêmico' ? 'page' : undefined}
              onClick={(e) => handleNavClick(e, 'Acadêmico')}
            >
              {language === 'en' ? 'Academic' : 'Acadêmico'}
            </a>
          </nav>

          <div className="topbar-controls">
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
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch language to English"
                aria-pressed={language === 'en'}
              >
                <img src={ingles} alt="English" />
              </button>
              <button
                type="button"
                className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('pt')}
                aria-label="Mudar idioma para Português"
                aria-pressed={language === 'pt'}
              >
                <img src={brasil} alt="Português" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero-card">
          <div className="hero-avatar-wrap">
            <img
              className="imageabner"
              src={abner}
              alt="Dr. Anderson Abner de Santana Souza"
              decoding="async"
            />
          </div>
          <div className="hero-info">
            <span className="hero-badge">
              {language === 'en' ? 'Academic Portfolio • UERN' : 'Portfólio Acadêmico • UERN'}
            </span>
            <h2>Dr. Anderson Abner de Santana Souza</h2>
            <p className="hero-role">
              {language === 'en' ? 'Computer Science Professor | UERN' : 'Professor de Ciência da Computação | UERN'}
            </p>
            <div className="hero-tags">
              <span>🤖 {language === 'en' ? 'Mobile Robotics' : 'Robótica Móvel'}</span>
              <span>👁️ {language === 'en' ? 'Computer Vision' : 'Visão Computacional'}</span>
              <span>✨ {language === 'en' ? 'AI & Embedded Systems' : 'IA & Sistemas Embarcados'}</span>
            </div>
          </div>
        </section>

        <section className="content">{renderComponent()}</section>
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
