import bgImage from '../../assets/profile.jpeg'
import '../About/styles.css'
import Image from "next/image";

export function About(){
    return (
        <div className='container mb-20'>
            <div className='text-center'>
                <h2 className='text-slate-300 text-5xl mt-10 py-5 mb-6'>Desenvolvedor Full Stack</h2>
            </div>
            <div className='mt-18 pt-10 items-center text-center  sm:text-start rounded-lg justify-center md:gap-x-48 flex flex-col-reverse md:flex md:flex-row '>
                <div className='flex text-slate-300 justify-end'>
                    <div className='w-96 pt-10 sm:pt-0'>
                        <p className=''>Olá, bem vindo(a)!</p>
                        <p>Eu sou Emanoel Bezerra Sou bacharel pela Universidade Federal do Ceara e esse é meu portfolio</p>
                    </div>
                </div>
                <div className='rounded-lg flex items-center justify-center'>
                    <Image src={bgImage} alt="profile" className='bg-contain rounded-full m-0 img-border' width={200} height={1000}/>
                </div>
            </div>
        </div>
    )
}