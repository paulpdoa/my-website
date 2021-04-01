import React from 'react'

function Projects(props) {
    return (
        <div className="project-container">
            <h1 className="project-title">My Projects</h1>
                <div className="my-projects">
                    <div className="projects">
                        <h1>{props.project}</h1>
                    </div>
                    <div className="projects">
                        <h1>{props.project2}</h1>
                    </div>
                    <div className="projects">
                        <h1>{props.project3}</h1>
                    </div>
                    <div className="projects">
                        <h1>{props.project4}</h1>
                    </div>
                </div>
        </div>
    )
}

export default Projects
