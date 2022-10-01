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
  // const { userUpdate, setUserUpdate } = useState("");
  const { userLogin } = useSelector((state) => state.userReducer);
  const { userUpdate } = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProfileApi(getStore(ACCESS_TOKEN));
    dispatch(action);
  }, []);
  const renderOrderHistory = () => {
    return userLogin?.ordersHistory?.map((order, index) => {
      return (
        <div className="orderDetail" key={index}>
          <h3>
            + Orders have been placed on{" "}
            {moment(order?.date).format("DD/MM/YYYY hh:mm:ss A")}
          </h3>
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
  const handleChange = (e) => {
    let { id, value } = e.target.value;
    // userUpdate[id] = value;
    console.log("userUpdate:", value);
  };
  const hanndleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container profile">
      <h3>Profile</h3>
      <div className="row">
        <img src={userLogin?.avatar} alt="..." className="col-3" />

        <form className="col-9" onSubmit={hanndleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  // value={userLogin.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <p>Phone</p>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  // value={userLogin.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  // value={userLogin.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  // value={userLogin.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <p className="col">Gender</p>
            <div className="col">
              <input
                type="radio"
                name="gender"
                id="male"
                value="true"
                onChange={handleChange}
              />
              <p>Male</p>
            </div>
            <div className="col">
              <input
                type="radio"
                name="gender"
                id="femail"
                value="false"
                onChange={handleChange}
              />
              <p>Femail</p>
            </div>
            <button type="submit" className="col mt-2">
              Update
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div className="">
        <button className="btn btn-dark text-light">Order history</button>
        <button className="btn btn-success ">Favourite</button>
      </div>

      {renderOrderHistory()}
    </div>
  );
}
