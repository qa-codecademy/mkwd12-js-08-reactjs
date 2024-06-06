import { useState } from "react";
import Button from "../../Components/Button/Button";
import { CounterClass } from "../../Components/CounterClass/CounterClass";
import CounterHooks from "../../Components/CounterHooks/CounterHooks";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Product } from "../../models/product.model";
import "./ProductPage.css";

function ProductPage() {
  const [showCounters, setShowCounters] = useState(true);

  const productsMock: Product[] = [
    {
      title: "TV",
      description: "A very nice LED TV",
      price: 599.98,
      stock: 1,
    },
    {
      title: "Dishwasher",
      description: "Freedom from the kitchen sink guaranteed",
      price: 299.99,
      stock: 5,
    },
    {
      title: "Fridge",
      description: "You will not resist the urge to open me all the time",
      price: 999.99,
      stock: 0,
    },
  ];

  const printFullName = (fullname: string) => {
    console.log(fullname);
  };

  const onNameBtnClick = () => {
    printFullName("Test Test");
  };

  return (
    <section className="ProductPage">
      <h2>Available Products</h2>
      <div className="products-container">
        {productsMock.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {/* <button
        onClick={() => {
          printFullName("Test Rest");
        }}
      >
        Print Full Name
      </button>
      <button
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Vanilla Click Me
      </button> */}

      <Button text="Print Name" onBtnClick={onNameBtnClick} />
      <Button
        text="Toggle Counters"
        onBtnClick={() => {
          setShowCounters(prev => !prev);
        }}
      />
      {showCounters && (
        <>
          <h2>Counters</h2>
          <CounterClass title="Class Counter" />
          <CounterHooks title="Hooks Counter" />
        </>
      )}
    </section>
  );
}

export default ProductPage;
