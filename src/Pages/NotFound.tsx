import React, { useEffect } from 'react'
import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

interface Props {
    isUnfinished?: boolean
}

export default function NotFound(props: Props) {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    function getTitle(): string {
        return props.isUnfinished ?  "Coming soon!" : "404"
    }

    function getDesc(): string {
        return props.isUnfinished ? "This page is under construction." : "Oops! That page doesn't exist."
    }

    function getClass(): string {
        return props.isUnfinished ? styles.mainAlt : styles.main
    }
    
    return (
        <div className={styles.wrapper}>
            <p className={getClass()}>{getTitle()}</p>
            <p className={styles.below}>{getDesc()}</p>
            <Link to="/">
                <div className={styles.button}>Go to home
                </div>
            </Link>
        </div>
    )
}
