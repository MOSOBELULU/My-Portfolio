import { Link } from "react-router-dom"
// import classes from './MainNavigation.module.css'



export default function MainNavigation() {
  return (
    <div>
      <header>
        <div>
            <h2>Mosobe Lulu</h2>
        </div>
        <nav>
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
