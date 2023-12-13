import React from "react";
import './OtherProjects.css';
import ill2 from '../../images/other/ill2.JPG'

function OtherProjects() {
    return (
        <>
        <div className="other-header">Other Projects</div>
        <h1 id="overview">Overview</h1>
        <div className="other-reel">
            <Reel  src={ill2} alt="Illustration" title="Illustrations"/>
            <Reel  src={ill2} alt="Illustration" title="Illustrations"/>
            <Reel  src={ill2} alt="Illustration" title="Illustrations"/>
            <Reel  src={ill2} alt="Illustration" title="Illustrations"/>
            <Reel  src={ill2} alt="Illustration" title="Illustrations"/>
            <Reel  src={ill2} alt="Illustration" title="Illustrations"/> 
        </div>
        </>
)}

function Reel({ src, alt, title }) {
    return (
        <div>
        <img src={src} alt={alt} className="other-reel-images"></img>
        <div>{title}</div>
    </div>
    )
}

export default OtherProjects;