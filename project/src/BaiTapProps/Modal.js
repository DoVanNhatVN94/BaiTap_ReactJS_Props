import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Modal extends Component {
  render() {
    let { content } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary" id="exampleModalLabel">
               <ins>{content.name}</ins>   
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-4">
                    <img src={content.image} className="img-fluid" alt="" />
                  </div>
                  <div className="col-8">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Price</td>
                          <td>{content.price}</td>
                        </tr>
                        <tr>
                          <td>Quantity in store</td>
                          <td>{content.quantity}</td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td>
                            {content.description}
                            {content.shortDescription}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btnAdd btn btn-dark">
                  <span>Add To Cart</span>
                  <span className="m-1 fa fa-shopping-cart"></span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
