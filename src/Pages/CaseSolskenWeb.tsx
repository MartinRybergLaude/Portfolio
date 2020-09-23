import React, { useEffect } from 'react'
import styles from './CaseSolskenWeb.module.scss'
import screen from 'assets/solsken_web_screens.png'

export default function CasePool() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cardTitle}>
                    <h1>Solsken (web app)</h1>
                    <p>Solsken is a progressive web weather app. As opposed to the android variant, this one supports the whole world and is accessible on every platform with access to a web browser. Being a progressive web app, it's also installable as an app on some platforms.
                    </p>
                </div>
                <div className={styles.container}>
                    <h2>Aim</h2>
                    <p>As I moved towards web development during 2019, I wanted to build something complete on my own. Since progressive web apps made huge leaps during the same year I wondered if a similar user experience to that of Solsken (android version) was achievable using this technology. The application would therefore be mobile-first. This would make Solsken accessible on all platforms with access to a web browser, a massive improvement to the android-only approach I used before.</p>
                    
                    <p>A massive limitation of the android version was the fact that it only supported Scandinavia and Finland, so I vowed to support the entire world this time around.</p>
                </div>
                <div className={styles.container}>
                    <h2>Method</h2>
                    <h4>Structure</h4>
                    <p>As opposed to my previous web projects, Solsken is more of an application than a website, and therefore I structured the project as such. The folder structure was based on "screens" and their subcomponents, while navigation was handled using React Router's MemoryRouter to simulate a native mobile experience. To complement this, CSS modules was used together with SCSS primarily for the variable system that SCSS brings. Typescript was used instead of Javascript because of the secure type system. </p>
                    <p>As for the workflow, git was used with micro-commits and a branch structure based on a dev branch and master branch, which represents public releases. The general project frame looked somewhat like the following:</p>
                    <ul>
                        <li>
                            <p>Sketching wireframes and designs for the app and deciding the UX and UI.</p>
                        </li>
                        <li>
                            <p>Researching possible ways to architect the application with Javascript promises and components.</p>
                        </li>
                        <li>
                            <p>Writing the major networking part of the app to retrieve weather data asynchronously.</p>
                        </li>
                        <li>
                            <p>Building the UI and presenting the information.</p>
                        </li>
                        <li>
                            <p>Bug fixes.</p>
                        </li>
                    </ul>

                    As for libraries the web app uses nothing out of the ordinary. Typescript, React Router, CSS Modules and i18next are the main libraries that provide the base for the application, while Framer Motion provides the animations.
                    <h4>Development</h4>
                    <p>As I was already quite familiar with React and the libraries mentioned above, development of this web app was smooth and relatively problem-free. While writing all the parsers and asynchronous code could be a pain sometimes it was nothing major. What did cause issues were the animations however. I tested out 3 different animation libraries and none were smooth enough for my liking, especially in Firefox. Eventually I managed to optimize my way to fluidity in Chromium based browsers and Safari, but Firefox did not want to work with me, so I disabled the heavier animations from it to preserve a snappy experience.</p>
                    <p>While development itself went by relatively smoothly, it should not be forgotten how much research was made beforehand on Typescript and especially asynchronous code. There are many ways to achieve the same result but I strive to research my way to what suits my use case the best. For the curious, I ended up using async await chains over several functions with error handling using traditional try catches.</p>
                </div>
                <div className={styles.container}>
                    <h2>Results</h2>
                    <p>The resulting web app contains most of the features from the android variant, in a very similar user interface, although arguably somewhat improved. Weather hour by hour, day by day, location searching and saving, graphs, detailed data etc is all in the application. It's installable and gets a full score on Lighthouse!</p>
                    <p>The complete application can be found <a href="https://solsken.app">here.</a></p>
                    <img src={screen} alt="screenshot of solsken"/>
                </div>
                <div className={styles.container}>
                    <h2>Discussion</h2>
                    <p>I really think the aim was achieved here. The application feels like a native application on most platforms and now supports the whole world. The code is structured and readable, and expanding the application is a breeze. Optimizing animations was interesting and getting asynchronous code to work well and error-free is definitely good experience. </p>

                    <p>// Martin Ryberg Laude</p>
                </div>
            </div>
            <div className={styles.side}>
                <div className={styles.info}>
                    <h3>Challenge</h3>
                    <p>Make a PWA of Solsken with support for the entire world.</p>
                    <h3>Solution</h3>
                    <p>Optimize UI and research asynchronous Javascript.</p>
                    <h3>Role</h3>
                    <p>Web Developer</p>
                    <h3>Company</h3>
                    <p>Myself :P</p>
                </div>
                <div className={styles.sideCard + ' ' + styles.sideCardWork}>
                    <h3>Workflow</h3>
                    <ul>
                        <li>
                            <p>UI design</p>
                        </li>
                        <li>
                            <p>Implementation</p>
                        </li>
                        <li>
                            <p>Animation optimization</p>
                        </li>
                        <li>
                            <p>Bug fixes</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.sideCard + ' ' + styles.sideCardResults}>
                    <h3>Resulting application</h3>
                    <p>An all-in-one functional PWA weather app.</p>
                    <p>Both an educational journey and a finished product.</p>
                </div>
            </div>
        </div>
    )
}
