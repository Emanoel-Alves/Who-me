interface ButtonMenuProps {
    nameMenu: string,
    isActive?: boolean
}

export function ButtonMenu({nameMenu, isActive = false }: ButtonMenuProps){
    return(
        <div className="px-3 py-2 text-slate-300 ease-in-out duration-300 font-semibold text-1xl border-b-2 border-transparent hover:border-[#1070ff] hover:shadow-lg shadow-lg hover:shadow-blue-500/50 hover:drop-shadow-xl houver:rounded-lg">
            <a className="" href="">{nameMenu}</a>
        </div>
    )
}