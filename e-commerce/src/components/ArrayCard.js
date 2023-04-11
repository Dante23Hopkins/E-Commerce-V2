import React, { useRef, useState, useEffect } from "react";

import ProductItems from "../pages/productitem";


const ArrayCard = () => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const inputRef = useRef(null);

  const handleChange = (e) => setSearch(e.target.value);

  useEffect(() => {
      setProducts(ProductItems);
  }, []);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30);



  useEffect(() => {
    const filtered = products.filter((product) => {
        const titleMatch = product.name.toLowerCase().includes(search.toLowerCase());
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return titleMatch && priceMatch;
    });
    setFilteredProducts(filtered);
}, [products, search, minPrice, maxPrice]);


    return (
        <div className="searchwrap">
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
              onChange={(e) => setMaxPrice(Math.min(30, e.target.value))}
          />
        </div>
        </div>
        <div className="products-container">
            {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="product-item root">
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <span className="product-price">${product.price}</span>
                           
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