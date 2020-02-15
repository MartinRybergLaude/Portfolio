import React from 'react'
import styles from './PortfolioItem.module.scss'

type Props = {
    title: string
    paragraph: string
    tags: string[]
    color: string[]
}
export default function PortfolioItem(props: Props) {

    return (
        <div className={styles.wrapper} style={{ background: "linear-gradient(45deg," + props.color[0] + "," + props.color[1] +")"}}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.paragraph}>{props.paragraph}</p>
            <div className={styles.tags}>
                {props.tags.map(tag => {
                    return (<p className={styles.tag} style={{color: props.color[0]}}>{tag}</p>)
                })}
            </div>
        </div>
    )
}
