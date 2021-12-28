import React from 'react'
import styles from './PortfolioItem.module.scss'

type Props = {
    title: string
    paragraph: string
    tags: string[]
    img: string
    color: string
    blackText?: boolean
}
export default function PortfolioItem(props: Props) {

    function getTextColor(): string {
        return props.blackText ? "#000000" : "#ffffff"
    }

    return (
        <div className={styles.wrapper}>
            <img src={props.img} alt="thumbnail"/>
            <div className={styles.content} style={{background: props.color}}>
                <h3 className={styles.title} style={{color: getTextColor()}}>{props.title}</h3>
                <p className={styles.paragraph} style={{color: getTextColor()}}>{props.paragraph}</p>
                <div className={styles.tags}>
                    {props.tags.map((tag, index) => {
                        return (<p key={index} className={styles.tag}>{tag}</p>)
                    })}
                </div>
            </div>
        </div>
    )
}
