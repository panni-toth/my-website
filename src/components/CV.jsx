import React, { useState } from 'react';
import './About.css'; // Your component's CSS file

const CV = () => {
  const [activeButton, setActiveButton] = useState('button1'); // Initial active button

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div className="menu">
        <button
          className={activeButton === 'button1' ? 'active' : ''}
          onClick={() => handleButtonClick('button1')}
        >
          Education
        </button>
        <button
          className={activeButton === 'button2' ? 'active' : ''}
          onClick={() => handleButtonClick('button2')}
        >
          Work Experience
        </button>
        <button
          className={activeButton === 'button3' ? 'active' : ''}
          onClick={() => handleButtonClick('button3')}
        >
          Skills
        </button>
        <button
          className={activeButton === 'button4' ? 'active' : ''}
          onClick={() => handleButtonClick('button4')}
        >
          Personal Info
        </button>
        <button
          className={activeButton === 'button5' ? 'active' : ''}
          onClick={() => handleButtonClick('button5')}
        >
          Contact
        </button>
      </div>
      <div className="content">
        {activeButton === 'button1' && 
            <div>
                <p>2019-2022</p>
                <h2>Moholy-Nagy University of Art and Design</h2>
                <p>Fashion Design</p>
                <br></br>
                <p>2014-2019</p>
                <h2>Bolyai Janos High School</h2>
                <p>Spanish-Hungarian Bilingual Class</p>
            </div>
            }
        {activeButton === 'button2' && 
            <div>
                <p>date</p>
                <h2>Relevant Fruit Inc.</h2>
                <p>Web Designer / Developer (Remote)</p>
                <br></br>
                <p>date</p>
                <h2>Bershka</h2>
                <p>Retail Assistant</p>
                <br></br>
                <p>date</p>
                <h2>Damur GmbH.</h2>
                <p>Fashion Designer</p>
                <br></br>
            </div>
            }
        {activeButton === 'button3' && 
            <div>
                <h2>Software</h2>
                <p>React</p>
                <p>JavaScript, HTML, CSS</p>
                <p>Git</p>
                <p>Adobe Photoshop, Illustrator, InDesign and PremierePro</p>
                <p>Figma</p>
                <p>Microsoft Office</p>
                <br></br>
                <h2>Languages</h2>
                <p>English - Fluent</p>
                <p>Spanish - Advanced</p>
                <p>German - Beginner</p>
                <p>Hungarian - Native Speaker</p>
                <br></br>
                <h2>Soft Skills</h2>
                <p>Problem-solving</p>
                <p>Strong communication skills - written, spoken, visual</p>
                <p>Team player</p>
                <p>Ability to work under pressure</p>
                <p></p>Fast learner
                <p>Time management</p>
                <br></br>
                <h2>Other</h2>
                <p>Driving Licence - Car</p>
                <br></br>
            </div>
            }
        {activeButton === 'button4' && 
            <div>
                <h3>Nationality</h3>
                <p>Hungarian</p>
                <br></br>
                <h3>Place of Residence</h3>
                <p>Berlin, Germany</p>
            </div>
            }
        {activeButton === 'button5' && 
            <div>
                <h3>Mobile</h3>
                <p>+36 30 789 1129</p>
                <br></br>
                <h3>Email</h3>
                <p>tea.panni@gmail.com</p>
                <br></br>
                <h3>GitHub</h3>
                <p>panni-toth</p>
                <br></br>
                <h3>LinkedIn</h3>
                <p>www.linkedin.com/in/panni-toth-design</p>
                <br></br>
                <h3>Instagram</h3>
                <p>@panni_toth_</p>
                <br></br>
            </div>
            }
      </div>
    </div>
  );
};

export default CV;