import '../styles/Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img"
          src={require(`../img/${props.imgUrl}`)}
          alt="beansy-baby"
        />
      </div>
      <p className="card-text">{props.name}</p>
    </div>
  );
}

export default Card;
