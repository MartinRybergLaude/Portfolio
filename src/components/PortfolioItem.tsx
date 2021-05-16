import React from 'react'
import styles from './PortfolioItem.module.scss'

type Props = {
    title: string
    paragraph: string
    tags: string[]
    img: string
}
export default function PortfolioItem(props: Props) {

    return (
        <div className={styles.wrapper}>
            <img src={props.img} alt="thumbnail"/>
            <div className={styles.content}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.paragraph}>{props.paragraph}</p>
                <div className={styles.tags}>
                    {props.tags.map((tag, index) => {
                        return (<p key={index} className={styles.tag}>{tag}</p>)
                    })}
                </div>
            </div>
        </div>
    )
}
