import logo from './logo.svg';
import './App.css';

console.log("if routes not working, check HTACCESS filepaths")

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>JACOBUS</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://jakebrenneman.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GO BACK to jakebrenneman.com
        </a>
      </header>
    </div>
  );
}

export default App;
