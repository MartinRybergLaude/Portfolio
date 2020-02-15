import React from 'react'
import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
