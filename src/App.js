import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "pages/home";
import Transactions from "pages/transactions";
import Positions from "pages/positions";
import Summary from "pages/summary";
import TradeSetUp from "pages/tradesetup";
import General from "pages/general";
import Admin from "pages/admin";

import "assets/css/dashmix.css";
import "assets/css/responsive.css";
import "App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/transactions"} element={<Transactions />} />
        <Route exact path={"/positions"} element={<Positions />} />
        <Route exact path={"/summary"} element={<Summary />} />
        <Route exact path={"/tradesetup"} element={<TradeSetUp />} />
        <Route exact path={"/general"} element={<General />} />
        <Route exact path={"/admin"} element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
