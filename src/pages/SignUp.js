import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignupSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={onSignupSubmit}>
        <div>
          <label style={{ marginRight: 20 }}>Name</label>
          <input
            type="name"
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
