import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './jsx/Home';
import './font/Font.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' Component = {Home}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;