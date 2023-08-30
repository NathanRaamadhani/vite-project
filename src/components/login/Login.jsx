import { useState } from "react";
import { usePocket } from "../../contexts/PocketContexts";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, login } = usePocket();

  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Login</header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            register(email, password).then(() => {
              console.log("user created");
            });
          }}
        >
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              login(email, password).then(console.log("user logged in"));
            }}
          >
            Login
          </button>
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              register(email, password).then(() => {
                login(email, password).then(console.log("user logged in"));
              });
            }}
          >
            Register and Login
          </button>
          <br />
          <a href="#">Forgot password?</a>
          
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account?
            <label for="check">Signup</label>
          </span>
        </div>
      </div>
      <div className="registration form">
        <header>Signup</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Create a password" />
          <button
            onClick={(e) => {
              e.preventDefault();
              register(email, password).then(() => {
                login(email, password).then(console.log("user logged in"));
              });
            }}
          >
            Register
          </button>
        </form>
        <div className="signup">
          <span className="signup">
            Already have an account?
            <label for="check">Login</label>
          </span>
        </div>
      </div>
    </div>
  );
}
