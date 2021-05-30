import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./store/user/selectors";
import { logout, bootstrapLogin, setToken } from "./store/user/actions";
import { useEffect } from "react";

const NavBar = () => {
  const profile = useSelector(getUserProfile);
  console.log(profile);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 20, marginLeft: 10 }}>
        <NavLink to="/" style={{ fontSize: 20 }}>
          Home
        </NavLink>
      </div>
      {!profile ? (
        <>
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
        </>
      ) : (
        <>
          <div style={{ marginRight: 20, marginLeft: 10 }}>
            <NavLink to="/newpost" style={{ fontSize: 20 }}>
              Create a Post
            </NavLink>
          </div>
          <div>
            <h3>Hello {profile.name}!</h3>
          </div>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      )}
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(bootstrapLogin(token));
      dispatch(setToken(token));
    }
  }, []);

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
