import React from 'react';
import Nav from './Nav';
import './Nav.css'; // Import the CSS for the Nav component
import './Project.css';
import ultomiris from './ultomiris.png';
import myagios from './myagios.png';
import stellar from './stellarclinicaltrials.png';
import elahere from './elaherehcp.png';
import smile from './newsmilelife.png';
import kickscrew from './kickscrew.png';
import Footer from './Footer'; // Import the Footer component

function Projects() {
    return (
      <div className='projectPage'>
        <Nav /> {/* Include the Nav component */}
        <h1 className='projectPageTitle'>Projects</h1>  
        <div className='projectContainer'>
            <div className='project' id='ultomiris'>
                <img src={ultomiris} alt='Ultomiris' />
                <div className='textContainer'>
                    <h3>Ultomiris</h3>
                    <p>Comprehensive resource for Ultomiris medication.</p>
                </div>
            </div>
            <div className='project' id='agios'>
                <img src={myagios} alt='MyAgios' />
                <div className='textContainer'>
                    <h3>MyAgios</h3>
                    <p>Support platform for individuals with thalassemia or PK deficiency.</p>
                </div>
            </div>
            <div className='project' id='stellar'>
                <img src={stellar} alt='Stellar Clinical Trials' />
                <div className='textContainer'>
                    <h3>Stellar Clinical Trials</h3>
                    <p>Platform for healthcare professionals to access information about STELLAR clinical trials.</p>
                </div>
            </div>
            <div className='project' id='elahere'>
                <img src={elahere} alt='ELAHERE Healthcare Professional' />
                <div className='textContainer'>
                    <h3>ELAHERE Healthcare Professional</h3>
                    <p>Resource for healthcare providers managing patients with FRα-positive, platinum-resistant ovarian cancer.</p>
                </div>
            </div>
            <div className='project' id='newsmile'>
                <img src={smile} alt='New Smile Life' />
                <div className='textContainer'>
                    <h3>New Smile Life</h3>
                    <p>At-home teeth straightening with clear aligners.</p>
                </div>
            </div>
            <div className='project' id='kickscrew'>
                <img src={kickscrew} alt='Kicks Crew' />
                <div className='textContainer'>
                    <h3>Kicks Crew</h3>
                    <p>Global e-commerce site specializing in sneakers and apparel.</p>
                </div>
            </div>
        </div>
        <Footer />
      </div>  
    );
}

export default Projects;