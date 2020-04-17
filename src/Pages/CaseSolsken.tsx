import React, { useEffect } from 'react'
import styles from './CaseSolsken.module.scss'
import screen1 from 'assets/solsken-screens.png'

export default function CasePool() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cardTitle}>
                    <h1>Solsken</h1>
                    <p>Solsken is an android weather application made specifically for fennoscandia - scandinavia and finland. Solsken gives users the option to choose between YR.no (MET Norway) or SMHI as data source for the forecasts, while delivering the data in an elegant and beautiful manner, in the most effective way.
                    </p>
                </div>
                <div className={styles.container}>
                    <h2>Aim</h2>
                    <p>The goal of this project was to learn and get a steady grip on network operations, specifically REST api's, using relevant android libraries, while also using a testable and organized development pattern (MVP). I was also aiming to explore new UI types and styles, and find an optimal way of viewing forecasts.</p>
                    
                    <p>As always, while practicing above things I still aimed for a complete application, in this case to replace other weather apps I was previously using. I also combined features I liked from existing apps and improved them. One app to rule them all!</p>
                </div>
                <div className={styles.container}>
                    <h2>Method</h2>
                    <h4>Structure</h4>
                    <p>The design pattern of this project is attempting to conform with the MVP design pattern, although not to a full extent as dependency injection is not used. Therefore all context related operations are handled by activity, like for instance acquiring user location, while model handles operations like network requests using Retrofit and data formatting.</p>
                    <p>Workflow in this project was considerably more structured than projects I've previously worked on. This project used correct and consistent version control, an MVP development pattern and a priority list on issues and features to work on. While having this set up, I worked on the project on my free time. The general flow went as following:</p>
                    <ul>
                        <li>
                            <p>Sketching wireframes and designs for the app and deciding the ux and ui.</p>
                        </li>
                        <li>
                            <p>Writing the major networking part of the app to retrieve weather data asynchronously.</p>
                        </li>
                        <li>
                            <p>Building the ui and presenting the information.</p>
                        </li>
                        <li>
                            <p>Fixing bugs and adding features like saved locations, multiple data sources, dark mode, weather map and relative wind direction.</p>
                        </li>
                        <li>
                            <p>Bug fixing even more and adapting the app to more screen sizes.</p>
                        </li>
                    </ul>

                    <p>The app uses a couple libraries to simplify development and avoid reinventing the wheel. These are:</p>
                    <ul>
                        <li>
                            <p><a href="https://square.github.io/retrofit/">Retrofit 2</a></p>
                        </li>
                        <li>
                            <p><a href="https://square.github.io/retrofit/">SunriseSunset</a></p>
                        </li>
                        <li>
                            <p><a href="https://github.com/google/gson">Gson</a></p>
                        </li>
                        <li>
                            <p><a href="https://github.com/erikflowers/weather-icons">Weather Icons</a></p>
                        </li>
                        <li>
                            <p><a href="https://github.com/mikepenz/MaterialDrawer">Material Drawer</a></p>
                        </li>
                        <li>
                            <p><a href="https://github.com/square/okhttp">OkHttp</a></p>
                        </li>
                        <li>
                            <p><a href="https://developer.android.com/topic/libraries/architecture/room">Room Persistence Library</a></p>
                        </li>
                        <li>
                            <p><a href="https://github.com/komoot/photon">Photon</a></p>
                        </li>
                        <li>
                            <p><a href="https://github.com/PhilJay/MPAndroidChart">MPAndroidChart</a></p>
                        </li>
                    </ul>
                    <h4>Development</h4>
                    <p>The first weeks of development were the most difficult ones. I had to read up a lot on MVP and retrofit, along with async guidelines and assess my options. This required a lot of old school studying before I could even start the programming part. Once that was over however, everything rolled along nicely. Core functionality was implemented without too much trouble.</p>
                    <p>The issues I hit at several points of development were thankfully nothing major, but rather smaller bugs and optimization opportunities presenting themselves. Most of these came from the classes I used for parsing the weather data into objects readable by the recyclerviews, depending on user options like units selected. To do this, I first used gson to convert the json string received from the GET requests into POJO classes, then converting these to readable classes containing only the information necessary, everything happening asynchronously of course.</p>
                </div>
                <div className={styles.container}>
                    <h2>Results</h2>
                    <p>The resulting app contains features like day by day, hour by hour forecasts up to 10 days ahead, saved locations, search location, weather map, visual charts as statistics overview for each day, many supported units, dark theme, relative wind direction, data source selection and multiple color themes. </p>
                    <p>The complete application can be found on the Play Store <a href="https://play.google.com/store/apps/details?id=com.martinryberglaude.solsken&hl=en">here.</a></p>
                    <img src={screen1} alt="screenshot of solsken"/>
                </div>
                <div className={styles.container}>
                    <h2>Discussion</h2>
                    <p>Personally, I adore the results. I now use this application daily for every weather concern I have. It served it's purpose both in the way of teaching me more, but also serving as a functional app I actually use. I am therefore content and happy with it. I have not spent any money whatsoever on advertising or anything, I basically just sent the app to friends and family, so it has not as expected had any commercial significance. The potential market is relatively small as well, as only fennoscandia is supported. Additional support isn't viable as swedish and norwegian national weather institutes are the only ones with a completely free api. I'm grateful for that!</p>

                    <p>// Martin Ryberg Laude</p>
                </div>
            </div>
            <div className={styles.side}>
                <div className={styles.info}>
                    <h3>Challenge</h3>
                    <p>Learn android networking by making an android weather app.</p>
                    <h3>Solution</h3>
                    <p>Study and implement features in an effective manner.</p>
                    <h3>Role</h3>
                    <p>Android Developer</p>
                    <h3>Company</h3>
                    <p>Myself :P</p>
                </div>
                <div className={styles.sideCard + ' ' + styles.sideCardWork}>
                    <h3>Workflow</h3>
                    <ul>
                        <li>
                            <p>Studying concepts and patterns</p>
                        </li>
                        <li>
                            <p>Implementation</p>
                        </li>
                        <li>
                            <p>Bugfixes and additional features</p>
                        </li>
                        <li>
                            <p>Optimizations and further bug fixes</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.sideCard + ' ' + styles.sideCardResults}>
                    <h3>Resulting application</h3>
                    <p>An all-in-one functional android weather app.</p>
                    <p>Both an educational journey and a finished product.</p>
                </div>
            </div>
        </div>
    )
}
