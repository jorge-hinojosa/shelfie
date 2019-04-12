import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }
  deleteProduct(id) {
    axios
      .delete(`/api/inventory/${id}`)
      .then(res => {
        this.getInventory();
      })
      .catch(err => console.log(err));
  }
  getInventory() {
    axios
      .get("/api/inventory")
      .then(res => {
        // console.log(res);
        this.setState({ inventory: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { inventory } = this.state;

    const viewInventory = inventory.map((product, i) => {
      return (
        <Product
          key={i}
          id={product.product_id}
          name={product.name}
          img={product.image_url}
          price={product.price}
          deleteProduct={this.deleteProduct}
        />
      );
    });

    return <div>{viewInventory}</div>;
  }
}

export default Dashboard;
