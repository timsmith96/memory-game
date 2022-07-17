import Header from './Header';
import ScoresContainer from './ScoresContainer';
import GameGrid from './GameGrid';
import '../styles/Global.css';
import guineaPigs from '../data';

function MemoryApplication() {
  return (
    <div>
      <Header />
      <ScoresContainer />
      <GameGrid data={guineaPigs} />
    </div>
  );
}

export default MemoryApplication;
