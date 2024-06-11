import { Navigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import { Product } from "../../models/product.model";

interface ProductDetailsPageProps {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
}

function ProductDetailsPage({ addToCart, products }: ProductDetailsPageProps) {
  const { id } = useParams();
  // const navigate = useNavigate();

  const foundProduct = products.find(
    product => product.id === Number(id)
  ) as Product;

  // useEffect(() => {
  //   if (!foundProduct) navigate("/not-found");
  // }, [foundProduct, navigate]);

  return (
    <section className="page">
      <div className="page-heading">
        <h2>Product Details</h2>
        <div className="page-content">
          {foundProduct ? (
            <ProductDetailsPanel product={foundProduct} addToCart={addToCart} />
          ) : (
            <Navigate to="/not-found" />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
