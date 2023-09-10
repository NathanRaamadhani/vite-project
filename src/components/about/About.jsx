import React from 'react';
import "./About.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const About = () => {
    return(
        <div>
            <Header />
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About