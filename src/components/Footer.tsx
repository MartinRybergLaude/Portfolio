import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.random}>Hello! <span role="img" aria-label="(wave)">👋</span> Welcome to Martin's little site.</p>
            <p className={styles.copyright}>Copyright ©</p>
            <p className={styles.rights}>All rights reserved.</p>
        </div>
    )
}
