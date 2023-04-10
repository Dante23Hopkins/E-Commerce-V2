import React, { useRef, useState, useEffect } from "react";
import ProductsArray from "./ProductsArray";
import '../styles/filter.css'
import Button from "./button";

const ArrayCard = () => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const inputRef = useRef(null);

  const handleChange = (e) => setSearch(e.target.value);

  useEffect(() => {
      setProducts(ProductsArray);
  }, []);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);

  console.log(ProductsArray);

  useEffect(() => {
    const filtered = products.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(search.toLowerCase());
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return titleMatch && priceMatch;
    });
    setFilteredProducts(filtered);
}, [products, search, minPrice, maxPrice]);


    return (
      <div className="wrapper__filter">
        <div className="searchBar">
          <label className="label-name">Search:</label>
          <input className="filter-label"
              ref={inputRef}
              onChange={handleChange}
              placeholder="Find a Product"
              type="text"
          />
        </div>
        <div className="maxnmin">
          <label>Min Price:</label>
          <input className="filter-price"
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Math.max(0, e.target.value))}
          />
          <label>Max Price:</label>
          <input className="filter-price"
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Math.min(3000, e.target.value))}
          />
        </div>
        <div className="products-container">
            {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="product-item root">
                        <img src={product.image} alt={product.title} />
                        <div className="product-details">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <span className="product-price">${product.price}</span>
                            <Button />
                        </div>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    </div>
    )
};

export default ArrayCard;