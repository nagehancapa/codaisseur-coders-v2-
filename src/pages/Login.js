import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onLoginSubmit}>
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

export default Login;
