import './App.css';
import shoppiesIcon from './images/logo192.png';
import MovieListContainer from './containers/MovieListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id='logo-img' alt='movie thumbnail' src={shoppiesIcon} />
        <span>The Shoppies</span>
      </header>
      <MovieListContainer />
    </div>
  );
};

export default App;
