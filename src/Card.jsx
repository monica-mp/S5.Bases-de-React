function Card({ currentCardData}) {
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{currentCardData.title}</h1>
          <p className="card-content">{currentCardData.description}</p>
          
        </div>
      </div>
    );
  }
  
  export default Card;