import {Route, Switch} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import MainNavigation from './components/layout/MainNavigation'
import Home from './pages/Home'
import './App.css'

function App() {
  return  (
    <div>
      <MainNavigation />

      <Switch>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/about'>
        <About />
        </Route>

      <Route path='/projects'>
        <Projects />
      </Route>

      <Route path='/contact'>
        <Contact/>
      </Route>

      </Switch>
    </div>
  )
  
  
}

export default App
