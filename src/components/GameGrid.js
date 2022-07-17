import Card from './Card';
import '../styles/GameGrid.css';

function GameGrid(props) {
  const cards = props.data.map((guineaPig) => (
    <Card
      key={guineaPig.name}
      imgUrl={guineaPig.imgUrl}
      name={guineaPig.name}
    />
  ));
  return <div className="game-grid">{cards}</div>;
}

export default GameGrid;
