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
            <Route path="/" element={<Home/>} />
            <Route path="/AboutMe" element={<AboutMe/>} />
            <Route path="/Project" element={<Project/>} />
            <Route path="/Skill" element={<Skill/>}/>
        </Routes>
      </Router>
    
  );
}





export default App;
