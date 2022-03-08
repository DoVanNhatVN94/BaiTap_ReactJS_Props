import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item,setStateModal } = this.props;
    return (
      <div className="card" style={{ width: "19rem" }}>
        <img
          src={item.image}
          className="img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price} $</p>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>{
                
                console.log('====================================');
                console.log(item);
                console.log('====================================');
                setStateModal(item);
            }}
          >
            <span>Add To Cart</span>
            <span className='m-1 fa fa-shopping-cart'></span>
          </button>
        </div>
      </div>
    );
  }
}
