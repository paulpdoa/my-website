import React from 'react'

function Contact() {
    return (
        <div className="contact-container">
            <h1 id="contact-title" className="contact-title">Contact Me</h1>
            <div class="contact-form">
                <form action="mailto:polopdoandres@gmail.com" method="POST">
                    <div className="contact-input">
                        <label for="name">Name:</label><br/>
                        <input className="name" type="text" name="Name" placeholder="Enter your name" required/><br/>
                    </div>
                    <div className="contact-input">
                        <label for="number">Contact Number:</label><br/>
                        <input class="number" type="number" name="ContactNumber" placeholder="Enter your contact number" required/><br/>
                    </div>
                    <div className="contact-input">
                        <label for="name">Message:</label><br/>
                        <textarea name="Message" placeholder="Enter your message" size="50" required/><br/>
                    </div>
                    <div className="contact-buttons">
                        <input type="submit" value="Send"/>
                        <input type="reset" value="Reset"/>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
