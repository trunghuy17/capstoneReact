import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByKeywordApi,
  setArrProductBySort,
} from "../../redux/reducers/searchProductReducer";
import Product from "../../component/Product/Product";

export default function Search() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { arrProduct } = useSelector((state) => state.searchProductReducer);
  const typingTimeoutRef = useRef(null);

  useEffect(
    () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        const action = getProductByKeywordApi(searchParams);
        dispatch(action);
      }, 500);
    },
    [searchParams.get("keyword")],
    []
  );
  useEffect(() => {});
  const handleChange = (e) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const value = e.target.value;
      console.log(value);
      if (value === "ascending") {
        //ascending: tăng dần
        const arrNewProduct = _.sortBy(arrProduct, ["price"]);
        arrProduct = arrNewProduct;
      } else {
        setSearchParams({
          keyword: value,
        });
      }
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // Hàm xử lý sortByPrice
  let sortByPrice = () => {
    let value = document.querySelector("#sortByPrice")?.value;
    console.log(value);
    if (value === "ascending") {
      //ascending: tăng dần
      const arrNewProduct = _.sortBy(arrProduct, ["price"]);
      const action = setArrProductBySort;
      dispatch(action);
    }
  };
  return (
    <div className="container">
      <form className="search " onSubmit={handleSubmit}>
        <p>Search</p>
        <div className="form-group ">
          <input
            placeholder="Product name"
            name="search"
            id="search"
            className="form-control"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <h2>Search Result</h2>
      <div className="form-group">
        <p>Price</p>
        <select
          className="form-control"
          id="sortByPrice"
          onChange={handleChange}
        >
          <option value="decrease">decrease</option>
          <option value="ascending">ascending</option>
        </select>
      </div>
      <div className="row">
        {arrProduct?.map((prod, index) => {
          return (
            <div className="col-sm-12 col-lg-5 mt-4" key={index}>
              <Product product={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
