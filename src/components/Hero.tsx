import styles from './Hero.module.scss'
import { Starfield } from './Starfield'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.homeBackground} />
            <div className={styles.center}>
                <h1>Martin <span>R. Laude</span></h1>
                <div className={styles.subHeading}>
                    <div className={styles.innerWrapper + " " + styles.leftWrapper}>
                        <h3>Creative Web Developer</h3>
                    </div>
                    <div className={styles.innerWrapper + " " + styles.ellipsisWrapper}>
                        <div className={styles.ellipsis}>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                    <div className={styles.innerWrapper + " " + styles.rightWrapper}>
                        <div className={styles.locationWrapper}>
                            <FontAwesomeIcon className={styles.locationIcon} icon={faMapMarkerAlt} />
                            <h3>Stockholm, Sweden</h3>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
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