import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { facebookLoginAPi, signinApi } from "../../redux/reducers/userReducer";
// import FacebookLogin from "react-facebook-login";
export default function Login(props) {
  const responseFacebook = (response) => {
    console.log(response);
    console.log("TokenFacebook", response.accessToken);
    const action = facebookLoginAPi(response.accessToken);
    dispatch(action);
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không bỏ trống !")
        .email("Email không đúng định dạng !"),
      password: Yup.string().required("Password không bỏ trống !"),
    }),
    onSubmit: (value) => {
      console.log(value);
      const action = signinApi(value);
      dispatch(action);
    },
  });
  return (
    <div className="container login">
      <h2>Login</h2>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control mb-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ? (
            <p className="error_text">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group" id="css_password">
          <p>Password</p>

          <div className="input-group ">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <span
              className=" input-group-text"
              onClick={() => {
                if (document.querySelector("#password").type === "password") {
                  document.querySelector("#password").type = "text";
                } else {
                  document.querySelector("#password").type = "password";
                }
              }}
            >
              <i className="fa fa-eye"></i>
            </span>
          </div>

          {formik.errors.password ? (
            <p className="error_text">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>

        <div className="form-bottom">
          <div>
            <NavLink className="nav-link" to="/register">
              Register now ?
            </NavLink>
            <button type="submit"> LOGIN</button>
          </div>
          <div className="facebook">
            {/* <FacebookLogin
              appId="1972667653124048"
              fields="name,email,picture"
              callback={responseFacebook}
            /> */}
          </div>
        </div>
      </form>
    </div>
  );
}
