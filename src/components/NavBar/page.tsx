import { ButtonMenu } from './ButtonMenu'

export function NavBar(){
    return (
            <div className='md:container flex text-center items-center justify-center borde-2 rounded-lg grid grid-cols-6 px-40'>
                <ButtonMenu nameMenu='Sobre' />
                <ButtonMenu nameMenu='Experiencias' />
                <ButtonMenu nameMenu='Stack' />
                <ButtonMenu nameMenu='Projetos' />
                <ButtonMenu nameMenu='Skills' />
                <ButtonMenu nameMenu='Contato' />
            </div>
    )
}