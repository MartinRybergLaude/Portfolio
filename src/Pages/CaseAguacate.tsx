import React, { useEffect } from 'react'
import styles from "./Case.module.scss"
import screen2 from "assets/screenshots/solskenweb/solskenweb2.png"
import screen1 from "assets/screenshots/solskenweb/solskenweb.png"
import screen from "assets/screenshots/avocado/avocado.png"
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function CaseAguacate() {
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
        <h1>Aguacate</h1>
        <p>Aguacate /aɡwaˈkate/ is a productivity timer. Since it's a progressive web app it's installable on most devices as well as accessible through the web.</p>
        <div className={styles.info}>
          <div>
            <p><span>Live:</span> <a href="https://avocado.mrlaude.com">avocado.mrlaude.com</a></p>
            <p><span>Role:</span> Front-end, UI/UX</p>
            <p><span>Client:</span> Me</p>
          </div>
          <p className={styles.date}>2021</p>
        </div>
      </header>
      <section className={styles.section}>
        <h2>Aim</h2>
        <p>To build a simple and efficient PWA pomodoro timer as smooth as it gets using web technology. There wasn't much more to it. I couldn't find a suitable product for myself so I made one.</p>
        <div className={styles.imgContainer}>
          <div>
            <img loading="lazy" src={screen} alt="screenshot of aguacate"/>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Method</h2>
        <p>As with most of my projects I designed UI and UX first. Following satisfactory results in that department, the repository set up remained likewise common for me with two general branches for quick efficient work (for such a small application).</p>
        <p>I wanted to keep the app as lightweight and easily updatable as possible as well, so third party libraries were kept to an absolute minimum in the planning stage.</p>
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
