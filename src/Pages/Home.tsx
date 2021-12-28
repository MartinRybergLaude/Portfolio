import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import { Helmet } from 'react-helmet'
export default function Home() {
    return (
        <>
            <Helmet>
                <meta name="theme-color" content="#06061A"/>
            </Helmet>
            <Hero />
            <Portfolio />
            <About />
            <Contact />
        </>
    )
}
