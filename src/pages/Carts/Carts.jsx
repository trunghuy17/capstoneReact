import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAction,
  postOrder,
  postOrderAction,
  tangGiam,
} from "../../redux/reducers/cartReducer";
import { getStore, getStoreJSON, USER_LOGIN } from "../../util/config";

export default function Carts() {
  const { gioHang, order } = useSelector((state) => state.cartReducer);
  console.log({ gioHang });
  const dispatch = useDispatch();
  const tangGiamSL = (id, bool) => {
    let value = {
      id,
      bool,
    };
    const action = tangGiam(value);
    dispatch(action);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let { email } = getStoreJSON(USER_LOGIN);

    let order = {
      email: email,
      orderDetail: gioHang,
    };
    const action = postOrder(order); // truyển data order
    dispatch(action);
  };
  const deleteCart = (id) => {
    console.log({ id });
    const action = deleteAction(id);
    dispatch(action);
  };
  return (
    <div className="cart container">
      <h1>Cart</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="check" id="check" />
            </th>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {gioHang?.map((prod, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value={true}
                    id="checkbox"
                    onClick={() => {}}
                  />
                </td>
                <td>{prod.productId}</td>
                <td>
                  <img src={prod.image} alt="" />
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td className="quantity">
                  <button
                    onClick={() => {
                      tangGiamSL(prod.productId, true);
                    }}
                  >
                    +
                  </button>
                  <span>{prod.quantity}</span>
                  <button
                    onClick={() => {
                      tangGiamSL(prod.productId, false);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{prod.price * prod.quantity}</td>
                <td className="action">
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => {
                      deleteCart(prod.productId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button type="submit" onClick={handleSubmit}>
          SUBMIT ORDER
        </button>
      </div>
    </div>
  );
}
