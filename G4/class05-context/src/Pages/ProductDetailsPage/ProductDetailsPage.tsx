import { Navigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import { Product } from "../../models/product.model";
import { Page } from "../../Layout/Page/Page";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";

function ProductDetailsPage() {
  const { products } = useContext(ProductsContext);

  const { id } = useParams();
  // const navigate = useNavigate();

  const foundProduct = products.find(
    product => product.id === Number(id)
  ) as Product;

  // useEffect(() => {
  //   if (!foundProduct) navigate("/not-found");
  // }, [foundProduct, navigate]);

  return (
    <Page title="Product Details">
      {foundProduct ? (
        <ProductDetailsPanel product={foundProduct} />
      ) : (
        <Navigate to="/not-found" />
      )}
    </Page>
  );
}

export default ProductDetailsPage;
