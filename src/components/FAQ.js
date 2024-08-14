const FAQ = () => {
    const faqs = [
      { id: 1, question: "Cum pot comanda o lucrare?", answer: "Poți comanda o lucrare prin intermediul formularului de contact." },
      { id: 2, question: "Ce tipuri de artă creezi?", answer: "Mă specializez în artă digitală, tradițională și modelare 3D." }
    ];
  
    return (
      <div className="faq">
        <h2>Întrebări Frecvente</h2>
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FAQ;
  