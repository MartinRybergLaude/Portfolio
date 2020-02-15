import React from 'react'
import styles from './About.module.scss'

export default function About() {
    return (
        <div>
            <div>
                <h2 id="about">About me</h2>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.text}>
                    My name is Martin, and I’m an android & web developer from Stockholm, Sweden. I create quick and intuitive apps with the goal of being beautiful, simple to use and consistent, more than often doing so by following the material design guidelines. I believe a recognisable and consistent experience to be the most important factor in user experience, both from brand and platform perspectives. This, combined with quality code and well planned features, is the base of all my development, and will always be.
                </p>
                <p className={styles.text}>
                    Outside of work my interests include boating, music production and a little photography. It should therefore not be a surprise that I'd describe myself as a person on the creative side of the spectrum, which most of my hobbies and work relate to. I'm also quite fond of VR which most of my gaming consists of. The future has grand things in store!
                </p>
            </div>
            
        </div>
    )
}
