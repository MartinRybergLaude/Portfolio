import React from 'react'
import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

export default function UnderConstruction() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.mainAlt}>Coming soon!</p>
            <p className={styles.below}>This page is under construction.</p>
            <Link to="/">
                <div className={styles.button}>Go to home
                </div>
            </Link>
        </div>
    )
}
