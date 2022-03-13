import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, setStateModal } = this.props;
    return (
      <div
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className="card"
        style={{ width: "19rem" }}
      >
        <img src={item.image} className="img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price} $</p>
          <button
            type="button"
            className="btnAdd btn btn-dark"
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            onClick={() => {
              setStateModal(item);
            }}
          >
            <span>Add To Cart</span>
            <span className="m-1 fa fa-shopping-cart"></span>
          </button>
        </div>
      </div>
    );
  }
}
