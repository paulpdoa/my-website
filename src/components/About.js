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
                            .typeString("I am Paul D. Andres")
                            .pauseFor(1000)
                            .deleteChars(14)
                            .typeString("a 3rd year college student")
                            .pauseFor(1000)
                            .deleteChars(24)
                            .typeString("web developer")
                            .pauseFor(1000)
                            .deleteChars(15)
                            .typeString("knowledgeable in PHP")
                            .pauseFor(1000)
                            .deleteChars(3)
                            .typeString("Javascript")
                            .pauseFor(1000)
                            .deleteChars(10)
                            .typeString("MySQL Database")
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
