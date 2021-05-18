import React, { useEffect } from 'react'
import styles from "./Case.module.scss"
import screen2 from "assets/screenshots/solskenweb/solskenweb2.png"
import screen1 from "assets/screenshots/solskenweb/solskenweb.png"
import screen from "assets/screenshots/solskenweb/solsken_desktop.png"
import { useLocation } from 'react-router-dom';

export default function CaseSolskenWeb() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <article className={styles.page}>
      <header>
        <h1>Solsken PWA</h1>
        <p>Solsken /suːlˌɧeːn/ is a progressive web weather app. As opposed to the android variant, this one supports the whole world and is accessible on every platform with access to a web browser. Being a progressive web app, it's also installable as an app on some platforms.</p>
        <div className={styles.info}>
          <div>
            <p><span>Live:</span> <a href="https://solsken.app">solsken.app</a></p>
            <p><span>Role:</span> Front-end, UI/UX</p>
            <p><span>Client:</span> Me</p>
          </div>
          <p className={styles.date}>2020</p>
        </div>
      </header>
      <section className={styles.section}>
        <h2>Aim</h2>
        <p>As I moved towards web development during 2019, I wanted to build something complete on my own. Since progressive web apps made huge leaps during the same year I wondered if a similar user experience to that of Solsken (android version) was achievable using this technology. The application would therefore be mobile-first. This would make Solsken accessible on all platforms with access to a web browser, a massive improvement to the android-only approach I used before.</p>
        <p>A massive limitation of the android version was the fact that it only supported Scandinavia and Finland, so I vowed to support the entire world this time around.</p>
        <div className={styles.imgContainer}>
          <div>
            <img loading="lazy" src={screen} alt="screenshot of solsken"/>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Method</h2>
        <p>As opposed to my previous web projects, Solsken is more of an application than a website, and therefore I structured the project as such. The folder structure was based on "screens" and their subcomponents, while navigation was handled using React Router's MemoryRouter to simulate a native mobile experience. To complement this, CSS modules was used together with SCSS primarily for the variable system that SCSS brings. Typescript was used instead of Javascript because of the secure type system.</p>
        <p>As for the workflow, git was used with micro-commits and a branch structure based on a dev branch and master branch, which represents public releases. <span>The general project frame looked somewhat like the following:</span></p>
        <ul>
          <li>Sketching wireframes and designs for the app and deciding the UX and UI.</li>
          <li>Researching possible ways to architect the application with Javascript promises and components.</li>
          <li>Writing the major networking part of the app to retrieve weather data asynchronously.</li>
          <li>Building the UI and presenting the information.</li>
          <li>Bug fixes.</li>
        </ul>
        <p>As for libraries the web app uses nothing out of the ordinary. Typescript, React Router, CSS Modules and i18next are the main libraries that provide the base for the application, while Framer Motion provides the animations.</p>
      </section>
      <section className={styles.section}>
        <h2>Development</h2>
        <p>As I was already quite familiar with React and the libraries mentioned above, development of this web app was smooth and relatively problem-free. While writing all the parsers and asynchronous code could be a pain sometimes it was nothing major. What did cause issues were the animations however. I tested out 3 different animation libraries and none were smooth enough for my liking, especially in Firefox. Eventually I managed to optimize my way to fluidity in Chromium based browsers and Safari, but Firefox did not want to work with me, so I disabled the heavier animations from it to preserve a snappy experience.</p>
        <p>While development itself went by relatively smoothly, it should not be forgotten how much research was made beforehand on Typescript and especially asynchronous code. There are many ways to achieve the same result but I strive to research my way to what suits my use case the best. For the curious, I ended up using async await chains over several functions with error handling using traditional try catches.</p>
      </section>
      <section className={styles.section}>
        <h2>Results</h2>
        <p>The resulting web app contains most of the features from the android variant, in a very similar user interface, although arguably somewhat improved. Weather hour by hour, day by day, location searching and saving, graphs, detailed data etc is all in the application. It's installable and gets a full score on Lighthouse!</p>
        <div className={styles.imgContainer}>
          <div>
            <img loading="lazy" src={screen1} alt="screenshot of solsken"/>
          </div>
          <div>
            <img loading="lazy" src={screen2} alt="screenshot of solsken"/>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Discussion</h2>
        <p>I really think the aim was achieved here. The application feels like a native application on most platforms and now supports the whole world. The code is structured and readable, and expanding the application is a breeze. Optimizing animations was interesting and getting asynchronous code to work well and error-free is definitely good experience.</p>
      </section>
    </article>
  )
}
