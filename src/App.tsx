// App.tsx
import React, { useState, useContext } from 'react';
import abner from './abner.gif';
import './switch.css';
import ingles from './components/inglaterra.png';
import brasil from './components/brasil.png';
import { ThemeContext } from './ThemeContext';
import './App.css';
import { Academico } from './components/Academico';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import { useLanguage } from './LanguageContext';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
</style>

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

  return (
    <div className={`app ${theme}`}>
      <div className="corpo">
        <div className="menu">
          <a href="#" onClick={() => setActiveComponent('Sobre')}>
            {language === 'en' ? 'About' : 'Sobre'}
          </a>
          <a href="#" onClick={() => setActiveComponent('Projetos')}>
            {language === 'en' ? 'Projects' : 'Projetos'}
          </a>
          <a href="#" onClick={() => setActiveComponent('Acadêmico')}>
            {language === 'en' ? 'Academic' : 'Acadêmico'}
          </a>
          <a href="#" onClick={() => setActiveComponent('Interesses')}>
            {language === 'en' ? 'Research Areas' : 'Áreas de Pesquisa'}
          </a>
          <a href="#" onClick={() => setActiveComponent('Contato')}>
            {language === 'en' ? 'Publicações' : 'Publicações'}
          </a>
          <label className="switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
          <div className="language-switch">
            <img src={ingles} alt="English" onClick={() => handleLanguageChange('en')} />
            <img src={brasil} alt="Português" onClick={() => handleLanguageChange('pt')} />
          </div>
        </div>
        <div className="infos">
          <img width={180} src={abner} alt="" />
          <div className="info-abner">
            <div className="block">
              <div className="nome">
                <h2>{language === 'en' ? 'Dr. Anderson Abner de Santana Souza' : 'Dr. Anderson Abner de Santana Souza'}</h2>
                <p>{language === 'en' ? 'Computer Science Professor' : 'Professor de Ciência da Computação'}</p>
              </div>
            </div>
          </div>
          <div className="content">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
