import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<div>hello</div>} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
