import React from 'react'
import styles from './Portfolio.module.scss'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h2 id="projects">Projects</h2>
            </div>
            <div className={styles.wrapperItems}>
                <PortfolioItem 
                    title="Solsken"
                    paragraph="Weather made easy. This is a weather application for Scandinavia and Finland using api's from SMHI and YR.no (MET Norway) to deliver accurate and detailed forecast."
                    color={["#0172FF", "#4E97FE"]}
                    tags={["Java", "MVP", "Clean Architecture"]}/>
                <PortfolioItem 
                    title="Arrender"
                    paragraph="React and css for Arrender.app, an event planner to effortlessly plan meetings and events."
                    color={["#06a88e", "#06a88e"]}
                    tags={["React", "Sass", "Typescript", "CSS Modules"]}/>
                <PortfolioItem 
                    title="Quantum Snake"
                    paragraph="A C# .NET Framework console snake game with an A* powered enemy snake made in an 80's outrun theme."
                    color={["#EA6687", "#EA6687"]}
                    tags={[".NET", "A* pathfinding", "Game Engine"]}/>
            </div>
        </div>
    )
}
