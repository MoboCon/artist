// src/components/CombinedSections.js
import React from 'react';
import './CombinedSections.scss';

const CombinedSections = () => {
  return (
    <div className="combined-sections">
      <section className="testimonials">
        <h2>Testimoniale</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"O experiență incredibilă! Lucrările au fost exact ce căutam."</p>
            <h3>- John Doe</h3>
          </div>
          <div className="testimonial">
            <p>"Talent și profesionalism de neegalat. Recomand cu căldură!"</p>
            <h3>- Jane Smith</h3>
          </div>
        </div>
      </section>

      <section className="business-cards">
        <h2>Carte de Vizită</h2>
        <div className="cards-container">
          <div className="card-item">
            <h3>Business Card 1</h3>
            <a href="/path-to-card1" className="download-button">Descarcă</a>
          </div>
          <div className="card-item">
            <h3>Business Card 2</h3>
            <a href="/path-to-card2" className="download-button">Descarcă</a>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Întrebări Frecvente</h2>
        <div className="faq-item">
          <h3>Cum pot comanda o lucrare?</h3>
          <p>Poți comanda o lucrare prin intermediul formularului de contact.</p>
        </div>
        <div className="faq-item">
          <h3>Ce tipuri de artă creezi?</h3>
          <p>Mă specializez în artă digitală, tradițională și modelare 3D.</p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Abonează-te la Newsletter</h2>
        <form>
          <input type="email" placeholder="Adresa de email" required />
          <button type="submit">Abonează-te</button>
        </form>
      </section>
    </div>
  );
};

export default CombinedSections;
