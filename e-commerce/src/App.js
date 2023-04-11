import './App.css';
// import Nav from './components/Navbar';
// import Footer from './components/Footer';
// import SlideShow from './components/SlideShow';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Product';
import Contact from './pages/Contact';
import './App.css';
export const AppContext = React.createContext();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Products />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import Home from "./pages/Home";
// //  import { ProductItems } from "./pages/productitem";

// import Contact from "./pages/Contact";
// import "./App.css";
// import Products from "./pages/Product";

// export const AppContext = React.createContext();

// function App() {
//   const [basename, setBasename] = useState("/");

//   return (
//     <>
//       {/* <AppContext.Provider value={{ basename, setBasename }}> */}
//       <Router basename={basename}>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Products" element={<Products />} />
//           <Route path="/Contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router>
//       {/* </AppContext.Provider> */}
//     </>
//   );
// }


// export default App;
