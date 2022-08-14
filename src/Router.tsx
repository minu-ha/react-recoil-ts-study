import React from "react";
import Path from "./models/Path";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Todo from "./pages/Todo";
import TodoTemplate from "./pages/TodoTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.INDEX} element={<Index />} />
        <Route path={Path.TODO} element={<Todo />} />
        <Route path={Path.TOTO} element={<TodoTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
