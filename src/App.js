import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMe from './components/header/links/AboutMe';
import Project from './components/header/links/Project';
import Skill from './components/header/links/Skill';
import Home from './components/Home';

function App() {

  return (
    
      <Router>
        <Header/>
        <Routes>
            <Route path="/ErwinIbarra/" element={<Home/>} />
            <Route path="/ErwinIbarra/AboutMe" element={<AboutMe/>} />
            <Route path="/ErwinIbarra/Project" element={<Project/>} />
            <Route path="/ErwinIbarra/Skill" element={<Skill/>}/>
        </Routes>
      </Router>
    
  );
}





export default App;
