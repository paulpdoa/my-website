import React from 'react'
import me from '../image/me.jpg'
import Typewriter from 'typewriter-effect';
function About() {
    return (
        <div className="about-container">
            <h1 id="about-title" className="about-title">About Me</h1>
                <div className="about-me">
                    <img className="my-photo" src={me} alt="myphoto"/>
                    <h2 className="meh">
                        <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("I am Paul de Ocampo Andres")
                            .pauseFor(1000)
                            .deleteChars(21)
                            .typeString("a 3rd year college student at Emilio Aguinaldo College-Manila.")
                            .pauseFor(1000)
                            .deleteChars(62)
                            .typeString("studying Bachelor of Science in Information Technology")
                            .pauseFor(1000)
                            .deleteChars(54)
                            .typeString("knowledgeable in PHP")
                            .pauseFor(1000)
                            .deleteChars(3)
                            .typeString("Javascript")
                            .pauseFor(1000)
                            .deleteAll()
                            .callFunction((typewriter) => {
                                return typewriter
                            })
                            .start();
                            }  
                        }/>
                        </h2>
                </div>
        </div>
    )
}

export default About
