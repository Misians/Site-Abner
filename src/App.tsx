import React, { useState, useContext } from 'react';
import abner from './abner.gif';
import './switch.css';
import { ThemeContext } from './ThemeContext';
import './App.css';
import { Academico } from './components/Academico';
import Interesses from './components/Interesses';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
</style>
const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeComponent, setActiveComponent] = useState<string>('Sobre');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Sobre':
        return <Sobre/>;
      case 'Acadêmico':
        return <Academico />;
      case 'Interesses':
        return <Interesses />;
      case 'Contato':
        return <Contato />;
      default:
        return <Academico />;
    }
  };

  return (
    <div className={`app ${theme}`}>
      <div className="corpo">
        <div className="menu">
          <a href="#" onClick={() => setActiveComponent('Sobre')}>Sobre</a>
          <a href="#" onClick={() => setActiveComponent('Acadêmico')}>Acadêmico</a>
          <a href="#" onClick={() => setActiveComponent('Interesses')}>Áreas de pesquisa</a>
          <a href="#" onClick={() => setActiveComponent('Contato')}>Contato</a>
          <label className="switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="infos">
          <img width={180} src={abner} alt="" />
          <div className="info-abner">
            
            <div className="block">
              <div className="nome">
                <h2>Dr. Anderson Abner de Santana Souza</h2>
                <p>Professor de Ciência da computação</p>
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
