// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import '../styles/filter.css'
// import Filter from "./Filter";

// const ProductsCard = () => {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//         const fetchAllProducts = async () => {
//             try {
//                 const res = await axios.get("http://localhost:8800/products");
//                 setProducts(res.data);
//                 setFilteredProducts(res.data); // Initialize filtered products to all products
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         fetchAllProducts();
//     }, []);

//     const handleFilter = (filtered) => {
//         setFilteredProducts(filtered);
//     };

//     return (
//         <div className="wrapper__filter">
//             <Filter />

//         </div>
//     );
// };

// export default ProductsCard;