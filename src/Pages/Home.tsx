import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <div>
            <Hero />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
