import "./Card.scss";


const Card = ({ children, questionOneState, fallAnimation, heading }) => {
  return (
    <div className={`card ${fallAnimation}`}>
      <div className="header">
        <p>Select 3 squares with</p>
        <h2>{heading}</h2>
      </div>

      <div className="grid-container">{children}</div>

      <button>Skip</button>
    </div>
  );
};

export default Card;
