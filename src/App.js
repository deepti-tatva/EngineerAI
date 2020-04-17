import React, { Suspense } from 'react';
import { BrowserRouter }  from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallBack= "">
      <Routes/>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
