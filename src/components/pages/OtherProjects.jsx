import React from "react";
import './OtherProjects.css';
import ill2 from '../../images/other/ill2.JPG'
import Snapster from '../../images/other/snapster.JPG';
import Hat from '../../images/other/hatmaking.JPG';
import Paint from '../../images/other/painting.JPG';
import Portrait from '../../images/other/portrait.JPG';

function OtherProjects() {
    return (
        <>
        <div className="other-header">Other Projects</div>
        <h1 id="overview">Overview</h1>
        <div className="other-reel">
            <Reel  src={ill2} alt="Illustration" title="Illustrations"/>
            <Reel  src={Snapster} alt="Snapster App" title="Snapster UI"/>
            <Reel  src={Hat} alt="Hatmaking" title="Hatmaking"/>
            <Reel  src={Portrait} alt="Portraits" title="10 minute portraits"/>  
            <Reel  src={Paint} alt="Paintings" title="Paintings"/>
            <Reel  src={ill2} alt="Knitwear" title="Knitwear"/>
            <Reel  src={ill2} alt="Lingerie" title="Lingerie"/>
        </div>
        </>
)}

function Reel({ src, alt, title }) {
    return (
        <div className="other-reel-image-wrapper">
        <img src={src} alt={alt} className="other-reel-images"></img>
        <div>{title}</div>
    </div>
    )
}

export default OtherProjects;