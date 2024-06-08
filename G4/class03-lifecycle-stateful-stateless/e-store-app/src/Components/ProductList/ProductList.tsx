import React from "react";
import { Product } from "../../models/product.model";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export class ProductList extends React.Component<ProductListProps> {
  constructor(props: ProductListProps) {
    super(props);
  }

  componentDidMount(): void {
    // console.log("Product list component mounted");
  }

  componentDidUpdate(prevProps: Readonly<ProductListProps>): void {
    // console.log("Product list component updated");
    // console.log(prevProps);
  }

  render() {
    return (
      <div className="ProductList">
        {this.props.products.length ? (
          this.props.products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={this.props.onSelectProduct}
            />
          ))
        ) : (
          <h2> No Products Found</h2>
        )}

        {}
      </div>
    );
  }
}

// function ProductList({ products }: ProductListProps) {
//   return (
//     <div className="ProductList">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

export default ProductList;
