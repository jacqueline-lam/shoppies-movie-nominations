import './App.css';
import shoppiesIcon from './images/logo192.png';
import ShoppiesContainer from './containers/ShoppiesContainer';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="brand">
          <img id="logo-img" alt="movie thumbnail" src={shoppiesIcon} />
          <span>The Shoppies</span>
        </div>
        <div id="contact">
          <i className="italics">— by Jacqueline Lam</i>
          <IconButton
            aria-label="source code on github"
            color="primary"
            size="small"
            onClick={() => window.open('https://github.com/jacqueline-lam/shoppies-movie-nominations')}
          >
            <GitHubIcon size="small" />
          </IconButton >
          <IconButton
            aria-label="LinkedIn profile"
            color="primary"
            size="small"
            onClick={() => window.open('https://www.linkedin.com/in/jacquelineklam/')}
          >
            <LinkedInIcon size="small" />
          </IconButton>
        </div>
      </header>
      <ShoppiesContainer />
    </div>
  );
};

export default App;
