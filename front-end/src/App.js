import './App.css';
import Timer from './components/timer';
import Input from './components/input-component';
import Home from './components/Home/Home';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Input />
        <Timer />
      </Router>
    </div>
  );
}

export default App;
