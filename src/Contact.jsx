import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = () => {
    const { name, email, phone, query } = formData;

    if (name === '' || email === '' || phone === '' || query === '') {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs.send('service_wn3z44h', 'template_6c7yp3w', formData, '6yuAKcckj1TNahq_c')
      .then(response => {
        setFormSubmitted(true);
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch(error => {
        alert("Failed to send email. Please try again later.");
        console.log('FAILED...', error);
      });
  };

  return (
    <div>
      <Navbar />
    <div className="container">
      {formSubmitted ? (
        <div>
          <p className="thankyou-message">
            Support request received. A third party support representative has been assigned to assist you. You should receive a call momentarily.
          </p>
          <p className="disclaimer">
            *Disclaimer: Computer360 provides services for diagnostic and technical support issues for desktops, laptops, mobile devices, and tablets. We are a THIRD PARTY solution and we are NOT AFFILIATED with any brands, trademarks, logos, or any other company names used. The brand names, trademarks, and logos belong to their respective owners and are for representation purposes only.
          </p>
        </div>
      ) : (
        <form id="contactForm">
          <h2>Contact Us</h2><br />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="query">Query?</label>
          <textarea
            id="query"
            name="query"
            placeholder="Write your query.."
            value={formData.query}
            onChange={handleChange}
            required
          />

          <input
            type="button"
            value="Submit"
            onClick={sendMail}
          />
        </form>
      )}
    </div>
     <div className='contact-info'>
     <h1>Corporate Office</h1>
     <div className='contact-details'>
         <p><strong>Address:</strong> 2915 Bluestem Dr APT 2193, West Fargo, ND 58078</p>
         <p><strong>Telephone:</strong> +1-701-660-3456</p>
         <p><strong>Email:</strong> <a href="mailto:infoharry@gmail.com">infoharry@gmail.com</a></p>
     </div>
 </div>
 <Footer />
 </div>
  );
};

export default Contact;