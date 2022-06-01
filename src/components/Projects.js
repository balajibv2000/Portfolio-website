import ProjectItem from "./ProjectItem"
import Car from '../img/car.jpeg'
import SimpleMario from '../img/SimpleMario.png'
import WebChat from '../img/webChat.png'
import DrumKit from '../img/drumKit.png'
import Train from '../img/train.jpeg'
import Simon from '../img/simon.png'
import Design from '../img/design.gif'

export default function Projects(){
    return(
        <div id="projects" className="projects">
            <h1 class="p-3">./projects</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <ProjectItem 
                            projectName = "Cars+"
                            description = " Project on an E-commerce website for buying and renting cars built using MERN stack."
                            image = {Car}
                            code = "https://github.com/balajibv2000/carsplus"
                        />
                    </div>
                    <div class="carousel-item">
                        <ProjectItem 
                                projectName = "SimpleMario"
                                description = " Simple Mario is a 2D android game based on a popular game series Super Mario developed by Nintendo. "
                                image = {SimpleMario}
                                code = "https://github.com/balajibv2000/simple-mario"
                            />
                    </div>
                    <div class="carousel-item">
                        <ProjectItem 
                                projectName = "WebChat"
                                description = " A real-time chat application built using react and deployed on firebase. "
                                image = {WebChat}
                                website = "https://webchat-bv-ca0a6.web.app/"
                                code = "https://github.com/balajibv2000/webChat"
                            />
                    </div>
                    <div class="carousel-item">
                        <ProjectItem 
                                projectName = "Railways"
                                description = "Project for DBMS on Railway Management System with Postgres as database and ReactJs for front-end."
                                image = {Train}
                                code = "https://github.com/balajibv2000/Railway-Management-System"
                            />
                    </div>
                    <div class="carousel-item">
                        <ProjectItem 
                                projectName = "Simon Game"
                                description = "A website to play Simon Game and built using HTML, CSS, JavaScript."
                                image = {Simon}
                                website = "https://balajibv2000.github.io/Simon-game/"
                                code = "https://github.com/balajibv2000/Simon-game"

                            />
                    </div>
                    <div class="carousel-item">
                        <ProjectItem 
                                projectName = "Portfolio Website"
                                description = "A Portfolio website highlighting my skills and projects. Built using ReactJs."
                                image = {Design}
                                website = "https://balajibv2000.github.io/Portfolio-website/"
                                code = "https://github.com/balajibv2000/Portfolio-website"
                            />
                    </div>
                    <div class="carousel-item">
                        <ProjectItem 
                                projectName = "Drum Kit"
                                description = "A simple website for playing instruments in a drum kit and built using HTML, CSS, JavaScript."
                                image = {DrumKit}
                                website = "https://balajibv2000.github.io/Drum-kit/"
                                code = "https://github.com/balajibv2000/Drum-kit"
                            />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}