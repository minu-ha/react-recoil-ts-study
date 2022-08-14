import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./pages/Chart";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Price from "./pages/Price";
import Path from "./models/Path";
import Index from "./pages/Index";
import Todo from "./pages/Todo";
import TodoTemplate from "./pages/TodoTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Coins />} />
        <Route path={"/:coinId"} element={<Coin />}>
          <Route path={"chart"} element={<Chart />} />
          <Route path={"price"} element={<Price />} />
        </Route>
        <Route path={Path.INDEX} element={<Index />} />
        <Route path={Path.TODO} element={<Todo />} />
        <Route path={Path.TOTO} element={<TodoTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
