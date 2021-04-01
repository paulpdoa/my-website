import React from 'react'

function Projects({projects,projects1,projects2,projects3}) {
    return (
        <div className="project-container">
            <h1 className="project-title">My Projects</h1>
                <div className="my-projects">
                    <div className="projects">
                        <h1>{projects.project}</h1>
                    </div>
                    <div className="projects">
                        <h1>{projects1.project}</h1>
                    </div>
                    <div className="projects">
                        <h1>{projects2.project}</h1>
                    </div>
                    <div className="projects">
                        <h1>{projects3.project}</h1>
                    </div>
                </div>
        </div>
    )
}

export default Projects
