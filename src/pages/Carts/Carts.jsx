import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tangGiam } from "../../redux/reducers/cartReducer";

export default function Carts() {
  const { gioHang } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const tangGiamSL = (id, bool) => {
    //đưa lên redux 1 giỏ hàng mới {}
    let value = {
      id,
      bool,
    };
    const action = tangGiam(value);
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
                  <input type="checkbox" />
                </td>
                <td>{prod.id}</td>
                <td>
                  <img src={prod.image} alt="" />
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <button
                    onClick={() => {
                      tangGiamSL(prod.id, true);
                    }}
                  >
                    +
                  </button>
                  {prod.quantity}
                  <button
                    onClick={() => {
                      tangGiamSL(prod.id, false);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{prod.price * prod.quantity}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button type="submit" className="">
          SUBMIT ORDER
        </button>
      </div>
    </div>
  );
}
