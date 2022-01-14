import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';
import { Button } from 'react-bootstrap';

const Home = () => {
  let navigate = useNavigate();
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          onClick={() => {
            navigate("/Employees");
          }}
        >
          Ver Listado
        </Button>
      </header>
    </div>
  );
}

export default Home;
