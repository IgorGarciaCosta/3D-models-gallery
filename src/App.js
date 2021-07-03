import './components/PageNavbar';
import './App.css';
import PageNavbar from './components/PageNavbar';
import React, { Component } from 'react'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageNavbar />
        
      </header>
      <h1 className="tituloDoGrid">Modelos 3D</h1>
    </div>
  );
}

export default App;
