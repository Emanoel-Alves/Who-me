import bgImageIA from '../../assets/instituto-atlantico.jpg'
import bgImageGreat from '../../assets/great.png'
import bgImageFitBank from '../../assets/fitbank.webp'
import bgImageUFC from '../../assets/ufc.jpg'

import { Card } from "./Card";

const experienceCards = [
    {
        id: 0,
        companyName: 'Intituto Atlântico',
        bgImage: bgImageIA,
        responsibility: 'Desenvolvedor Full-Stack  [05/2022 - 03/2023]',
        stacks: '.NET, C#, Oracle, JavaScript, ReactJs, Azure Devops, PostGreSQL',
        summary: 'Atuação em projetos de desenvolvimento de API’s utilizando tecnologias como C#, JavaScript e TypeScript  O desenvolvimento era voltado tanto para a construção de novas API’s como na manutenção de antigas. Além disso, desenvolvia testes unitários para cada atividade'
    },
    {
        id: 1,
        companyName: 'FitBank Pagamentos Eletrônicos',
        bgImage: bgImageFitBank,
        responsibility: 'Desenvolvedor Full-Stack',
        stacks: '.NET, C#, Oracle, JavaScript, ReactJs, Azure Devops, PostGreSQL',
        summary: 'Trabalho com desenvolvimento de aplicações para o setor financeiro, construção e manutenção de microsserviços, manutenção e criação de novas APIs'
    },
    {
        id: 2,
        companyName: 'GREat UFC',
        bgImage: bgImageGreat,
        responsibility: 'Bolsista',
        stacks: 'Scala e Kafka',
        summary: 'Bolsista de desenvolvimento de software para a Secretaria de Segurança Pública, com foco no back end'
    },
    {
        id: 3,
        companyName: 'Universidade Federal do Ceará',
        bgImage: bgImageUFC,
        responsibility: 'Monitor acadêmico',
        stacks: 'Java',
        summary: ' Bolsista de monitoria através do Programa de Iniciação à Docência. Atuação em práticas de apoio às disciplinas de Programação Orientada a Objetos e Estrutura de Dados Avançada'
    },
    {
        id: 4,
        companyName: 'Universidade Federal do Ceará',
        bgImage: bgImageUFC,
        responsibility: 'Desenvolvedor de Testes Unitários',
        stacks: 'Java, Junit 5 e Spring Boot',
        summary: 'Bolsista de Iniciação Acadêmica, atuando no desenvolvimento de testes unitários no NPDS (Núcleo de Práticas e Desenvolvimento de Sistemas).'
    },
]

export function ExperienceCard(){
    return (
        <div className="container w-[50px] items-center flex justify-center grid grid-rows">
            {experienceCards.map(experienceItem => {
                return (
                    <div className='flex relative'>
                        <Card key={experienceItem.id} 
                            companyName={experienceItem.companyName} 
                            img={experienceItem.bgImage} 
                            responsibility={experienceItem.responsibility} 
                            stacks={experienceItem.stacks} 
                            summary={experienceItem.summary}/>
                    </div>
                )
            })}
        </div>
    )
}