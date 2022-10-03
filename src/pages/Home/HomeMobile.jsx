import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducers/productReducer";

import { NavLink } from "react-router-dom";
import ProductMobile from "../../component/Product/ProductMobile";
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
          <ProductMobile product={prod} />
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
