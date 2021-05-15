import styles from './Hero.module.scss'
import { Starfield } from './Starfield'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Header from './Header';

export default function Hero() {
    const centerRef = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
        setOffset(getLeftOffset(centerRef.current))
        window.addEventListener("resize", debounce(onResizeEnd, 300))
        return () => {
            window.removeEventListener("resize",debounce(onResizeEnd, 300))
        }
    }, [])
    function debounce(func: () => void, time: number) {
        let timer: any
        return function(event: Event) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(func, time, event)
        }
    }
    function onResizeEnd() {
        setOffset(getLeftOffset(centerRef.current))
    }
    function getLeftOffset(element: Element | null): number {
        if (!element) return 0
        const rect = element.getBoundingClientRect();
        return rect.left + window.scrollX
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.homeBackground} />
            <Header offset={offset}/>
            <div className={styles.center} ref={centerRef}>
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
            </div>
            <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown}
             onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
             style={{bottom: offset - 48}} />
            <a href="mailto: martin.ryberg.laude@gmail.com" className={styles.email} style={{bottom: offset - 48, right: offset}}>martin.ryberg.laude@gmail.com</a>
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