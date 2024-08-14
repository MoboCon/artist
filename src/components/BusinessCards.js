import './SharedSections.scss';
const BusinessCards = () => {
    const cards = [
      { id: 1, title: "Business Card 1", file: "path-to-business-card1.pdf" },
      { id: 2, title: "Business Card 2", file: "path-to-business-card2.pdf" }
    ];
  
    return (
      <div className="business-cards">
        <h2>Carte de Vizită</h2>
        <div className="cards-container">
          {cards.map((card) => (
            <div key={card.id} className="card-item">
              <h3>{card.title}</h3>
              <a href={card.file} download className="download-button">Descarcă</a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BusinessCards;
  