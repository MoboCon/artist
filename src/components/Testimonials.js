import React from 'react';
import './Testimonials.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SharedSections.scss';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "O experiență incredibilă! Lucrările au fost exact ce căutam.",
      image: "path-to-image.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Talent și profesionalism de neegalat. Recomand cu căldură!",
      image: "path-to-image.jpg"
    }
  ];

  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="testimonials" data-aos="fade-up">
      <h2>Testimoniale</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>"{testimonial.text}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
