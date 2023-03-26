import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const LoginSideBar = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    clearMessages();
    let errorFlag = false;

    if (!emailIsValid(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      errorFlag = true;
    }
    if(password === ""){
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Empty password",
          }));
    }
  }

  function clearMessages() {
    setErrors({ email: "", password: "" });
  }

  function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  return (
    <div className="login-sidebar">
      <div className="login-flex">
        <div className="login-header">
          <h5 className="login-title">Login</h5>
          <button onClick={onClose}>
            <i class="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="login-body">
          <div className="login-parent">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label>Email Address</label>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? "error-border" : ""}
                  />
                  <span className="error">{errors.email}</span>
                </div>
                <div className="col">
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors.password ? "error-border" : ""}
                  />
                  <span className="error">{errors.password}</span>
                </div>
                <div className="col">
                  <div className="col-row">
                    <div className="col-left">
                      <input type="checkbox" />
                      <label htmlFor="">Remember me</label>
                    </div>
                    <div className="col-right">
                      <Link>Forgot password</Link>
                    </div>
                  </div>
                </div>
                <button className="button">Login</button>
                <div className="or">
                  <span>Or</span>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="left">
                <Link>
                  <i class="fa-brands fa-facebook-f"></i>Login
                </Link>
              </div>
              <div className="right">
                <Link to="/register">Join Kaft</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
