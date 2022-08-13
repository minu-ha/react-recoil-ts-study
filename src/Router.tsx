import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./pages/Chart";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Price from "./pages/Price";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Coins />} />
        <Route path={"/:coinId"} element={<Coin />}>
          <Route path={"chart"} element={<Chart />} />
          <Route path={"price"} element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
