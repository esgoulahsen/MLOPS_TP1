import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <form>
        <label>
          Name:
          <input type="text" name="Name" />
        </label>
        <input type="button" name="nom" value="Submit" onClick={() => alert("Success")}/>
      </form>

        
      </header>
    </div>
  );
}

export default App;