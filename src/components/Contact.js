import './css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Contact(){
    return(
        <section id="contact" class="contact">
            <div class="contact-header">
                <h3 id="co-title">Contact Me</h3>
                <h1 id="co-text">Reach out for a new project or to say hello</h1>
            </div>
            
            <div class="contact-content">
                <div class="contact-form">
                <h3 id="form-title">Send me a message</h3>
                <form action="mailto:balaji.bv2000@gmail.com" method="post" enctype="text/plain">
                <fieldset>
                    <div class="form-field">
                    <input name="name" type="text" id="name" placeholder="Your Name"></input>
                    </div>
                <div class="form-field">
                    <input name="email" type="email" id="email" placeholder="Your Email"></input>
                    </div>
                <div class="form-field">
                    <input name="Subject" type="text" id="subject" placeholder="Subject"></input>
                    </div>
                <div class="form-field">
                    <textarea name="message" type="text" id="message" placeholder="Your Message"></textarea>
                    </div>
                </fieldset>
            <input id="form-btn" type="submit" value="send" />
                </form>
            </div>
            
                <div class="contact-info">
                <h3>Email Me At </h3>
                <a href="mailto:balaji.bv2000@gmail.com"><p>balaji.bv2000@gmail.com</p></a>
                <h3>Find Me On </h3>
                <div class="contact-links">
                    <a href='https://www.linkedin.com/in/balaji-b-v-b31aba113/'><span class="fab"><FontAwesomeIcon icon={faLinkedin} /></span></a>
                    <a href='https://github.com/balajibv2000'><span class="fab"><FontAwesomeIcon icon={faGithub} /></span></a>
                    <a href='https://twitter.com/BalajiBv2000'><span class="fab"><FontAwesomeIcon icon={faTwitter} /></span></a>
                    <a href='https://www.instagram.com/balaji_bv2000/'><span class="fab"><FontAwesomeIcon icon={faInstagram} /></span></a>
                </div>
            </div>
            </div>
        </section>
    )
}