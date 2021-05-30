import { useState } from "react";
import { signup } from "../store/user/actions";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSignupSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(signup(name, email, password));
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={onSignupSubmit}>
        <div>
          <label style={{ marginRight: 20 }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
