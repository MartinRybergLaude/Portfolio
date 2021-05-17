import React from 'react'
import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="siteBackground">
            <div className={styles.wrapper}>
                <p className={styles.main}>404</p>
                <p className={styles.below}>Oops! That page doesn't exist.</p>
                <Link to="/">
                    <div className={styles.button}>Go to home
                    </div>
                </Link>
            </div>
        </div>
    )
}
