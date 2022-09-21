import React from "react";

export default function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <hr />
      <form>
        <div className="form-group">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control mb-3"
          />
        </div>
        <div className="form-group" id="css_password">
          <p>Password</p>

          <div className="input-group ">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />

            <span className=" input-group-text">
              <i className="fa fa-eye"></i>
            </span>
          </div>
        </div>

        <div className="form-bottom">
          <div>
            <p>Register now ? </p>
            <button className=" "> LOGIN</button>
          </div>
          <div className="facebook">
            <button>
              <i className="fa fa-facebook"></i>
              Continue with Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
