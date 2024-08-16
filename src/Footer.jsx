import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>HARRYS CAR PARTS</h1>
                <p>COPYRIGHT © 2022 HARRY CAR PARTS - ALL RIGHTS RESERVED.</p>
                <p>POWERED BY GODADDY</p>
            </div>
            <br />
            <div className="footer-disclaimer"><b>Disclaimer:</b> The content on harry'scarparts is for informational purposes only. We do not guarantee the accuracy or completeness of the information provided. Use the content at your own risk. Harry'scarparts is not liable for any damages or losses arising from the use of this site. Links to third-party websites are provided for convenience, and we are not responsible for their content. </div>
        </footer>
    );
}

export default Footer;
