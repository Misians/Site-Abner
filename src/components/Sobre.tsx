import React from 'react';

import { useLanguage } from '../LanguageContext';

const Sobre: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div>
      {/* <h3>{language === 'en' ? 'About' : 'Sobre'}</h3> */}

      <div className="contato">
        <div className="esq">
          <a href="mailto:andersonabner@uern.br">Email: andersonabner@uern.br</a>
        </div>
        <div className="dir">
          
          <a href="https://portal.uern.br/">{language === 'en' ? 'Member of ': 'Membro da'}{language === 'en' ? 'State University Of Rio Grande do Norte' : 'Universidade do Estado do Rio Grande do Norte'}</a>
          <p>Lattes: <a href="http://lattes.cnpq.br/2563070123322776">ID 2563070123322776</a></p>
        </div>
      </div>
      <p className='text-abner'>
        {language === 'en' ? (
          'Ph.D. in Computer Engineering from the Federal University of Rio Grande do Norte (UFRN), Natal RN Brazil (2012), Master\'s in Electrical Engineering from the Federal University of Rio Grande do Norte (UFRN), Natal RN Brazil (2008), Bachelor\'s in Computer Engineering from the Federal University of Rio Grande do Norte (UFRN), Natal RN Brazil (2005). Currently an Adjunct Professor in the Department of Computing at the State University of Rio Grande do Norte, Natal Campus. Mainly works in the following areas: mobile robotics, computer vision, stochastic filtering, embedded systems, and artificial intelligence.'
        ) : (
          'Doutorado em Engenharia da Computação pela Universidade Federal do Rio Grande do Norte (UFRN), Natal RN Brasil (2012), Mestrado em Engenharia Elétrica pela Universidade Federal do Rio Grande do Norte (UFRN), Natal RN Brasil (2008), Graduação em Engenharia de Computação pela Universidade Federal do Rio Grande do Norte (UFRN), Natal RN Brasil (2005). Atualmente é Professor Adjunto do Departamento de Computação da Universidade do Estado do Rio Grande do Norte, Campus Natal. Atua principalmente nos seguintes temas: robótica móvel, visão computacional, filtragem estocástica, sistemas embarcados e inteligência artificial.'
        )}
      </p>

      <h3>{language === 'en' ? 'My hobbies include:' : 'Meus hobbies incluem:'}</h3>

      {/* <Card 
        title={language === 'en' ? 'Fishing' : 'Pescaria'}
        image={abner2}
        description={language === 'en' ? 'Fishing is a great way to ...' : 'Pescaria é uma ótima forma de ...'}
      /> */}
    </div>
  );
}

export default Sobre;
