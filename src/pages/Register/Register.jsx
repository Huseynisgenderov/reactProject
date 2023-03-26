import "./register.scss";

const Register = () => {
  return (
    <div>
      <div className="container-fluid-register">
        <div className="px-10">
          <div className="text-center">
            <h1>WELCOME</h1>
          </div>
        </div>
        <div className="register-main">
          <div className="signup">
            <div className="form-holder">
              <form>
                <div className="row">
                  <div className="col">
                    <label>First Name</label>
                    <input type="text" />
                    <span className="error"></span>
                  </div>
                  <div className="col">
                    <label>Last Name</label>
                    <input type="text" />
                    <span className="error"></span>
                  </div>
                  <div className="col">
                    <label>Email Address</label>
                    <input type="text" />
                    <span className="error"></span>
                  </div>
                  <div className="col">
                    <label>Password</label>
                    <input type="password" />
                    <span className="error"></span>
                  </div>
                  <div className="col">
                    <label> Re-type password</label>
                    <input type="password" />
                    <span className="error"></span>
                  </div>
                </div>
              </form>
            </div>
            <div className="info-holder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
