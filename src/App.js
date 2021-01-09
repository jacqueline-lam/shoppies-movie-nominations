import logo from './logo.svg';
import './App.css';
import MovieListContainer from './containers/MovieListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Shoppies</h1>
      </header>
      <MovieListContainer />
    </div>
  );
}

export default App;
