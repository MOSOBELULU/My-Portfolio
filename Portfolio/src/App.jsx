
import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import EducationPage from './components/EducationPage'; 
import SkillsPage from './components/SkillPage'
import './App.css';

function App() {
  return (
    <div>
      <MainNavigation />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/education'>
          <EducationPage />
        </Route>

        <Route path='/skills'>
          <SkillsPage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
