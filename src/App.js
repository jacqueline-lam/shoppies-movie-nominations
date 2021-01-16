import logo from './logo.svg';
import './App.css';
import shoppiesIcon from './images/logo192.png';
import MovieListContainer from './containers/MovieListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id='logo-img' alt='movie thumbnail' src={shoppiesIcon} />
        <h1>The Shoppies</h1>
      </header>
      <MovieListContainer />
    </div>
  );
}

export default App;
