import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Academico: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className='info-acad'>
      <h3>{language === 'en' ? 'Academic Background/Qualifications' : 'Formação acadêmica/titulação'}</h3>
      
      <div className="formacao">
        <div className="ano"><h5>2008 - 2012</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Ph.D. in Electrical Engineering.' : 'Doutorado em Engenharia Elétrica.'}
          <br />
          {language === 'en' ? 'Federal University of Rio Grande do Norte, UFRN, Brazil.' : 'Universidade Federal do Rio Grande do Norte, UFRN, Brasil.'}
          <br />
          {language === 'en' ? 'Title: 2.5-D Robotic Mapping with Elevation-Occupation Grid Representation, Year of Completion: 2012.' : 'Título: Mapeamento Robótico 2,5-D com Representação em Grade de Ocupação-Elevação, Ano de obtenção: 2012.'}
          <br />
          {language === 'en' ? 'Advisor: Luiz Marcos Garcia Gonçalves.' : 'Orientador: Luiz Marcos Garcia Gonçalves.'}
          <br />
          {language === 'en' ? 'Scholarship: National Council for Scientific and Technological Development, CNPq, Brazil.' : 'Bolsista do(a): Conselho Nacional de Desenvolvimento Científico e Tecnológico, CNPq, Brasil.'}
          <br />
          {language === 'en' ? 'Major area: Others' : 'Grande área: Outros'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>2002 - 2008</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Master\'s in Electrical Engineering.' : 'Mestrado em Engenharia Elétrica.'}
          <br />
          {language === 'en' ? 'Federal University of Rio Grande do Norte, UFRN, Brazil.' : 'Universidade Federal do Rio Grande do Norte, UFRN, Brasil.'}
          <br />
          {language === 'en' ? 'Title: Sonar Mapping using Occupation Grid Based on Probabilistic Modeling, Year of Completion: 2008.' : 'Título: Mapeamento com Sonar usando grade de ocupação baseado em modelagem probabilística, Ano de Obtenção: 2008.'}
          <br />
          {language === 'en' ? 'Advisor: Luiz Marcos Garcia Gonçalves.' : 'Orientador: Luiz Marcos Garcia Gonçalves.'}
          <br />
          {language === 'en' ? 'Scholarship: Coordination for the Improvement of Higher Education Personnel, CAPES, Brazil.' : 'Bolsista do(a): Coordenação de Aperfeiçoamento de Pessoal de Nível Superior, CAPES, Brasil.'}
          <br />
          {language === 'en' ? 'Keywords: Odometry; Mapping; Occupation Grid; Probability.' : 'Palavras-chave: Odometria; Mapeamento; Grade de Ocupação; probabilidade.'}
          <br />
          {language === 'en' ? 'Major area: Others' : 'Grande área: Outros'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>2008 - 2012</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Ph.D. in Electrical Engineering.' : 'Doutorado em Engenharia Elétrica.'}
          <br />
          {language === 'en' ? 'Federal University of Rio Grande do Norte, UFRN, Brazil.' : 'Universidade Federal do Rio Grande do Norte, UFRN, Brasil.'}
          <br />
          {language === 'en' ? 'Title: 2.5-D Robotic Mapping with Elevation-Occupation Grid Representation, Year of Completion: 2012.' : 'Título: Mapeamento Robótico 2,5-D com Representação em Grade de Ocupação-Elevação, Ano de obtenção: 2012.'}
          <br />
          {language === 'en' ? 'Advisor: Luiz Marcos Garcia Gonçalves.' : 'Orientador: Luiz Marcos Garcia Gonçalves.'}
          <br />
          {language === 'en' ? 'Scholarship: National Council for Scientific and Technological Development, CNPq, Brazil.' : 'Bolsista do(a): Conselho Nacional de Desenvolvimento Científico e Tecnológico, CNPq, Brasil.'}
          <br />
          {language === 'en' ? 'Major area: Others' : 'Grande área: Outros'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>2001 - 2005</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Bachelor\'s in Computer Engineering.' : 'Graduação em Engenharia de Computação.'}
          <br />
          {language === 'en' ? 'Federal University of Rio Grande do Norte, UFRN, Brazil.' : 'Universidade Federal do Rio Grande do Norte, UFRN, Brasil.'}
          <br />
          {language === 'en' ? 'Title: Construction and Teleoperation of a Mobile Robotic Platform.' : 'Título: Construção e Teleoperação de uma Plataforma Robótica Móvel.'}
          <br />
          {language === 'en' ? 'Advisor: Luiz Marcos Garcia Gonçalves.' : 'Orientador: Luiz Marcos Garcia Gonçalves.'}
          <br />
          {language === 'en' ? 'Scholarship: National Council for Scientific and Technological Development, CNPq, Brazil.' : 'Bolsista do(a): Conselho Nacional de Desenvolvimento Científico e Tecnológico, CNPq, Brasil.'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>1996 - 2000</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'Technical/Professional Course in Electromechanics.' : 'Curso técnico/profissionalizante em Eletromecânica.'}
          <br />
          {language === 'en' ? 'Federal Center for Technological Education of Rio Grande do Norte, CEFET-RN, Brazil.' : 'Centro Federal de Educação Tecnológica do Rio Grande do Norte, CEFET-RN, Brasil.'}
        </p>
      </div>
      
      <div className="formacao">
        <div className="ano"><h5>1996 - 2000</h5></div>
        <h4>●</h4>
        <p>
          {language === 'en' ? 'High School (2nd degree).' : 'Ensino Médio (2º grau).'}
          <br />
          {language === 'en' ? 'Federal Center for Technological Education of Rio Grande do Norte, CEFET-RN, Brazil.' : 'Centro Federal de Educação Tecnológica do Rio Grande do Norte, CEFET-RN, Brasil.'}
        </p>
      </div>
    </div>
  );
}
