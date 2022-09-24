import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../../component/Product/Product";
// let timeout = null;
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);

  const typingTimeoutRef = useRef(null);
  const handleChange = (e) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const value = e.target.value;
      console.log(value);
      setSearchParams({
        keyword: value,
      });
    }, 500);
  };
  const getProductByKeywordApi = async () => {
    // call api (b2-> gọi apo sau lần đầu tiên load trang)
    try {
      if (searchParams.get("keyword") !== null) {
        const result = await axios({
          url: `https://shop.cyberlearn.vn/api/Product?keyword=${searchParams.get(
            "keyword"
          )}`,
          method: "GET",
        });

        setArrProduct(result.data.content);
        // b3: sau khi lấy api thành công về -> state thay đổi -> giao diện render lại (Kết thúc lần 1 )
        // Lần 2 (Bước 6)
        console.log(result.data.content);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   timeout = setTimeout(() => {
  //     getProductByKeywordApi();
  //   }, 300);
  //   return () => {
  //     if (timeout !== null) {
  //       clearTimeout(timeout);
  //     }
  //   };
  // }, [searchParams.get("keyword")]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      getProductByKeywordApi();
    }, 500);
  }, [searchParams.get("keyword")]);
  return (
    <div className="container">
      <form className="search " onSubmit={handleSubmit}>
        <div className="form-group ">
          <p>Search</p>
          <input
            placeholder="Product name"
            name="search"
            id="search"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <h3>Search Result</h3>
      <div className="row">
        {arrProduct?.map((prod, index) => {
          return (
            <div className="col-3" key={index}>
              <Product product={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
