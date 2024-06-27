import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/product.type";
import ProductCard from "./ProductsCard";
import Grid from "@mui/material/Grid";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleFetchProducts = async () => {
    const url = "https://fakestoreapi.com/products";

    const response = await axios.get(url);
    const products: Product[] = response.data;
    console.log(products);

    setProducts(products);
  };

  useEffect(() => {
    if (products.length > 0) return;
    handleFetchProducts();
  }, []);

  return (
    <section>
      <Grid container gap={10}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </section>
  );
};
