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
      <div className="corpo">
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
              className="lang-btn"
              onClick={() => handleLanguageChange('en')}
              aria-label="Switch language to English"
              aria-pressed={language === 'en'}
            >
              <img src={ingles} alt="English" />
            </button>
            <button
              type="button"
              className="lang-btn"
              onClick={() => handleLanguageChange('pt')}
              aria-label="Mudar idioma para Português"
              aria-pressed={language === 'pt'}
            >
              <img src={brasil} alt="Português" />
            </button>
          </div>
        </nav>
        <div className="infos">
          <img className='imageabner' src={abner} alt="Dr. Anderson Abner de Santana Souza" decoding="async" />
          <div className="info-abner">
            <div className="block">
              <div className="nome">
                <h2>{language === 'en' ? 'Dr. Anderson Abner de Santana Souza' : 'Dr. Anderson Abner de Santana Souza'}</h2>
                <p>{language === 'en' ? 'Computer Science Professor | UERN' : 'Professor de Ciência da Computação | UERN'}</p>
              </div>
            </div>
          </div>
          <div className="content">
            {renderComponent()}
          </div>
        </div>
      </div>
      <div className="footer">
              <p>Desenvolvido por <a href="https://github.com/Misians">Artemísia K. 👩‍💻</a> </p>

      </div>
    </div>
    
  );
};

export default App;
