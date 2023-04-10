import { ButtonMenu } from './ButtonMenu'

export function NavBar(){
    return (
            <div className='container flex text-center mt-10 items-center justify-center borde-2 rounded-lg grid grid-cols-6 md:px-40'>
                <ButtonMenu nameMenu='Sobre' />
                <ButtonMenu nameMenu='Experiencias' />
                <ButtonMenu nameMenu='Stack' />
                <ButtonMenu nameMenu='Projetos' />
                <ButtonMenu nameMenu='Skills' />
                <ButtonMenu nameMenu='Contato' />
            </div>
    )
}