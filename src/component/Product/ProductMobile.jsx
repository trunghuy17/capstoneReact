import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductMobile({ product }) {
  return (
    <div className="row productMobile">
      <img src={product.image} alt="..." className="col-5" />
      <div className="col-7">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <NavLink to={`/detail/${product.id}`} className="btn btn-dark">
          Detail
        </NavLink>
      </div>
    </div>
  );
}
