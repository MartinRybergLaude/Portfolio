import React from 'react'
import styles from './Portfolio.module.scss'
import PortfolioItem from './PortfolioItem'
import {Link} from "react-router-dom"
import imgSolsken from "assets/thumbnails/solskenandroid.png"
import imgSolskenWeb from "assets/thumbnails/solskenweb.png"
import imgPahlen from "assets/thumbnails/pahlen.png"
import imgAvocado from "assets/thumbnails/avocado.png"
import imgQuantum from "assets/thumbnails/quantum.png"

export default function Portfolio() {
    return (
            <div className={styles.wrapper}>
                <div>
                    <h2 id="projects">Projects</h2>
                </div>
                <div className={styles.wrapperItems}>
                    <Link to="/solsken" className={styles.tall}>
                        <PortfolioItem 
                            title="Solsken"
                            paragraph="Weather made easy. This is a weather application for Scandinavia and Finland using api's from SMHI and YR.no (MET Norway) to deliver accurate and detailed forecast."
                            tags={["Java", "MVP", "Android"]}
                            img={imgSolsken}/>
                    </Link>
                    <Link to="/solskenweb" className={styles.wide}>
                        <PortfolioItem 
                            title="Solsken PWA"
                            paragraph="The progressive web app version of Solsken, now with support for the whole world."
                            tags={["React", "Sass", "Typescript", "PWA"]}
                            img={imgSolskenWeb}/>
                    </Link>
                    <Link to="/avocado">
                        <PortfolioItem
                            title="Avocado"
                            paragraph="Productivity PWA application built in React with the latest technologies at the time."
                            tags={["React", "Sass", "Typescript", "PWA"]}
                            img={imgAvocado}/>
                    </Link>
                    <Link to="/quantumsnake">
                        <PortfolioItem 
                            title="Quantum Snake"
                            paragraph="A C# .NET Framework console snake game with an A* powered enemy snake made in an 80's outrun theme."
                            tags={[".NET", "A* pathfinding", "Game Engine"]}
                            img={imgQuantum}/>
                    </Link>
                    <Link to="/pool" className={styles.wide}>
                        <PortfolioItem 
                            title="Pahlén Poolkalkylator"
                            paragraph="A web-based pool chemistry calculator built for Pahlén AB."
                            tags={["React", "Typescript", "CSS"]}
                            img={imgPahlen}/>
                    </Link>
                </div>
        </div>
    )
}
