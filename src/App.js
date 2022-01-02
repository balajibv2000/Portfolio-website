import './App.css';
import { HashRouter } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Home />
      </HashRouter>
    </div>
  );
}

export default App;
