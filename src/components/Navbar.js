import React from 'react'
import hamburger from '../image/hamburger.png'
import {useState} from 'react'
function Navbar() {

    const myFunction = () => {
        var navbar = document.getElementById('nav')
        navbar.classList.toggle('show')
    }

    return (    
        <div className="navbar-container">
            <div className="navbar-title"><h1><a href="#">paulpdoa</a></h1></div>
                <div className="navigation-buttons">
                        <ul id="nav" class="navbar-list">
                            <li><a href="#top">Home</a></li>
                            <li><a href="#about-title">About Me</a></li>
                            <li><a href="#contact-title">Contact Me</a></li>
                        </ul>
                </div>
                
                    <div className="burger-menu-container" onClick={myFunction}>
                        <img class="burger-menu" src={hamburger} alt="menu"/>
                    </div>
        </div>
    )
}

export default Navbar
