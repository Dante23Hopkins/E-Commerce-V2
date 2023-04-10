import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
//  import { ProductItems } from "./pages/productitem";

import Contact from "./pages/Contact";
import "./App.css";
import Products from "./pages/Product";

export const AppContext = React.createContext();

function App() {
  const [basename, setBasename] = useState("/");

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      <Router basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
