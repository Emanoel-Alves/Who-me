import Image, { StaticImageData } from "next/image";
import bgImage from '../../assets/instituto-atlantico.jpeg'

interface CardCard {
    img: StaticImageData,
}

export function Card(){
    return (
        <>
            <div className="container flex justify-center mb-5">
                <div className="flex w-[70%] gap-20 justify-center rounded-lg ease-in-out duration-300  border-2 border-black hover:border-[#1070ff] hover:shadow-lg shadow-xl shadow-blue-500/50 hover:shadow-blue-500/50 hover:drop-shadow-xl houver:rounded-lg">
                    <div className="rounded-lg p-4 flex justify-center items-center">
                        <Image className="rounded-lg " src={bgImage} alt="instituto"/>
                    </div>
                    <div className="mx-5 max-w-[60%] pl-4 text-slate-300 p-5">
                        <h4 className="mb-2">Instituto Atlântico</h4>
                        <h3 className="mb-2">Desenvolvedor Full Stack</h3>
                        <p className="mb-2">Stacks: .NET, C#, Oracle, JavaScript, ReactJs, Azure Devops, PostGreSQL</p>
                        <p className="mb-2">Atuação em projetos de desenvolvimento de API’s utilizando tecnologias como C#, JavaScript e TypeScript 
                        O desenvolvimento era voltado tanto para a construção de novas API’s como na
                        manutenção de antigas. Além disso, desenvolvia testes unitários para cada atividade</p>
                    </div>
                </div>
            </div>
        </>
    )
}