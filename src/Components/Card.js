import "./Card.scss";

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="header">
        <p>Select 3 squares with</p>
        <h2>Grammy Winners</h2>
      </div>

      <div className="grid-container">
        {children}
      </div>
    </div>
  );
};

export default Card;
