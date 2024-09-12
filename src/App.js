import React from 'react';
import './index.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'; 

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About /> 
    </div>
  );
}

export default App;