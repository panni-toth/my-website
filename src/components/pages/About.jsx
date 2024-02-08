import React from "react";
import CV from '../CV';
import '../../components/About.css';
import '../../components/TextSection.css';


function About() {
    return (
        <>
        <div className="element-container">
            <h1 id="curriculum">Curriculum Vitae</h1>
            <CV />
            <br></br>
        </div>
        <div className="text-section-container">
                <h2>My journey</h2>
                <p className="text-section-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </p>
            </div>
        </>
)}

export default About;