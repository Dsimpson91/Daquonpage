import React from 'react';
import Nav from './Nav';
import './Nav.css'; // Import the CSS for the Nav component
import './Project.css';
import Footer from './Footer'; // Import the Footer component

function Projects() {
    return (
      <div className='projectPage'>
        <Nav /> {/* Include the Nav component */}
        <h1 className='projectPageTitle'>Projects</h1>
        <p className='projectPageDescription'>Here are some examples of my work, spanning healthcare marketing for major pharmaceutical companies to e-commerce solutions for Shopify stores. I bring a unique blend of strategic insight and creative execution to every project, ensuring a versatile approach that delivers impactful results across different industries. I’m happy to provide more detailed displays of my work upon request.</p>  
        <div className='projectContainer'> 
            <div className='project' id='ultomiris'>
                <div className='textContainer'>
                    <h3>Ultomiris</h3>
                    <p>Comprehensive resource for Ultomiris medication.</p>
                </div>
            </div>
            <div className='project' id='agios'>
                <div className='textContainer'>
                    <h3>MyAgios</h3>
                    <p>Support platform for individuals with thalassemia or PK deficiency.</p>
                </div>
            </div>
            <div className='project' id='stellar'>
                <div className='textContainer'>
                    <h3>Stellar Clinical Trials</h3>
                    <p>Platform for healthcare professionals to access information about STELLAR clinical trials.</p>
                </div>
            </div>
            <div className='project' id='elahere'>
                <div className='textContainer'>
                    <h3>ELAHERE Healthcare Professional</h3>
                    <p>Resource for healthcare providers managing patients with FRα-positive, platinum-resistant ovarian cancer.</p>
                </div>
            </div>
            <div className='project' id='newsmile'>
                <div className='textContainer'>
                    <h3>New Smile Life</h3>
                    <p>At-home teeth straightening with clear aligners.</p>
                </div>
            </div>
            <div className='project' id='kickscrew'>
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