import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import Router from './Router';

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
