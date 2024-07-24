import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMail = () => {
    const { name, email, phone, query } = formData;

    if (name === '' || email === '' || phone === '' || query === '') {
      alert('Please fill in all required fields.');
      return;
    }

    const params = {
      name,
      email,
      phone,
      query
    };

    emailjs.send('service_pi1ettb', 'template_0b4py77', params)
      .then(response => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          query: ''
        });
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
        console.log('SUCCESS!', response.status, response.text);
      }, error => {
        alert('Failed to send email. Please try again later.');
        console.log('FAILED...', error);
      });
  };

  return (
    <div>
        <Navbar />
    <div className="container">
      <h2>Contact Us</h2><br />
      <form id="contactForm">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email.." value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Your phone number.." value={formData.phone} onChange={handleChange} required />

        <label htmlFor="query">Query?</label>
        <textarea id="query" name="query" placeholder="Write your query.." value={formData.query} onChange={handleChange} required></textarea>

        <input type="button" value="Submit" onClick={sendMail} />
      </form>
      {successMessage && <div id="successMessage">Form submitted successfully!</div>}
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
