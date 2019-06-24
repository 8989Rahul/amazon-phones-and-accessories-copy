import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar></Navbar>
        <ProductList></ProductList>
      </div>
    </React.Fragment>
  );
}

export default App;
