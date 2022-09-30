import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../component/Product/Product";
import { addGiohang } from "../../redux/reducers/cartReducer";
import { getById } from "../../redux/reducers/productReducer";

export default function Detail() {
  const dispatch = useDispatch();
  const params = useParams();
  const { productDetail } = useSelector((stare) => stare.productReducer);
  const { gioHang } = useSelector((state) => state.cartReducer);
  console.log({ gioHang });

  useEffect(() => {
    const action = getById(params);
    dispatch(action);
  }, [params]);
  console.log({ productDetail });
  const themGiohang = (productDetail) => {
    // dispatch lên redux 1 productDetail

    const action = addGiohang(productDetail);
    dispatch(action);
  };

  return (
    <div className="container detail">
      <div className="row">
        <div className="product_img col-6" id="image">
          <img src={productDetail.image} alt="..." />
        </div>
        <div className="product_title col-6">
          <h1>{productDetail.name}</h1>
          <p id="des">{productDetail.description}</p>
          <h3>Available size</h3>
          <div id="btn">
            {productDetail?.size?.map((size, index) => {
              return <button key={index}>{size}</button>;
            })}
          </div>
          <h4>{productDetail.price}$</h4>
          <div className="so_luong">
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>
          <button
            onClick={() => {
              themGiohang(productDetail);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="realate-product">
        <h3>-Realate Product -</h3>
        <div className="row">
          {productDetail?.relatedProducts?.map((prod, index) => {
            return (
              <div className="col-3" key={index}>
                <Product product={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
