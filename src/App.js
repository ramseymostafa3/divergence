import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "pages/home";
import Transactions from "pages/transactions";

import "assets/css/dashmix.css";
import "assets/css/responsive.css";
import "App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/transactions"} element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
