import React from 'react';
import Card from './Card';
import abner2 from './abner2.jfif';
import { useLanguage } from '../LanguageContext';

const Sobre: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h3>{language === 'en' ? 'About' : 'Sobre'}</h3>

      <p className='text-abner'>
        {language === 'en' ? (
          'Ph.D. in Computer Engineering from the Federal University of Rio Grande do Norte (UFRN), Natal RN Brazil (2012), Master\'s in Electrical Engineering from the Federal University of Rio Grande do Norte (UFRN), Natal RN Brazil (2008), Bachelor\'s in Computer Engineering from the Federal University of Rio Grande do Norte (UFRN), Natal RN Brazil (2005). Currently an Adjunct Professor in the Department of Computing at the State University of Rio Grande do Norte, Natal Campus. Mainly works in the following areas: mobile robotics, computer vision, stochastic filtering, embedded systems, and artificial intelligence.'
        ) : (
          'Doutorado em Engenharia da Computação pela Universidade Federal do Rio Grande do Norte (UFRN), Natal RN Brasil (2012), Mestrado em Engenharia Elétrica pela Universidade Federal do Rio Grande do Norte (UFRN), Natal RN Brasil (2008), Graduação em Engenharia de Computação pela Universidade Federal do Rio Grande do Norte (UFRN), Natal RN Brasil (2005). Atualmente é Professor Adjunto do Departamento de Computação da Universidade do Estado do Rio Grande do Norte, Campus Natal. Atua principalmente nos seguintes temas: robótica móvel, visão computacional, filtragem estocástica, sistemas embarcados e inteligência artificial.'
        )}
      </p>
      <h3>{language === 'en' ? 'Interesses ' : 'Publicações e participações:'}</h3>
      <div className="interesses">
          
          <h4>ROBÓTICA EDUCACIONAL</h4>
          <h4>SISTEMAS EMBARCADOS</h4>
          <h4>ROBÓTICA MÓVEL</h4>
          <h4>VISÃO COMPUTACIONAL</h4>
        </div>

      <h3>{language === 'en' ? 'Publications and participations:' : 'Publicações e participações:'}</h3>

      <div className="divproj">
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Increasing Students Interest With Low-Cost CellBots' : 'Aumentando o interesse dos alunos com CellBots de baixo custo'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'The article presents CellBot, a flexible and affordable educational robot used for practical experimentation in technological subjects. It is controlled by the students cell phones, avoiding the need for microcontrollers. A survey of 204 students showed that 83% prefer these robots to improve learning and 71% would like to have their own robot instead of borrowed kits.'
              : 'O artigo apresenta o CellBot, um robô educacional flexível e acessível, usado para experimentação prática em disciplinas tecnológicas. Ele é controlado pelo celular dos alunos, evitando a necessidade de microcontroladores. A pesquisa com 204 estudantes mostrou que 83% preferem esses robôs para melhorar o aprendizado e 71% gostariam de ter seu próprio robô em vez de kits emprestados.'}
          </p>
        </div>


        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Occupancy-elevation grid: an alternative approach for robotic mapping and navigation' : 'Grade de ocupação-elevação: uma abordagem alternativa para mapeamento e navegação robótica'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'This paper presents a 3D mapping method for robotic navigation using the Occupancy-Elevation Grid (OEG) technique. Each cell on the map indicates occupancy probability, terrain height and variance, allowing robots to determine whether a location is clear and the height of obstacles. Using laser and stereo data, the generated maps support autonomous navigation, exploration and trajectory planning. Experiments confirm the effectiveness of the approach.'
              : 'Este artigo apresenta um método de mapeamento 3D para navegação robótica usando a técnica Occupancy-Elevation Grid (OEG). Cada célula do mapa indica a probabilidade de ocupação, altura do terreno e variância, permitindo que robôs determinem se um local está livre e a altura de obstáculos. Usando dados de laser e estéreo, os mapas gerados suportam navegação autônoma, exploração e planejamento de trajetória. Experimentos confirmam a eficácia da abordagem.'}
          </p>
        </div>

        
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'A Validation Study of the Human Perception ofVirtual Characters’ Features' : 'Um estudo de validação da percepção humana das características dos personagens virtuais'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'This article describes a quantitative study on validating the appearance of virtual characters in interactive narrative games. Players evaluated the temperament, clothing and behavior of 40 characters. Results indicate that player characteristics, such as gender and age, influence the perception of characters. Visual differences, such as being well or poorly dressed, are more noticeable than behavioral differences, such as being honest or dishonest.'
              : 'Este artigo descreve um estudo quantitativo sobre a validação da aparência de personagens virtuais em jogos narrativos interativos. Os jogadores avaliaram temperamento, roupas e comportamento de 40 personagens. Resultados indicam que características dos jogadores, como sexo e idade, influenciam a percepção dos personagens. Diferenças visuais, como estar bem ou mal vestido, são mais percebidas do que diferenças comportamentais, como ser honesto ou desonesto.'}
          </p>
        </div>
        </div>
    </div>
  );
}

export default Sobre;
