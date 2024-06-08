import ProductList from "../../Components/ProductList/ProductList";
import "./ProductsPage.css";
import productsJSON from "../../data/products.json";
import { Product } from "../../models/product.model";
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import ProductInfoHooks from "../../Components/ProductInfoHooks/ProductInfoHooks";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isInfoShown, setIsInfoShown] = useState(true);

  //How to create an infinite useEffect call in react
  // useEffect(() => {
  //   console.log(isInfoShown);
  //   setIsInfoShown(prev => !prev);
  // }, [isInfoShown]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsJSON);
    }, 2000);
  }, []);

  const onSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  console.log("product page parent rerendered");

  return (
    <section className="ProductsPage">
      <Button
        text="Toggle Info Panel"
        style={{ marginLeft: "20px" }}
        onBtnClick={() => setIsInfoShown(prev => !prev)}
      />
      <div className="content">
        <ProductList products={products} onSelectProduct={onSelectProduct} />
        {isInfoShown && <ProductInfoHooks selectedProduct={selectedProduct} />}
      </div>
    </section>
  );
}

export default ProductsPage;
