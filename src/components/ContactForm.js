import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logică pentru trimiterea formularului de contact
    alert('Mulțumim pentru mesaj, te vom contacta în curând!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nume" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Mesaj" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required 
      ></textarea>
      <button type="submit">Trimite</button>
    </form>
  );
};

export default ContactForm;
