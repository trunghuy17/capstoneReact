import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { signupApi } from "../../redux/reducers/userReducer";

export default function Register() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      gender: true,
      phone: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không bỏ trống !")
        .email("Email không đúng định dạng !"),
      password: Yup.string().required("Password không bỏ trống !"),
      passwordConfirm: Yup.string().required("Không được bỏ trống"),
      name: Yup.string().required("Name không được bổ trống!"),
      phone: Yup.string().required("Phone không đcược bỏ trống !"),
    }),
    onSubmit(value) {
      console.log({ value });
      let { password, passwordConfirm } = value;
      console.log({ password, passwordConfirm });
      if (password !== passwordConfirm) {
        document.querySelector(".error_password").innerHTML =
          "Passowrd Confirm không đúng!";
      } else {
        document.querySelector(".error_password").innerHTML = "";

        const action = signupApi(value);
        dispatch(action);
      }
    },
  });
  return (
    <div className="regitster">
      <div className="container">
        <h1>Regitster</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className=" form-group">
                <p>Email</p>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email ? (
                  <p className="error_text">{formik.errors.email}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group css_password">
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
                      if (
                        document.querySelector("#password").type === "password"
                      ) {
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
              <div className="form-group css_password">
                <p>Password Confirm</p>

                <div className="input-group ">
                  <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <span
                    className=" input-group-text"
                    onClick={() => {
                      if (
                        document.querySelector("#passwordConfirm").type ===
                        "password"
                      ) {
                        document.querySelector("#passwordConfirm").type =
                          "text";
                      } else {
                        document.querySelector("#passwordConfirm").type =
                          "password";
                      }
                    }}
                  >
                    <i className="fa fa-eye"></i>
                  </span>
                </div>
                <p className="error_password"></p>
                {formik.errors.passwordConfirm ? (
                  <p className="error_text">{formik.errors.passwordConfirm}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-6">
              <div className=" form-group">
                <p>Name</p>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name ? (
                  <p className="error_text">{formik.errors.name}</p>
                ) : (
                  ""
                )}
              </div>
              <div className=" form-group">
                <p>Phone</p>
                <input
                  className="form-control"
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone ? (
                  <p className="error_text">{formik.errors.phone}</p>
                ) : (
                  ""
                )}
              </div>
              <div className=" form-group gender row">
                <p className="col-3">Gender: </p>
                <div className="col-9 row">
                  <div className="col-6 text-center">
                    <input
                      type="radio"
                      name="gender"
                      value={true}
                      checked
                      onChange={formik.handleChange}
                    />
                    <p>Male</p>
                  </div>
                  <div className="col-6 text-center">
                    <input
                      type="radio"
                      name="gender"
                      value={false}
                      onChange={formik.handleChange}
                    />
                    <p>Femail</p>
                  </div>
                </div>
              </div>
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
