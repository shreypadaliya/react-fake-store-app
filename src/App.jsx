import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import SingleProductcard from "./SingleProductcard";
import ContextProvider from "./Context";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProductcard />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
