import React from 'react';
import './App.css';
import Analytics from './component/Analytics';
import Cards from './component/Cards';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar/Navbar';
import Newsletter from './component/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
