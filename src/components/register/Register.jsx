import { useState } from "react";
import { usePocket } from "../../contexts/PocketContexts";
import "./Register.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, login } = usePocket();

  return (
    <>
      <img className="wave" src="/wave.png" />
      <div className="container">
        <div className="img">
          <img src="/bg.svg" />
        </div>
        <div className="login-content">
          <form
            action="index.html"
            onSubmit={(e) => {
              e.preventDefault();
              register(email, password).then(() => {
                console.log("user created");
              });
            }}
          >
            <img src="/vite.svg" />
            <h2 className="title">Welcome and Register</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                register(email, password).then(() => {
                  login(email, password).then(console.log("user logged in"));
                });
              }}
            >
              Register and Login
            </button>
            <div className="reg">

              <a href="/">Have account?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
