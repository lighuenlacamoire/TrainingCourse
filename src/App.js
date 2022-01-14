import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Employees from './screens/Employees';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
