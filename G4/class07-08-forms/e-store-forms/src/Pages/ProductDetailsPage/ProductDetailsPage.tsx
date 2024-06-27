import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import { Product } from "../../models/product.model";
import { Page } from "../../Layout/Page/Page";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";

function ProductDetailsPage() {
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const foundProduct = products.find(product => product.id === Number(id));

    if (products.length > 0 && !foundProduct) navigate("/not-found");

    if (foundProduct) {
      setSelectedProduct(foundProduct);
    }

    console.log("products changed");
    console.log(products);
  }, [products, id, navigate]);

  return (
    <Page title="Product Details">
      {selectedProduct && <ProductDetailsPanel product={selectedProduct} />}
    </Page>
  );
}

export default ProductDetailsPage;
