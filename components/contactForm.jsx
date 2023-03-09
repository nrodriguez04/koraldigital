import React, { useState } from 'react';

//Style imports
import '../styles/contactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Send email to support@koraldigital.com
    const subject = `New message from ${name} (${email})`;
    const body = message;
    window.location.href = `mailto:support@koraldigital.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
