import React from 'react'
import styles from './Portfolio.module.scss'
import PortfolioItem from './PortfolioItem'
import {Link} from "react-router-dom"
import imgSolsken from "assets/thumbnails/solskenandroid.jpg"
import imgSolskenWeb from "assets/thumbnails/solskenweb.jpg"
import imgPahlen from "assets/thumbnails/pahlen.jpg"
import imgAvocado from "assets/thumbnails/avocado.jpg"
import imgQuantum from "assets/thumbnails/quantum.jpg"

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
                            img={imgSolsken}
                            color={"#6B6AABDD"}/>
                    </Link>
                    <Link to="/solskenweb" className={styles.wide}>
                        <PortfolioItem 
                            title="Solsken PWA"
                            paragraph="The progressive web app version of Solsken, now with support for the whole world."
                            tags={["React", "Sass", "Typescript", "PWA"]}
                            img={imgSolskenWeb}
                            color={"#377B6CDD"}/>
                    </Link>
                    <Link to="/avocado">
                        <PortfolioItem
                            title="Avocado"
                            paragraph="Productivity PWA application built in React with the latest technologies at the time."
                            tags={["React", "Sass", "Typescript", "PWA"]}
                            img={imgAvocado}
                            color={"#F9E9B0DD"}
                            blackText={true}/>
                    </Link>
                    <Link to="/quantumsnake">
                        <PortfolioItem 
                            title="Quantum Snake"
                            paragraph="A C# .NET Framework console snake game with an A* powered enemy snake made in an 80's outrun theme."
                            tags={[".NET", "A* pathfinding", "Game Engine"]}
                            img={imgQuantum}
                            color={"#00000060"}/>
                    </Link>
                    <Link to="/pool" className={styles.wide}>
                        <PortfolioItem 
                            title="Pahlén Poolkalkylator"
                            paragraph="A web-based pool chemistry calculator built for Pahlén AB."
                            tags={["React", "Typescript", "CSS"]}
                            img={imgPahlen}
                            color={"#0068B2DD"}/>
                    </Link>
                </div>
        </div>
    )
}
