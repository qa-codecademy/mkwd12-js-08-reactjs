import { Product } from "../../models/product.model";
import "./ProductInfoHooks.css";
import React, { useEffect } from "react";

interface ProductInfoHooksProps {
  selectedProduct: Product | null;
}

function ProductInfoHooks({ selectedProduct }: ProductInfoHooksProps) {
  // let intervalCount = 0;

  //The same as componentDidMount
  // useEffect(() => {
  //   console.log("use effect called once with no depedencies");
  //   const intervalId = setInterval(() => {
  //     intervalCount++;
  //     console.log(intervalCount);
  //   }, 1000);

  //   //Function returned from useEffect is same as componentWillUnmount
  //   return () => {
  //     console.log("Component unmounted, useEffect return func called");
  //     clearInterval(intervalId);
  //   };
  // }, [intervalCount]);

  useEffect(() => {
    console.log("use effect called only when selected product changes");
  }, [selectedProduct]);

  //The same as componentDidUpdate
  useEffect(() => {
    // console.log("use effect called");
  });

  return (
    <div className="ProductInfo">
      {selectedProduct ? (
        <div className="info-card">
          <h3>{selectedProduct.title}</h3>
          <div className="info-body">
            <img src={selectedProduct.image} alt="" />
            <div>
              <p>{selectedProduct.description}</p>
              <p>Category: {selectedProduct.category}</p>
              <p>Rating: {selectedProduct.rating.rate}/5</p>
              <p>Review Count: {selectedProduct.rating.count}</p>
              <p>
                <strong>Price: ${selectedProduct.price}</strong>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="info-card not-selected">
          <h3>No Product Selected</h3>
        </div>
      )}
    </div>
  );
}

export default ProductInfoHooks;
