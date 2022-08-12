import React from "react";
import Path from "./models/Path";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Todo from "./pages/Todo";
import Movie from "./pages/Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.INDEX} element={<Index />} />
        <Route path={Path.TODO} element={<Todo />} />
        <Route path={Path.MOVIE} element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
