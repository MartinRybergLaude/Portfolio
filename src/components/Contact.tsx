import React from 'react'
import styles from './Contact.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" 

export default function Contact() {
    return (
        <div>
            <div>
                <h2 id="contact">Contact</h2>
            </div>
            <div className={styles.wrapper}>
                <a className={styles.link} href="mailto:martin.ryberg.laude@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                    <p><span>martin.ryberg.laude@gmail.com</span></p>
                </a>
                <a className={styles.link} href="https://twitter.com/martini_rl">
                    <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>
                    <p>twitter.com/<span>martini_rl</span></p>
                </a>
                <a className={styles.link} href="https://www.instagram.com/martinryberglaude">
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    <p>instagram.com/<span>martinryberglaude</span></p>
                </a>
                <a className={styles.link} href="https://github.com/MartinRybergLaude">
                    <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                    <p>github.com/<span>MartinRybergLaude</span></p>
                </a>
                <a className={styles.link} href="https://www.linkedin.com/in/martinryberglaude">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                    <p>linkedin.com/in/<span>martinryberglaude</span></p>
                </a>
            </div>
        </div>
    )
}
