import React from 'react';
import Navbar from './components/primary/Navbar';
import Footer from './components/primary/Footer';
import Images from './components/secondary/homepage';
import Products from'./components/secondary/Products';
import './App.css';
// import '../src/script'



function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Images/> */}
      <Products/>
      <Footer/>

    </div>
  );
}

export default App;
