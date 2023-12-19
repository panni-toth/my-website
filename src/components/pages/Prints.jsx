import React from "react";
import { Link } from 'react-router-dom';
import './Prints.css';
import keserücover from '../../images/prints/keserü/keserücover.jpg';
import swanscover from '../../images/prints/swans/swanscover.JPG';
import handscover from '../../images/prints/handscover.JPG';
import watercolorcover from '../../images/prints/watercolorcover.JPG';

function Prints() {
    return (
        <>
        <div className="prints-header">Print Design</div>
        <h1 id="print-projects">Projects</h1>
        <div className="print-reel">
            <Reel src={keserücover} alt="Keserü Project" title="KESERÜ" page="/keseru-print" />
            <Reel src={swanscover} alt="Swans Project" title="SWANS, LEAVES & STRIPES" page="/swans" />
            <Reel src={watercolorcover} alt="Mini Collections" title="MINI COLLECTIONS" page="/print-mini-collections" />
            <Reel src={handscover} alt="Hands Project" title="HANDS & screen printing" page="/hands" />
        </div>
        </>
        
)}

const scrollToTop = () => {
    console.log('Clicked link, scrolling to top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

function Reel({ src, alt, title, page }) {
    return (
        <div>
        <Link to={page} onClick={scrollToTop}>
         <img src={src} alt={alt} className="print-reel-images"></img>
        </Link>
        <div>{title}</div>
    </div>
    )
}

export default Prints;