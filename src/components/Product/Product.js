import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

class Product extends Component {
  render() {
    const { img, name, price, id, deleteProduct } = this.props;
    return (
      <div className="Product">
        <img className="Image" src={img} alt="placeholder" />
        <div className="Info-container">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className="Btn-container">
          <button className="Btn" onClick={() => deleteProduct(id)}>
            Delete
          </button>
          <Link to={`/editproduct/${id}`}>
            <button className="Btn">Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
