import './App.css';
import NavBar from './components/NavBar';
import Fashion from './components/pages/Fashion';
import Prints from './components/pages/Prints';
import WebDesign from './components/pages/WebDesign';
import FrontEnd from './components/pages/FrontEnd';
import OtherProjects from './components/pages/OtherProjects';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { Route, Routes } from "react-router-dom";
import BottomNav from './components/BottomNav';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/fashion" element={ <Fashion/>}/>
        <Route path="/prints" element={ <Prints/>}/>
        <Route path="/web-design" element={ <WebDesign/>}/>
        <Route path="/front-end" element={ <FrontEnd/>}/>
        <Route path="/projects" element={ <OtherProjects/>}/>
        <Route path="/about" element={ <About/>}/>
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
