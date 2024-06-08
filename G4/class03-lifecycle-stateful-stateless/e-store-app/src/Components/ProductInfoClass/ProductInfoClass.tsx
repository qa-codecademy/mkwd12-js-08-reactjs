import { Product } from "../../models/product.model";
import "./ProductInfo.css";
import React from "react";

interface ProductInfoClassProps {
  selectedProduct: Product | null;
}

export class ProductInfoClass extends React.Component<ProductInfoClassProps> {
  intervalCount: number = 0;
  intervalId: number = 0;

  constructor(props: ProductInfoClassProps) {
    super(props);
  }

  componentDidMount(): void {
    console.log("Product Info Mounted");
    this.intervalId = setInterval(() => {
      this.intervalCount++;
      console.log("Interval", this.intervalCount);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ProductInfoClassProps>): void {
    console.log("Product Info Updated");
    console.log("Product info prev props", prevProps);
  }

  componentWillUnmount(): void {
    console.log("Product Info Unmounted");
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="ProductInfo">
        {this.props.selectedProduct ? (
          <div className="info-card">
            <h3>{this.props.selectedProduct.title}</h3>
            <div className="info-body">
              <img src={this.props.selectedProduct.image} alt="" />
              <div>
                <p>{this.props.selectedProduct.description}</p>
                <p>Category: {this.props.selectedProduct.category}</p>
                <p>Rating: {this.props.selectedProduct.rating.rate}/5</p>
                <p>Review Count: {this.props.selectedProduct.rating.count}</p>
                <p>
                  <strong>Price: ${this.props.selectedProduct.price}</strong>
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
}
