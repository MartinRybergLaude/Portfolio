import React, { useEffect } from 'react'
import styles from "./Case.module.scss"
import screen1 from "assets/screenshots/pahlen/pahlen.png"
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function CaseSolskenWeb() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <article className={styles.page}>
      <Helmet>
        <meta name="theme-color" content="#ffffff"/>
      </Helmet>
      <header>
        <h1>Pahlén Poolkalkylator</h1>
        <p>This solo project was built for Pahlén AB after discussions on how pool chemistry could be made easier for pool owners, and thereby lighten the load on support channels. The web app allows people to enter their current measured pool values, which is used to display a list of actions to take.</p>
        <div className={styles.info}>
          <div>
            <p><span>Role:</span> Web Developer</p>
            <p><span>Client:</span> Pahlén AB</p>
          </div>
          <p className={styles.date}>2020</p>
        </div>
      </header>
      <section className={styles.section}>
        <h2>Aim</h2>
        <p>Simplifying pool chemistry for pool owners themselves was the primary goal of this project. The algorithms used in the web app is mostly accessible only to the companies themselves and are rather complicated for non-technical people. The app was built to make the calculations available to the public, but in a manner that is easy to understand without having to call support. </p>
      </section>
      <section className={styles.section}>
        <h2>Method</h2>
        <p>Before being able to work on the programmatical part, there were some areas that needed ironing out. I wrote a list of all the assets I would require, both to gauge the size of the project and to be able to visualize a user interface.
           In this list was among others the calculations to be used. At first, those calculations were used to determine what inputs the user would need to enter. Similarly, the products to be recommended to pool owners also had to be compiled. Following this, a user interface could be built to serve the requirements, along with following the company design profile to a satsifactory degree. The remainder of the workflow was fairly simple, as listed here: </p>
        <ul>
          <li>Compiling a requirement list.</li>
          <li>Constructing an initial user interface and flow. </li>
          <li>Writing the code to realize the idea and plan.</li>
          <li>Bug fixing and minor corrections.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Development</h2>
        <p>There were no massive hurdles to overcome with this project, for good and bad. On the good side, everything went smoothly without hiccups and the product was completed on time. On the bad side, not much was learned on the programmatical side of things. The learning instead revovled around working with a company as a solo web developer, keeping times and following a more strict structure than what I was previously used to.</p>
        <p>Another difference to prior projects was the close cooperation with people with specialist knowledge here, to ensure the correct and error free function of the software. There were a few instances of back and forth discussion around some parts of the application and how it could be improved.</p>
      </section>
      <section className={styles.section}>
        <h2>Results</h2>
        <p>Very satisfactory results! It's easy to use, mobile and desktop friendly, follows the theme of the company and does its intended purpose. Here is a screenshot. </p>
        <div className={styles.imgContainer}>
          <div>
            <img loading="lazy" src={screen1} alt="screenshot of pahlén poolkalkylator"/>
          </div>
        </div>
      </section>
    </article>
  )
}
