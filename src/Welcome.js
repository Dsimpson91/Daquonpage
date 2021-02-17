import React from 'react';
import github from './github2.svg';
import resume from './resume.svg';
import linkedin from './linkedin.svg';
import email from './email.svg';
import pdf from './DaquonSimpsonResume.pdf';


function Welcome() {
    return (
    <div>
        <div>
            <h1>Daquon Simpson</h1>
            <h2>Site down for maintenance</h2>
            <h2>Stay Connected</h2>
            <div className="contactDiv">
             <a href="https://github.com/Dsimpson91" target="_blank"  rel="noreferrer">
                <img src={github} alt="github"/>
             </a>
             <a href= {pdf} target="_blank" rel="noreferrer">
                <img src={resume} alt="resume"/>
             </a>
             <a href="https://www.linkedin.com/in/daquon-simpson/" target="_blank"  rel="noreferrer">
                <img src={linkedin} alt="linkedin"/>
             </a>
             <a href="mailto:Daquon_simpson@outlook.com" target="_blank"  rel="noreferrer">
                <img src={email} alt="email"/>
             </a>
            </div>
        </div>
        
    </div>
    );
}



export default Welcome;