import "./App.css";
import {
  HashRouter as Router
} from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
