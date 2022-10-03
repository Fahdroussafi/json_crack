import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Graph";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/registration">
          <Register />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
