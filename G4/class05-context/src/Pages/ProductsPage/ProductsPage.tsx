import "./ProductsPage.css";
import { Product } from "../../models/product.model";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Page } from "../../Layout/Page/Page";
import { ProductsContext } from "../../Contexts/ProductsContext";

function ProductsPage() {
  const { products } = useContext(ProductsContext);

  const [searchParams] = useSearchParams();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const sortBy = searchParams.get("sortBy");

  if (sortBy === "price") products.sort((a, b) => (a.price > b.price ? 1 : -1));

  const onSearch = (value: string) => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <Page title="Products">
      <div>
        <SearchInput onSearch={onSearch} />
      </div>
      <div className="ProductsPage card-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}

export default ProductsPage;
