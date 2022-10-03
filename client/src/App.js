import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Graph";
import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                Home
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to="/login"> Login</Link>
                </li>

                <li>
                  <Link to="/registration"> Registration</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/registration" exact component={Registration} /> */}
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
