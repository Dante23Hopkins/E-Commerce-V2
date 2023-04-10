import React, { useState } from 'react';
import '../styles/Contact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} Email: ${email} Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
