import Image, { StaticImageData } from "next/image";

interface TypeCard {
    img: StaticImageData,
    companyName: string,
    responsibility: string,
    stacks: string
    summary: string
}

export function Card({img, companyName, responsibility, stacks, summary}: TypeCard){
    return (
        <>
            <div className="container flex justify-center mb-5 pb-5 mx-0">
                <div className="flex flex-col sm:flex-row w-[65%] sm:h-[280px] h-[100%] gap-20 justify-center rounded-lg ease-in-out duration-300 border-2 border-black hover:border-[#1070ff] float-left shadow-[6px_5px_3px_rgba(16,112,255,1)]">
                    <div className="rounded-lg p-4 flex justify-center items-center">
                        <Image className="rounded-lg" width={200} src={img} alt={companyName}/>
                    </div>
                    <div className="sm:mx-5 mx-0 max-w-[100%] sm:max-w-[60%] pl-4 text-slate-300 p-5">
                        <p className="mb-2 text-4xl">{companyName}</p>
                        <p className="mb-4 flex justify-end italic">{responsibility}</p>
                        <p className="mb-2">Stacks: {stacks}</p>
                        <p className="mb-2">Resumo: {summary}</p>
                    </div>
                </div>
            </div>
        </>
    )
}