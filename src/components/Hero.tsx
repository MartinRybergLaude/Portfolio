import styles from './Hero.module.scss'
import { Starfield } from './Starfield'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {

    const heights = useHeights();

    return (
        <div className={styles.wrapper} style={{height: heights.heightWrapper + "px"}}>
            <div className={styles.homeBackground}/>
            <div className={styles.center} style={{ marginTop: heights.heightCenter + "px" }}>
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


// Hook

function useHeights() {

    function getHeights() {
        return {
            heightWrapper: window.innerHeight * 0.8,
            heightCenter: window.innerHeight * 0.2

        };
    }
    const [heights, setHeights] = React.useState(getHeights);

    React.useEffect(() => {
        function handleResize() {
            setHeights(getHeights());

        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []); 
    return heights;
}
