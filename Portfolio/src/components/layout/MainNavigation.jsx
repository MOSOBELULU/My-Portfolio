import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'



export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.name}>
            <h3>Mosobe Lulu</h3>
            <h3>Junior Software Developer</h3>
        </div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
