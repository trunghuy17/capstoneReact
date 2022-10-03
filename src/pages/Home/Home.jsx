import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Product from "../../component/Product/Product";
import { getProductApi } from "../../redux/reducers/productReducer";

export default function Home() {
  // Lấy dữ liều từ redux
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);
  return (
    <div className=" home">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <div className="row">
              <div className="col-8 product_img">
                <img src={arrProduct[18]?.image} className=" " alt="..." />
              </div>
              <div className="tital col-4  ">
                <div>
                  <p className="tital_Name">{arrProduct[18]?.name}</p>
                  <p className="titail_desc">
                    {arrProduct[18]?.shortDescription}
                  </p>
                  <NavLink to={`detail/${arrProduct[18]?.id}`}>Buy now</NavLink>
                </div>
              </div>
            </div>
          </div>
          {arrProduct?.map((prod, index) => {
            return (
              <div className="carousel-item" key={index}>
                <div className="row">
                  <div className="col-8 product_img">
                    <img src={prod?.image} className=" " alt="..." />
                  </div>
                  <div className="tital col-4  ">
                    <div>
                      <p className="tital_Name">{prod?.name}</p>
                      <p className="titail_desc">{prod?.shortDescription}</p>
                      <NavLink to={`detail/${prod.id}`}>Buy now</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="feature-home container">
        <h2 className="">Product Feature </h2>

        <div className="row">
          {arrProduct.map((prod, index) => {
            return (
              <div className="col-4 mt-3" key={index}>
                <Product product={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
