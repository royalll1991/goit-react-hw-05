import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'

function Navigation () {
    return(
        <nav className={css.nav}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
        </nav>
    )
}
export default Navigation;