import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contactează-mă</h1>
        <p>Îți mulțumesc că îți dorești să mă contactezi! Completează formularul de mai jos și voi răspunde cât de curând posibil.</p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nume</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subiect</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesaj</label>
            <textarea id="message" name="message" rows="8" required></textarea>
          </div>
          <button type="submit" className="submit-button">Trimite Mesajul</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
