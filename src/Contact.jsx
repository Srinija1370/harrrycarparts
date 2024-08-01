import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Contact Us</h2><br />
        <form id="contactForm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." value={formData.name} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." value={formData.email} onChange={handleChange} />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Your phone number.." value={formData.phone} onChange={handleChange} />

          <label htmlFor="query">Query?</label>
          <textarea id="query" name="query" placeholder="Write your query.." value={formData.query} onChange={handleChange}></textarea>

          <input type="button" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
