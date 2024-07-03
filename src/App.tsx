import React, { useState, useContext } from 'react';
import abner from './abner.gif';
import './switch.css';
import { ThemeContext } from './ThemeContext';
import './App.css';
import { Academico } from './components/Academico';
import Interesses from './components/Interesses';
import Contato from './components/Contato';

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeComponent, setActiveComponent] = useState<string>('Sobre');

  const renderComponent = () => {
    switch (activeComponent) {
      
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
          <a href="#" onClick={() => setActiveComponent('Interesses')}>Interesses/Áreas de pesquisa</a>
          <a href="#" onClick={() => setActiveComponent('Contato')}>Contato</a>
          <label className="switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="infos">
          <div className="info-abner">
            <img width={180} src={abner} alt="" />
            <div className="block">
              <h3>Dr. Anderson Abner de Santana Souza</h3>
              <p>Professor de Ciência da computação</p>
            </div>     
            <p>Doutorado em Engenharia da Computação pela Universidade Federal do Rio Grande do Norte UFRN, Natal RN Brasil (2012), Mestrado em Engenharia Elétrica pela Universidade Federal do Rio Grande do Norte UFRN, Natal RN Brasil (2008), Graduação em Engenharia de Computação pela Universidade Federal do Rio Grande do Norte UFRN, Natal RN Brasil (2005). Atualmente é Professor Adjunto do Departamento de Computação da Universidade do Estado do Rio Grande do Norte, Campus Natal. Atua principalmente nos seguintes temas: robótica móvel, visão computacional, filtragem estocástica, sistemas embarcados e inteligência artificial.</p>
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
