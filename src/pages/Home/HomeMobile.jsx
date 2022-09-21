import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../component/Product/Product";
import { getProductApi } from "../../redux/reducers/productReducer";

import { NavLink } from "react-router-dom";
export default function HomeMobile() {
  // Lấy dữ liều từ redux
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);
  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="d-flex mt-2" key={index}>
          <img src={prod.image} alt="..." className="w-25" />
          <div className="w-75">
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <NavLink to={`/detail/${prod.id}`} className="btn btn-dark">
              Detail
            </NavLink>
          </div>
        </div>
      );
    });
  };
  return (
    <div className=" container">
      <h3 className="text-center">Shoes app </h3>
      {renderProduct()}
    </div>
  );
}
