import bgImage from '../../assets/profile.jpeg'
import '../About/styles.css'
import Image from "next/image";

export function About(){
    return (
        <div className='container'>
            <div className='text-center'>
                <h2 className='text-slate-300 text-5xl mt-2 mb-6'>Desenvolvedor Full Stack</h2>
            </div>
            <div className='mt-18 flex p-6 items-center rounded-lg grid grid-cols-2'>
                <div className='flex text-slate-300 justify-end'>
                    <div className='w-96'>
                        <p className=''>Olá, bem vindo(a)!</p>
                        <p>Eu sou Emanoel Bezerra Sou bacharel pela Universidade Federal do Ceara e esse é meu portfolio</p>
                    </div>
                </div>
                <div className='rounded-lg flex justify-center'>
                    <Image src={bgImage} alt="profile" className=' bg-contain rounded-full img-border' width={200} height={1000}/>
                </div>
            </div>
        </div>
    )
}