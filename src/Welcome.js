import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Nav.css'; // Import the CSS for the Nav component
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import './Welcome.css'


function Welcome() {
    return (
   <div>   
    <div>
        <div> 
          <div className='welcomeText'>
            <h1>Daquon Simpson</h1>
            <p>Hi there! I'm a Full Stack Developer with a diverse skill set and experience that spans across various industries, from healthcare marketing to e-commerce. With a passion for building user-centric, scalable applications, I specialize in both front-end and back-end development to create seamless and impactful digital experiences. Whether it's crafting responsive websites or optimizing complex systems, I'm committed to delivering high-quality solutions tailored to meet unique business needs. Let’s bring your ideas to life!</p>
            </div>
            <footer className="footer">
             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
             <FaGithub className="icon" />
             </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            </a>
            <a href="mailto:youremail@example.com">
            <FaEnvelope className="icon" />
            </a>
           </footer>
        </div>
        
    </div>
   </div> 
    );
}



export default Welcome;