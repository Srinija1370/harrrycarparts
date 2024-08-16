import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import billinimg from './billingimg.avif';
import './Billing.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Billing = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        window.location.href = "https://cash.app/$rovonix"; // For external navigation, use window.location.href
    };

    return (
        <div>
            <Navbar />
            <br /><br /><br />
        <div className='billing'>
            <img src={billinimg} alt="Billing" />
            <h1 className='billing-page-title'>Billing Page</h1>
            <h1 className='payment-details'>Payment Details</h1>
            <button onClick={handleClick}>Cash app</button>
            <p><b>Venmo Details</b></p>
            <p><b>Venmo ID:</b> onix0725</p>
            <p><b>Phone Number:</b>+1-701-660-3456</p>
        </div>
        <br />
        <Footer />
        </div>
    );
};

export default Billing;
