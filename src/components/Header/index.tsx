import Link from '../Link/index'

import "../Header/style.css"

function Header() {
    return (
    <header>

        <h1>DinDin</h1>
        <nav>
            <Link texto ="Curso" redirect='./cursos'/>
            <Link texto="Ganhe dinheiros" redirect='#'/>
            <Link texto= "fique rico devagar" redirect='./dinheiros'/>

            </nav>
    </header>
    )
}

export default Header;