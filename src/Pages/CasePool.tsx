import React, { useEffect } from 'react'
import styles from './CasePool.module.scss'
import screen1 from 'assets/pahlen_screenshot.png'
import screen2 from 'assets/reachability.png'

export default function CasePool() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cardTitle}>
                    <h1>Pahlén Poolkalkylator</h1>
                    <p>Pahlén Poolkalkylator was a project assigned 
                        during my summer work at Pahlén AB. The idea of making a calculator app 
                        for pool owners arose from the confusion and tons of
                        support question regarding the issue. Pool chemistry is complicated, 
                        but users do not want complicated.The concept of a mobile app performing most of 
                        the work for the pool owner had to be explored.
                    </p>
                </div>
                <div className={styles.container}>
                    <h2>Aim</h2>
                        <p>The aim of this project was to realize a prototype of the idea of an android application calculating what a pool owner
                    should improve regarding their pool chemistry. This has historically been a complicated task as the calculations contain a variety of variables impacting each other in different ways. An app would make this an easy task, by taking values entered by the user and returning every task and product required to achieve perfect values.
                    </p>
                    <p>On top of this, everything should be available in the most simple interface possible without sacrificing any functionality. It's always a challenge to get this right, and since business logic is fairly simple, this is what I planned to focus on more.</p>
                </div>
                <div className={styles.container}>
                    <h2>Method</h2>
                    <h4>Structure</h4>
                    <p>The workflow of this project was a blend of my personal workflow at the time and the workflow of the company. It's important to integrate the structure into the company, to ensure a smooth flow. Here's an overview of the structure.
                    </p>
                    <ul>
                        <li>
                            <p>Writing a CRS including planned features, required assets and complementing information, as well as submitting this.</p>
                        </li>
                        <li>
                            <p>Writing a schedule for the project with ETA and phases.</p>
                        </li>
                        <li>
                            <p>Writing the app according to the written plan, features, and requirements.</p>
                        </li>
                        <li>
                            <p>Writing and submitting a project conclusion,including string resources, color values and measurements and functionality.</p>
                        </li>
                    </ul>
                    <h4>Development</h4>
                    <p>Development was carried out according to schedule and plan. The important part for me was to stick to the originally planned features. It's all too easy for additional seemingly small ideas to be added over time but in the end the product risks straying far from the goal. The UI was designed with thoughts on reachability and being obvious to the user, while of course using company styles like font and colors. Reachability for button and form placements was studied using charts gathered from multiple sources.</p>
                    <img src={screen2} alt="visual representation of phone reachability"/>
                    <p>This was further improved by allowing the enter key to go to the next edittext needing to be filled. I used the same thinking when I created a way to show the results, where I ended up utilizing a bottom sheet to show the items. This way it's large-phone friendly while keeping it simple. Summarized, I ended up going with a single-screen single-activity design to not make a simple task overly complicated for the user.</p>
                </div>
                <div className={styles.container}>
                    <h2>Results</h2>
                    <p>The resulting application met the planned features and expectations, as well as the scheduled deadline. The prototype served it's purpose of showing as a prototype how pool chemistry can be simplified for the customer. Images of the complete application below.</p>
                    <img src={screen1} alt="screenshot of poolkalkylator"/>
                </div>
                <div className={styles.container}>
                    <h2>Discussion</h2>
                    <p>What I think was most giving with this project was experience with company structure and integration into their workflow. That's a step towards a lot more real world work-programming, coming from hobby programming I'm used to. I believe this to valuable experience, which this project certainly helped me receiving.</p>

                    <p>// Martin Ryberg Laude</p>
                </div>
            </div>
            <div className={styles.side}>
                <div className={styles.info}>
                    <h3>Challenge</h3>
                    <p>Write a prototype pool chemistry android app for pool owners, which is simple, easy to use and precise.</p>
                    <h3>Solution</h3>
                    <p>Creating a clear and functional application using tested algorithms, while presenting the results in an equally clear way.</p>
                    <h3>Role</h3>
                    <p>Android Developer</p>
                    <h3>Company</h3>
                    <p>Pahlén AB</p>
                </div>
                <div className={styles.sideCard + ' ' + styles.sideCardWork}>
                    <h3>Workflow</h3>
                    <ul>
                        <li>
                            <p>CRS</p>
                        </li>
                        <li>
                            <p>Schedule</p>
                        </li>
                        <li>
                            <p>Development</p>
                        </li>
                        <li>
                            <p>Project conclusion</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.sideCard + ' ' + styles.sideCardResults}>
                    <h3>Resulting application</h3>
                    <p>Reached the goals and served it's purpose. Deadline was kept.</p>
                    <p>The project gave me experience with company workflow integration and real world work-programming.</p>
                </div>
            </div>
        </div>
    )
}
