import Image, { StaticImageData } from "next/image";
import bgImage from '../../assets/instituto-atlantico.jpeg'

interface CardCard {
    img: StaticImageData,
}

export function Card(){
    return (
        <>
            <div className="container mt-20 flex justify-center mb-5">
                <div className="flex min-w-[60%] gap-10 justify-center rounded-lg ease-in-out duration-300  border-2 border-black hover:border-[#1070ff] hover:shadow-lg shadow-xl shadow-blue-500/50 hover:shadow-blue-500/50 hover:drop-shadow-xl houver:rounded-lg">
                    <div className="rounded-lg p-4">
                        <Image className="rounded-lg " src={bgImage} alt="instituto"/>
                    </div>
                    <div className="mx-5 pl-4 text-slate-300 p-5">
                        <h4>Instituto Atlântico</h4>
                        <h3>Desenvolvedor Full Stack</h3>
                        <p>Stacks: .NET, C#, Oracle, JavaScript, ReactJs, Azure Devops, PostGres</p>
                    </div>
                </div>
            </div>
        </>
    )
}