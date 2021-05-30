import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/CreatePost";

const NavBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 20, marginLeft: 10 }}>
        <NavLink to="/" style={{ fontSize: 20 }}>
          Home
        </NavLink>
      </div>
      <div style={{ marginRight: 20, marginLeft: 10 }}>
        <NavLink to="/login" style={{ fontSize: 20 }}>
          Login
        </NavLink>
      </div>
      <div style={{ marginRight: 20, marginLeft: 10 }}>
        <NavLink to="/signup" style={{ fontSize: 20 }}>
          SignUp
        </NavLink>
      </div>
      <div style={{ marginRight: 20, marginLeft: 10 }}>
        <NavLink to="/newpost" style={{ fontSize: 20 }}>
          Create a Post
        </NavLink>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/newpost" component={CreatePost} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
