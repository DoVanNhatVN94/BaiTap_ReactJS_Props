import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderShoes = () => {
    let { productsData,setStateModal } = this.props;
    return productsData.map((product) => {
      return (
        <div className="col-4 pb-5" key={`Shoes ${product.id}`}>
          <ProductItem
            item={product}
            setStateModal={setStateModal}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderShoes()}</div>;
  }
}
