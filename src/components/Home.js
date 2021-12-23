import Navbar from './Navbar'
import SkillSet from './SkillSet'
import About from './About'
import Projects from './Projects'
import design from '../img/design.gif'
import './Home.css'

export default function Home(){
    return(
        <div class="home">
            <Navbar />
            <div className="top-container">
            <div className="container">
                <div className="row main-content">
                    <div className="col-sm-12 col-md-6 align-self-center p-4">
                    <div class="css-typing">
                        <p>
                            Hi,
                        </p>
                        <p>
                            I'm Balaji,
                        </p>
                        <p>
                            web developer &nbsp;
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6 pt-4">
                        <img src={design} className="img-fluid mx-auto d-block" alt="..." />
                    </div>
                </div>
            </div> 
        </div>
        <SkillSet />
        <About />
        <Projects />
        </div>
    )
}