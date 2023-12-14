import React from "react";
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
            <Reel src={keserücover} alt="Keserü Project" title="KESERÜ"/>
            <Reel src={swanscover} alt="Swans Project" title="SWANS, LEAVES & STRIPES"/>
            <Reel src={watercolorcover} alt="Keserü Project" title="KESERÜ"/>
            <Reel src={handscover} alt="Hands Project" title="HANDS"/>
        </div>
        </>
        
)}

function Reel({ src, alt, title }) {
    return (
        <div>
        <img src={src} alt={alt} className="print-reel-images"></img>
        <div>{title}</div>
    </div>
    )
}

export default Prints;