import React from "react";

export default function Product({ product }) {
  const renderFeature = () => {
    const value = product?.feature;
    if (value === true) {
      return <i className=" fa  fa-heart feature_like"></i>;
    }
    return <i className=" fa  fa-heart feature"></i>;
  };
  return (
    <div className="card">
      <img src={product.image} alt="..." />
      {renderFeature()}
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <div>
          <button>Buy now</button>
          <p>{product.price}$</p>
        </div>
      </div>
    </div>
  );
}
