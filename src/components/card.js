import React from 'react';

function Card(props) {
  return (
    <div className="card my-3 rounded">
      <div className="card-body">
        <h5 className="card-title">{props.buyerName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">India</h6>
        <p className="card-text">Product ID : {props.productId}</p>
        <p className="card-text">Product Name : {props.productName}</p>
        <p className="card-text">Lead Time : {props.leadTime}</p>
        <p className="card-text">Weight : {props.weight}</p>
        <p className="card-text">Price : {props.price}</p>
        <p className="card-text">Quantity : {props.quantity}</p>
        <div className="row justify-content-between">
          <i className="fa fa-user" aria-hidden="true"></i>
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          <i className="fa fa-share-alt" aria-hidden="true"></i>
          <i className="fa fa-bookmark-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
