import React, { useState, useEffect } from "react";
import { ProductItems } from "./productitem";
import '../styles/Cart.css';
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInputGroup,
  MDBInput,
} from "mdb-react-ui-kit";

const Products = () => {}
  const [searchItem, setSearchItem] = useState("");
  const [price, setPrice] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  const handleAddToCart = (item) => {
    // Check if item is already in cart
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItemIndex >= 0) {
      // Item already in cart, update quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Item not in cart, add it
      const newCartItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  return (
    <div>
      <div className="product-filters">
        <div className="search-bar">
          <MDBInputGroup>
            <MDBInput
              label="Search"
              onChange={(event) => setSearchItem(event.target.value)}
            />
          </MDBInputGroup>
        </div>

        <div className="category-filter">
          <div>Select Category:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
              className="category-input"
            >
              <option value="">All</option>
              <option value="Outdoors">Outdoors</option>
              <option value="Cheap">Cheap</option>
              <option value="Expensive">Expensive</option>
            </select>
          </div>
        </div>

        <div className="price-filter">
          <input type="range" onInput={handleInput} />
          <h1>Price: ${price}</h1>
        </div>
      </div>
      </div>