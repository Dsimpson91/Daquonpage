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
        <div className='projectContainer'>
            <a href="ultomris.com" target="_blank" rel="noreferrer">
                <div className='project' id='ultomiris'>
                    <div className='textContainer'>
                        <h2>Ultomris</h2>
                        <p>The Ultomiris website (ultomiris.com) is a comprehensive, user-friendly resource for individuals seeking information about Ultomiris, a medication used to treat rare autoimmune and blood disorders. The site provides detailed information on the drug's uses, mechanism of action, treatment options, and safety precautions. Key features include accessible navigation, educational content on conditions like PNH and aHUS, and patient resources. The site is designed to ensure ease of use for patients, caregivers, and healthcare professionals, with clear visuals and a responsive layout.</p>
                        <div className='skillsContainer'>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="myagios.com" target="_blank" rel="noreferrer">
                <div className='project' id='agios'>
                    <div className='textContainer'>
                        <h2>MyAgios</h2>
                        <p>The myAgios website (myagios.com) is a dedicated platform offering comprehensive support for individuals diagnosed with thalassemia or pyruvate kinase (PK) deficiency, particularly those prescribed PYRUKYND® (mitapivat). The site features user-friendly navigation, providing access to personalized resources such as one-on-one disease education, financial assistance, and community connections.</p>
                        <div className='skillsContainer'>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="stellarclinicaltrials.com" target="_blank" rel="noreferrer">
                <div className='project' id='stellar'>
                    <div className='textContainer'>
                        <h2>Stellar Clinical Trials</h2>
                        <p>The STELLAR Clinical Trials website (stellarclinicaltrials.com) serves as a dedicated platform for healthcare professionals to access information about Exelixis' STELLAR clinical trials. These trials investigate the investigational use of zanzalintinib (XL092) in various solid tumors. The site offers detailed information on multiple studies.</p>
                        <div className='skillsContainer'>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="elaherehcp.com" target="_blank" rel="noreferrer">
                <div className='project' id='elahere'>
                    <div className='textContainer'>
                        <h2>Project Name</h2>
                        <p>The ELAHERE® Healthcare Professional website (elaherehcp.com) is a comprehensive resource designed for healthcare providers managing patients with FRα-positive, platinum-resistant ovarian cancer. The site offers detailed information on ELAHERE®, including its efficacy, safety profile, dosing and administration guidelines, and ocular care considerations.</p>
                        <div className='skillsContainer'>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="newsmilelife.com" target="_blank" rel="noreferrer">
                <div className='project' id='newsmile'>
                    <div className='textContainer'>
                        <h2>New Smile Life</h2>
                        <p>The NewSmile™ website offers a seamless, user-friendly experience for customers seeking at-home teeth straightening with clear aligners. The site is fully responsive, ensuring smooth navigation across all devices. It features a personalized user journey, where customers can order an Impression Kit, receive a 3D treatment preview, and proceed with their tailored treatment plan. The integrated e-commerce platform allows for secure online purchases with flexible payment options, while interactive 3D visuals showcase treatment progress. The site is optimized for accessibility and SEO, and it offers robust customer support, including live chat and FAQs.</p>
                        <div className='skillsContainer'>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="kickscrew.com" target="_blank" rel="noreferrer">
                <div className='project' id='kickscrew'>
                    <div className='textContainer'>
                        <h2>Kicks Crew</h2>
                        <p>KICKS CREW is a global e-commerce site specializing in sneakers and apparel from top brands like Nike, Adidas, and Yeezy. Built on Shopify, the site offers easy navigation, real-time updates on new and limited releases, and supports multiple payment options with international shipping. It ensures product authenticity and provides features like a wishlist for saving favorite items. The platform is designed for a seamless shopping experience, catering to sneaker enthusiasts worldwide.n</p>
                        <div className='skillsContainer'>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                            <div className='skill'>tech</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <Footer />
      </div>  
    );
}

export default Projects;