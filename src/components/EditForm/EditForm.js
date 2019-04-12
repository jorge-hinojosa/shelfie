import React, { Component } from "react";
import "./EditForm.css";
import axios from "axios";

class EditForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      image_url: ""
    };
  }

  handleImgChange = val => this.setState({ image_url: val });
  handleProductChange = val => this.setState({ name: val });
  handlePriceChange = val => this.setState({ price: val });
  resetState = () => this.setState({ image_url: "", name: "", price: 0 });

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    // const { name, price, image_url} = this.state;
    axios
      .get(`/api/inventory/${id}`)
      .then(res =>
        this.setState({
          name: res.data.name,
          price: res.data.price,
          image_url: res.data.image_url
        })
      )
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
            Submit Edit
          </button>
        </div>
      </div>
    );
  }
}

export default EditForm;
