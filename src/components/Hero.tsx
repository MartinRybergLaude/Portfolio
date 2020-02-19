import styles from './Hero.module.scss'
import { Starfield } from './Starfield'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.homeBackground} />
            <div className={styles.center}>
                <h1 className={styles.title}>Martin Ryberg Laude</h1>
                <h2 className={styles.desc}>Android & Web Developer</h2>
                <div className={styles.locationWrapper}>
                    <FontAwesomeIcon className={styles.locationIcon} icon={faMapMarkerAlt} />
                    <p className={styles.locationText}>Stockholm, Sweden</p>
                </div>
            </div>
            <div className={styles.starsWrapper}>
                <Starfield
                    amountParticlesPer10KPixels={1}
                    direction='W'
                    velocity={0.1}
                    particleSizeMin={1}
                    particleSizeMax={2}
                    alphaMin={0.1}
                    alphaMax={1}
                    blinkChance={0.001}
                />
            </div>
        </div>
    )
}