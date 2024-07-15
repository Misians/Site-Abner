import React from 'react';
import { useLanguage } from '../LanguageContext';
import laboratorio from './assets/IMG_1991.jpg'
import abner from './assets/IMG_2036.jpg'
const Projetos: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className='pjt-img'>
      <h3>{language === 'en' ? 'Projects' : 'Projetos'}</h3>
      
      
      <div className="divproj">
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Training Special Education Professionals in a Collaborative Perspective' : 'Formação de Profissionais da Educação Especial em uma Perspectiva Colaborativa'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'To qualify and train education professionals, in a collaborative manner, in the context of Special Education, to work in schools, specialized support centers, and other places that offer support to Special Education students (students with disabilities and/or autism spectrum disorder, high abilities, or giftedness). Status: In progress; Nature: Research.'
              : 'Qualificar e capacitar profissionais da educação, de forma colaborativa, no contexto da Educação Especial, para atuar nas escolas, em centros de apoio especializados e demais locais que ofereçam apoio aos estudantes público da Educação Especial (alunos com deficiência e/ou transtorno do espectro autista, altas habilidades ou superdotação). Situação: Em andamento; Natureza: Pesquisa.'}
          </p>
        </div>
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Development and Validation of an Accessible Educational Robotic Framework to Assist in the English Language Teaching and Learning Process for Children' : 'Desenvolvimento e Validação de um Framework Robótico Educacional Acessível para Auxiliar no Processo de Ensino Aprendizagem de Inglês para Crianças'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'This project proposes the use of Educational Robotics (ER) integrated into the English language teaching-learning process for children, functioning as a playful tool for motivation and dynamic classes. To this end, it is intended to develop (or adapt) a low-cost robotic kit combined with a pedagogical didactic guide, which will provide orientation information for the teacher and suggestions for didactic activities. These elements will apply principles of Educational Robotics to foster the development of students\' oral and linguistic knowledge, as well as evaluate the impact that the integration of this technology may have on English language teaching.'
              : 'Este projeto propõe a utilização da Robótica Educacional (RE) integrada ao processo de ensino-aprendizagem da língua inglesa para crianças, funcionando como ferramenta lúdica de motivação e de dinamização de aulas. Para isso, pretende-se desenvolver (ou adaptar) um kit robótico de baixo custo aliado a um guia didático pedagógico, que trará informações de orientação para o professor e sugestões de atividades didáticas. Esses elementos aplicarão princípios da Robótica Educacional para fomentar o desenvolvimento da oralidade e conhecimentos linguísticos dos alunos, bem como avaliar a repercussão que possa trazer a integração dessa tecnologia para o ensino da língua inglesa.'}
          </p>
        </div>
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Development of a Low-Cost Educational Robotic Kit to Assist in the Teaching and Learning Process for Children and Adolescents' : 'Desenvolvimento de um Kit Robótico Educacional de Baixo Custo para Auxiliar no Processo de Ensino Aprendizagem de Crianças e Adolescentes'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'This project aims to develop a low-cost Educational Robotic Kit, which can be used to assist in the teaching of different subjects to children, youth, and adolescents. The proposed kit should promote all the advantages of ER, already demonstrated in several published studies, in addition to meeting the demands of reduced cost and ease of use by educators and students. Thus, we aim to make Robotics and its educational applications more popular and demystify its use, with an easy-to-handle kit. We will base our work on CellBots, robots that use smartphones in their composition, already worked on in previous PIBIC projects.'
              : 'Este projeto visa o desenvolvimento de um Kit Robótico Educacional de baixo custo, que possa ser utilizado para auxiliar o ensino de diferentes disciplinas para crianças, jovens e adolescentes. O kit proposto deverá promover todas as vantagens da RE, já demonstrada em vários estudos publicados, além de buscar atender as demandas de custo reduzido e facilidade de uso por parte dos educadores e estudantes. Dessa forma, buscaremos tornar a Robótica e suas aplicações educacionais mais populares e desmistificar o seu uso, com um kit fácil de ser manuseado. Teremos como base os CellBots, robôs que utilizam smartphones em sua composição, já trabalhados em projetos PIBIC anteriores.'}
          </p>
        </div>
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Development of Computer Vision Tools to Assist the Visually Impaired' : 'Desenvolvimento de Ferramentas de Visão Computacional para Auxílio de Deficientes Visuais'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'One of the main challenges for visually impaired people is dealing with unexpected obstacles and inaccessible environments. This project aims to develop computer vision techniques to help these people move safely in different environments by identifying obstacles and providing auditory alerts. We will use smartphone sensors (cameras, accelerometers, gyroscopes, and GPS) to create an intelligent navigation system based on visual information. Other devices, such as Microsoft Kinect, will also be tested. We will study and adapt computer vision algorithms, sensor fusion, object visual recognition, visual environment mapping, and VSLAM, commonly used in autonomous vehicles. The goal is to provide a tool that audibly describes the spaces to the user, aiding in their safe locomotion.'
              : 'Um dos principais desafios para pessoas com deficiência visual é lidar com obstáculos inesperados e ambientes inacessíveis. Este projeto visa desenvolver técnicas de visão computacional para ajudar essas pessoas a se locomoverem de forma segura em diferentes ambientes, identificando obstáculos e fornecendo alertas sonoros. Utilizaremos sensores de smartphones (câmeras, acelerômetros, giroscópios e GPS) para criar um sistema de condução inteligente baseado em informações visuais. Outros dispositivos, como o Microsoft Kinect, também serão testados. Estudaremos e adaptaremos algoritmos de visão computacional, fusão sensorial, reconhecimento visual de objetos, mapeamento visual de ambientes e VSLAM, geralmente usados em veículos autônomos. O objetivo é fornecer uma ferramenta que descreva sonoramente os espaços ao usuário, auxiliando na sua locomoção segura.'}
          </p>
        </div>
        <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Numerical Solution of Inverse Eigenvalue Problems with Applications in Engineering' : 'Resolução Numérica de Problemas Inversos de Autovalores com Aplicações em Engenharia'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'The inverse eigenvalue problem is a diverse area full of research interests and activities. Among current developments, the quadratic inverse eigenvalue problem (QIEP) is particularly important and challenging with many open questions. The main emphasis of this proposed research is to consider a critical constraint that appears in practice: in a large and complex physical system it is generally impossible to obtain information on its complete spectrum of distribution. Additionally, values related to high-frequency terms in a finite element model are usually susceptible to errors due to the finite bandwidth of measurement equipment. Spectral information, therefore, cannot and should not be used to its full extent. For these reasons, it is advisable to consider the inverse eigenvalue problem when only part of the data is available. The mathematical basis and the development of tools to solve related problems will be developed during this project, together with the visiting researchers team and involved students and professors from UFRN.'
              : 'O problema de inversão de autovalores traz consigo uma área diversa, cheia de interesses de pesquisas e atividades. Entre os desenvolvimentos correntes, o problema inverso quadrático de autovalores QIEP é particularmente mais importante e desafiador com várias questões ainda em aberto. A ênfase principal desta pesquisa proposta é levar em consideração uma restrição crítica que aparece na prática: em um sistema físico grande e complexo é geralmente impossível obter informação no seu espectro de distribuição completo. Além disso, valores relacionados com termos de altas frequências num modelo de elementos finitos são geralmente suscetíveis a erros devido à largura de faixa finita dos equipamentos de medida. A informação espectral, então, não pode nem deve ser usada em toda sua extensão. Por essas razões, é recomendável considerar o problema inverso de autovalores quando apenas uma parte dos dados está estabelecida. A base matemática e desenvolvimento de ferramentas que propiciem a resolução de problemas relacionados serão desenvolvidos durante a vigência do presente projeto, em conjunto com a equipe do pesquisador visitante e dos alunos e professores envolvidos, da UFRN.'
            }</p>
        </div>
        {/* <div className="projetos">
          <div className="ano2">
            <h5>{language === 'en' ? 'Development of Autonomous Navigation System for a Team of CellBots' : 'Desenvolvimento Sistema de Navegação Autônoma para um Time de CellBots'}</h5>
          </div>
          <p>
            {language === 'en'
              ? 'High School. Federal Center for Technological Education of Rio Grande do Norte, CEFET-RN, Brazil.'
              : 'Ensino Médio (2º grau). Centro Federal de Educação Tecnológica do Rio Grande do Norte, CEFET-RN, Brasil.'}
          </p>
        </div> */}
      </div>
      {/* <div className="images">
        <img src={laboratorio} alt="" />
        <img src={abner} alt="" />

      </div> */}
    </div>
  );
}

export default Projetos;
