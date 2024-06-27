import "./ProductsPage.css";
import { Product } from "../../models/product.model";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Page } from "../../Layout/Page/Page";
import { useAppSelector } from "../../utils/hooks";

function ProductsPage() {
  const products = useAppSelector(state => state.products.value);

  const [searchParams, setSearchParams] = useSearchParams();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const sortBy = searchParams.get("sortBy");
  const query = searchParams.get("q");

  if (sortBy === "price")
    products.sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1));

  const onSearch = useCallback(
    (value: string) => {
      setSearchParams(prevParams => {
        prevParams.set("q", value);
        return prevParams;
      });

      setFilteredProducts(
        products.filter(product =>
          product.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [products, setSearchParams]
  );

  useEffect(() => {
    setFilteredProducts(products);
  }, [products, onSearch]);

  useEffect(() => {
    if (query) onSearch(query);
  }, [query, onSearch]);

  return (
    <Page title="Products">
      <div>
        <SearchInput onSearch={onSearch} defaultValue={query} />
      </div>
      <div className="ProductsPage card-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found!</div>
        )}
      </div>
    </Page>
  );
}

export default ProductsPage;
