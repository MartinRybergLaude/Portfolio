import React from 'react'
import styles from './Header.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function header() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.nav}>
                <li>
                    <AnchorLink href="#projects" className={styles.link}>
                        <span className={styles.linkText}>Projects</span>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#about" className={styles.link}>
                        <span className={styles.linkText}>About</span>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#contact" className={styles.link}>
                        <span className={styles.linkText}>Contact</span>
                    </AnchorLink>
                </li>
            </ul>
        </nav>
    )
}
