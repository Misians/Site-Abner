import React from 'react'
import Card from './Card'
import abner2 from './abner2.jfif'
const Sobre = () => {
  return (
    <div>
            <h3>Sobre</h3>

      <p className='text-abner'>Doutorado em Engenharia da Computação pela Universidade Federal do Rio Grande do Norte UFRN, Natal RN Brasil (2012), Mestrado em Engenharia Elétrica pela Universidade Federal do Rio Grande do Norte UFRN, Natal RN Brasil (2008), Graduação em Engenharia de Computação pela Universidade Federal do Rio Grande do Norte UFRN, Natal RN Brasil (2005). Atualmente é Professor Adjunto do Departamento de Computação da Universidade do Estado do Rio Grande do Norte, Campus Natal. Atua principalmente nos seguintes temas: robótica móvel, visão computacional, filtragem estocástica, sistemas embarcados e inteligência artificial.</p>
      <h3>Meus hobbies incluem:</h3>
      <Card 
        title="Pescaria"
        image={abner2}
        description="Pescaria é uma ótima forma de ..."
      />
    </div>
    
  )
}

export default Sobre