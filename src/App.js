import './components/PageNavbar';
import './App.css';
import PageNavbar from './components/PageNavbar';
import ImageGrid from './components/ImageGrid';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageNavbar />
        
      </header>
      <h1 className="tituloDoGrid">Modelos 3D</h1>
      <ImageGrid />
    </div>
  );
}

export default App;
