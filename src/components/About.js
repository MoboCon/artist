import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';
import Loader from './Loader';
import SocialFeed from './SocialFeed';
import fundalImg from '../imagini/fundal.jpg';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="about">
      <div className="about-banner" style={{ backgroundImage: `url(${fundalImg})` }}>
        <h1>Despre Mine</h1>
        <p>"Arta este respirația sufletului." - Necunoscut</p>
      </div>
      <div className="about-content">
        <div className="about-image" data-aos="fade-right">
          <img src="/artist.jpg" alt="Artist" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <p>
            Sunt un artist digital cu o pasiune profundă pentru design și creație. În ultimii 10 ani, am explorat diferite forme de artă digitală, combinând tehnici tradiționale cu cele moderne pentru a crea lucrări unice și inspirate.
          </p>
          <p>
            Fiecare proiect pe care îl realizez reflectă o parte din sufletul meu, încercând mereu să transmit emoții și povești prin fiecare linie și culoare. Arta mea nu este doar despre estetică, ci și despre conexiune și exprimare.
          </p>
          <h2>Abilități</h2>
          <ul>
            <li>🎨 Desen digital</li>
            <li>✏️ Grafică vectorială</li>
            <li>💻 Design UI/UX</li>
            <li>🖥️ Modelare 3D</li>
          </ul>
          <h2>Experiență</h2>
          <p>
            De-a lungul carierei mele, am avut onoarea de a colabora cu diverse agenții și clienți internaționali, dezvoltând proiecte care au fost apreciate și recunoscute la nivel global.
          </p>
        </div>
      </div>
      <div className="about-quote" data-aos="fade-up">
        <blockquote>
          "Creează ceea ce îți dorești să vezi în lume."
        </blockquote>
      </div>
      <div className="about-timeline" data-aos="fade-up">
        <h2>Linia Timpului</h2>
        <div className="timeline">
          <div className="timeline-event" data-aos="fade-right">
            <div className="timeline-content">
              <h3>2005</h3>
              <p>Primul contact cu arta digitală. Fascinația pentru culori și forme m-a împins să explorez noi modalități de exprimare artistică.</p>
            </div>
          </div>
          <div className="timeline-event" data-aos="fade-left">
            <div className="timeline-content">
              <h3>2010</h3>
              <p>Colaborare cu agenții de publicitate internaționale, aducând la viață campanii vizuale unice și inovatoare.</p>
            </div>
          </div>
          <div className="timeline-event" data-aos="fade-right">
            <div className="timeline-content">
              <h3>2015</h3>
              <p>Premii pentru excelență în design la competiții internaționale. Reputația mea a crescut, odată cu aceasta și portofoliul meu de lucrări.</p>
            </div>
          </div>
          <div className="timeline-event" data-aos="fade-left">
            <div className="timeline-content">
              <h3>2020</h3>
              <p>Lansarea propriei mele expoziții de artă digitală, celebrând 15 ani de inovație și creativitate.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section" data-aos="fade-up">
        <h2>Contact</h2>
        <form className="contact-form">
          <label htmlFor="name">Nume:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Mesaj:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Trimite</button>
        </form>
      </div>
      <SocialFeed />
    </div>
  );
};

export default About;
