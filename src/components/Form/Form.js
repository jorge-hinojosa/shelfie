import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      image_url: ""
    };
    this.addProduct = this.addProduct.bind(this);
  }

  handleImgChange = val => this.setState({ image_url: val });
  handleProductChange = val => this.setState({ name: val });
  handlePriceChange = val => this.setState({ price: val });
  resetState = () => this.setState({ image_url: "", name: "", price: 0 });

  addProduct() {
    const { name, price, image_url } = this.state;
    axios
      .post("/api/product", { name, price, image_url })
      .then(res => {
        this.props.getInventory();
        this.resetState();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Form">
        <img
          src="https://via.placeholder.com/200"
          alt="placeholder"
          className="Img"
        />
        <p className="Input-type">Image Url:</p>
        <input
          className="Input-field"
          onChange={e => this.handleImgChange(e.target.value)}
        />

        <p className="Input-type">Product Name:</p>
        <input
          className="Input-field"
          onChange={e => this.handleProductChange(e.target.value)}
        />

        <p className="Input-type">Price</p>
        <input
          className="Input-field"
          onChange={e => this.handlePriceChange(e.target.value)}
        />

        <div className="Btn-container">
          <button className="Btn" onClick={() => this.resetState()}>
            Cancel
          </button>
          <button className="Btn" onClick={() => this.addProduct()}>
            Add to Inventory
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
