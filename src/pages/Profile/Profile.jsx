import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileApi,
  updateProfileApi,
} from "../../redux/reducers/userReducer";
import moment from "moment";
import { useFormik } from "formik";
import { ACCESS_TOKEN, getStore } from "../../util/config";
export default function Profile(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProfileApi(getStore(ACCESS_TOKEN));
    dispatch(action);
  }, []);
  const renderOrderHistory = () => {
    return userLogin?.ordersHistory?.map((order, index) => {
      return (
        <div className="orderDetail mt-2" key={index}>
          <h4>
            + Orders have been placed on{" "}
            {moment(order?.date).format("DD/MM/YYYY hh:mm:ss A")}
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>img</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {order?.orderDetail.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img src={item.image} width={50} alt="..." />
                    </td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      phone: "",
      gender: "",
      name: "",
    },
    onSubmit(value) {
      value.eamil = userLogin.email;
      const action = updateProfileApi(value);
      dispatch(action);
    },
  });
  return (
    <div className="container-sm  profile">
      <h3>Profile</h3>
      <div className="row">
        <div className="col-xs-12 col-lg-3">
          <img src={userLogin?.avatar} alt="..." />
        </div>

        <form className="col-lg-9" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={userLogin?.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Phone</p>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group row">
                <p className="col">Gender</p>
                <div className="col text-center">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="true"
                    onChange={formik.handleChange}
                  />
                  <p>Male</p>
                </div>
                <div className="col text-center">
                  <input
                    type="radio"
                    name="gender"
                    id="femail"
                    value="false"
                    onChange={formik.handleChange}
                  />
                  <p>Femail</p>
                </div>
                <button type="submit" className="col mt-2">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="">
        <button className="btn btn-dark text-light">Order history</button>
        <button className="btn btn-success  mx-2">Favourite</button>
      </div>

      {renderOrderHistory()}
    </div>
  );
}
