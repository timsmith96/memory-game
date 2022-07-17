import BestScore from './BestScore';
import CurrentScore from './CurrentScore';
import '../styles/ScoresContainer.css';

function ScoresContainer() {
  return (
    <div className="scores-container">
      <CurrentScore />
      <BestScore />
    </div>
  );
}

export default ScoresContainer;
