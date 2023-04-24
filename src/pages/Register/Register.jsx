import { useState } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//scss
import "./register.scss";
//component
import { LoginSideBar } from "../../components/Navbar/LoginSideBar";

const Register = () => {
  //for LoginMenu
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  //register
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    lastname: "",
    password: "",
    retypepassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    clearMessages();

    if (name.length < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name cannot be blank",
      }));
    }
    if (lastName.length < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastname: "Last Name cannot be blank",
      }));
    }

    if (!emailIsValid(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    }

    if (password.length < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter password",
      }));
    }
    if (reTypePassword.length < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        retypepassword: "Please enter password again",
      }));
    }
  }

  function clearMessages() {
    setErrors({
      name: "",
      email: "",
      lastname: "",
      password: "",
      retypepassword: "",
    });
  }

  function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  return (
    <div id={showLoginMenu ? "showLogin" : ""}>
      <LoginSideBar onClose={() => setShowLoginMenu(!showLoginMenu)} />
      <div className="container-fluid-register">
        <div className="px-10">
          <div className="text-center">
            <h1>WELCOME</h1>
          </div>
        </div>
        <div className="register-main">
          <div className="signup">
            <div className="form-holder">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <h1>Sign up</h1>
                  </div>
                  <div className="col mb-20">
                    <label>First Name</label>
                    <input
                      type="text"
                      id="name"
                      className={
                        errors.name ? "error-border text-input" : "text-input"
                      }
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="error">{errors.name}</span>
                  </div>
                  <div className="col mb-20">
                    <label>Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className={
                        errors.lastname
                          ? "error-border text-input"
                          : "text-input"
                      }
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <span className="error">{errors.lastname}</span>
                  </div>
                  <div className="col mb-20">
                    <label>Email Address</label>
                    <input
                      type="text"
                      id="email"
                      className={
                        errors.email ? "error-border text-input" : "text-input"
                      }
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="error">{errors.email}</span>
                  </div>
                  <div className="col mb-20">
                    <label>Password</label>
                    <input
                      type="password"
                      id="password"
                      className={
                        errors.password
                          ? "error-border text-input"
                          : "text-input"
                      }
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="error">{errors.password}</span>
                  </div>
                  <div className="col mb-20">
                    <label> Re-type password</label>
                    <input
                      type="password"
                      id="rePassword"
                      className={
                        errors.retypepassword
                          ? "error-border text-input"
                          : "text-input"
                      }
                      onChange={(e) => setReTypePassword(e.target.value)}
                    />
                    <span className="error">{errors.retypepassword}</span>
                  </div>
                  <div className="col py-10">
                    <div className="input-holder">
                      <input
                        type="checkbox"
                        name="newsLetter"
                        className="checkbox"
                      />
                      <label>
                        I approve to receive commercial electronic mail to my
                        contact info from KAFT and the data I have provided
                        above can be used by KAFT and can be transferred by KAFT
                        to services providers in line with this purpose within
                        the scope of{" "}
                        <Link>
                          Acknowledgement Letter regarding Personal Data .
                        </Link>
                      </label>
                    </div>
                  </div>
                  <div className="col py-10">
                    <div className="input-holder">
                      <input
                        type="checkbox"
                        name="newsLetter"
                        className="checkbox"
                      />
                      <label>
                        I agree with the terms and conditions of the{" "}
                        <Link>Membership Agreement .</Link>
                      </label>
                      <label>This field is required</label>
                    </div>
                  </div>
                  <div className="col mb-20 fontsize">
                    Your personal data is processed within the scope of the{" "}
                    <Link>Acknowledgement Letter.</Link>
                  </div>
                  <div className="col">
                    <input type="submit" className="submit" value="Join KAFT" />
                  </div>
                  <div className="col">
                    <div className="login-link">
                      <span>I signed up before</span>
                      <button onClick={() => setShowLoginMenu(!showLoginMenu)}>
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="info-holder">
              <ul className="info-list">
                <li className="text-center">
                  <h4>WHEN YOU JOIN KAFT;</h4>
                </li>
                <div className="mb-20 item">
                  <i class="fa-regular fa-bell icon"></i>
                  <p>We update you about what's new in the world of KAFT.</p>
                </div>
                <div className="mb-20 item">
                  <i class="fa-solid fa-ticket-simple icon"></i>
                  <p>You get a priority on campaigns and discounts.</p>
                </div>
                <div className="mb-20 item">
                  <i class="fa-regular fa-comment-dots icon"></i>
                  <p>
                    We consult you first when we need to get an idea to create a
                    new item or develop a new design.
                  </p>
                </div>
                <div className="mb-20 item">
                  <i class="fa-solid fa-calendar-days icon"></i>
                  <p>
                    We inform you first about KAFT events and you get the chance
                    to become one of our special guests.
                  </p>
                </div>
                <div className="mb-20 item">
                  <i class="fa-solid fa-shirt icon"></i>
                  <Link>Students Get %20 Off</Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
