import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <div>
            <Hero />
            <div className="siteBackground">
                <Portfolio />
                <About />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}
