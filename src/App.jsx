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
import KeseruFashion from './components/pages/subPages/KeseruFashion';
import Instincts from './components/pages/subPages/Instincts';
import Shirt from './components/pages/subPages/Shirt';
import OpArt from './components/pages/subPages/OpArt';
import KeseruPrint from './components/pages/subPages/KeseruPrint';
import Swans from './components/pages/subPages/Swans';
import MiniColPrints from './components/pages/subPages/MiniColPrints';
import Hands from './components/pages/subPages/Hands';

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
        <Route path="/keseru-fashion" element={ <KeseruFashion/>}/> 
        <Route path="/instincts" element={ <Instincts/>}/>  
        <Route path="/shirt" element={ <Shirt/>}/>
        <Route path="/op-art" element={ <OpArt/>}/>
        <Route path="/keseru-print" element={ <KeseruPrint/>}/>
        <Route path="/swans" element={ <Swans/>}/>
        <Route path="/print-mini-collections" element={ <MiniColPrints/>}/>
        <Route path="/hands" element={ <Hands/>}/>
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
