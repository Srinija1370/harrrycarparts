import React from 'react';
import main from './1.gif';
import two from './2.webp';
import three from './3.webp'
import './Home.css';
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="home-container">
             <Navbar />
            <div className="image-container">
                <img src={main} alt="Auto Parts" />              
                <div className="overlay-text">
                    <div className='text-on-image'>
                    <p>Find what you are looking for!</p>
                    <h1>Reliable Parts at a Fair Price</h1>
                    </div>
                </div>
            </div>
            <div className='second-container'> 
                <h1>Our Guarantee</h1>
                <img src={two} alt="" />
            </div>
            <div className='second-container'> 
                <h1>Knowledgable Staff</h1>
                <p>We are dedicated to finding high-quality replacement parts for each of our customers. </p>
                <img src={three} alt="" />
            </div>
            <div className='second-container'> 
                <h1>We Have You Covered</h1>
                <p>Whether you're calling us for a new motor, bumper, or new lights, we promise that you will be completely satisfied with your replacement parts. </p>
            </div>
            <div className='second-container'> 
                <h1>Our Quality Promise</h1>
                <p>We're committed to providing a stress-free experience to both new and returning customers. Our shop only sources parts from reputable brands to ensure that your vehicle is always ready to drive.</p>
            </div>
            <div className='second-container'> 
                <h1>Contact</h1>
                <p><b>Call your personal sales associate at +1-701-660-3456 </b></p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
