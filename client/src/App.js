import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Background from "./assets/background.jpg";

function App() {
  return (
    <div
      className="App bg-cover"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
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
        <Route path="/dashboard">
          <Header />
          <Dashboard />
        </Route>
      </Router>
    </div>
  );
}

export default App;
