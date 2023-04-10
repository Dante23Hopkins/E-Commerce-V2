
import React from "react"
import { useState } from "react"
import '../styles/products.css'
import { ProductItems } from "./productitem"


import {
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

  } from 'mdb-react-ui-kit';


const Products = () => {

  
  const[searchItem, setSearchItem] = useState("")
  const [ price, setPrice ] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("");
const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");

const handleMinPriceChange = (e) => {
  setMinPrice(e.target.value);
};

const handleMaxPriceChange = (e) => {
  setMaxPrice(e.target.value);
};

const handleResetPriceFilter = () => {
  setMinPrice("");
  setMaxPrice("");
};



<div className="price-filter">
  <div className="price-input">
    <label htmlFor="min-price">Min Price:</label>
    <input
      type="number"
      id="min-price"
      name="min-price"
      value={minPrice}
      onChange={handleMinPriceChange}
    />
  </div>
  <div className="price-input">
    <label htmlFor="max-price">Max Price:</label>
    <input
      type="number"
      id="max-price"
      name="max-price"
      value={maxPrice}
      onChange={handleMaxPriceChange}
    />
  </div>
  <button className="reset-btn" onClick={handleResetPriceFilter}>
    Reset
  </button>
</div>
  

function handleCategoryChange(event) {
  setSelectedCategory(event.target.value);
}

  
  const handleInput = (e)=>{
    setPrice( e.target.value );
  } 

  return(

<div>

<div className="product-filters">
<div className="search-bar">
            <MDBInputGroup >
      <MDBInput label='Search' onChange={(event)=> setSearchItem(event.target.value)} />
    </MDBInputGroup >
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
            <option value="Outdoor">Outdoor</option>
            <option value="Cheap">Cheap</option>
            <option value="Expensive">Expensive</option>
          </select>
        </div>
      </div>



      <div className="price-filter">
      <input type="range" onInput={ handleInput } />
      <h1>Price: ${ price }</h1>
      </div>
</div>


      <div className="products">
      { ProductItems.filter((item) => { 
  if (searchItem === "") {
    return item;
  } else if (item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
    return item;
  } else if (!selectedCategory) {
    return item;
  } else if (item.category === selectedCategory && !isNaN(price) && item.price >= parseInt(price, 10)) {
    return item;
  }
  return false;
}).map(item => (
  
  <MDBCard key={item.id}>
    <MDBRow className="g-0">
      <MDBCol md="4">
        <div className="pimg">
        <MDBCardImage src={item.image} alt="product-images" />
        </div>
      </MDBCol>
      <MDBCol md="8">
        <MDBCardBody>
          <div className="ptext">
          <MDBCardTitle>{item.name}</MDBCardTitle>
          <p>${item.price}</p>
          <div className="pdes">
          <MDBCardText>{item.description}</MDBCardText>
          </div>
          <MDBBtn class="btn btn-dark" href="#">
            Add to order
          </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
))}       
      </div>
    </div>
)
  }

export default Products;




