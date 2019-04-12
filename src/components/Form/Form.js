import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      product: "",
      price: 0
    };
    console.log(this.state);
  }

  handleImgChange = val => this.setState({ img: val });
  handleProductChange = val => this.setState({ product: val });
  handlePriceChange = val => this.setState({ price: val });

  resetState = () => this.setState({ img: "", product: "", price: 0 });

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
          <button className="Btn">Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
