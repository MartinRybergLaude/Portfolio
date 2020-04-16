import React from 'react'
import styles from './Portfolio.module.scss'
import PortfolioItem from './PortfolioItem'
import {Link} from "react-router-dom"

export default function Portfolio() {
    return (
            <div className={styles.wrapper}>
                <div>
                    <h2 id="projects">Projects</h2>
                </div>
                <div className={styles.wrapperItems}>
                    <Link to="/solsken">
                        <PortfolioItem 
                            title="Solsken"
                            paragraph="Weather made easy. This is a weather application for Scandinavia and Finland using api's from SMHI and YR.no (MET Norway) to deliver accurate and detailed forecast."
                            color={["#006FFA", "#4E97FE"]}
                            tags={["Java", "MVP", "Clean Architecture"]}/>
                    </Link>
                    <Link to="/arrender">
                        <PortfolioItem
                            title="Arrender"
                            paragraph="React and css for Arrender.app, an event planner to effortlessly plan meetings and events."
                            color={["#058671", "#06a88e"]}
                            tags={["React", "Sass", "Typescript", "CSS Modules"]} />
                    </Link>
                    <Link to="/quantumsnake">
                        <PortfolioItem 
                            title="Quantum Snake"
                            paragraph="A C# .NET Framework console snake game with an A* powered enemy snake made in an 80's outrun theme."
                            color={["#E12856", "#EA6687"]}
                            tags={[".NET", "A* pathfinding", "Game Engine"]}/>
                    </Link>
                    <Link to="/pool">
                        <PortfolioItem 
                            title="Pahlén Poolkalkylator"
                            paragraph="An android application built for Pahlén AB for calculating the required actions for optimal pool water."
                            color={["#1d4ad1", "#3489eb"]}
                            tags={["Java", "MVP", "Clean Architecure"]}/>
                    </Link>
                </div>
        </div>
    )
}
