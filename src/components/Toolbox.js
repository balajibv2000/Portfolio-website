import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'

import './css/Toolbox.css'

export default function Toolbox(){
    return(
        <div>
            <div class="mt-5 mb-5">
                <h1 class="p-3">./my_Toolbox</h1>
                <div class="d-flex justify-content-evenly mt-4">
                    <div>
                        <FontAwesomeIcon class="toolBox-icon" icon={faHtml5} />
                        <p>HTML 5</p>
                    </div>
                    <div>
                        <FontAwesomeIcon class="toolBox-icon" icon={faCss3Alt} />
                        <p>CSS 3</p>
                    </div>
                    <div>
                        <FontAwesomeIcon class="toolBox-icon" icon={faJs} />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon class="toolBox-icon" icon={faReact} />
                        <p>React</p>
                    </div>
                </div>
                <div class="d-flex justify-content-evenly mt-4">
                    <div>
                        <FontAwesomeIcon class="toolBox-icon" icon={faGitAlt} />
                        <p>Git</p>
                    </div>
                    <div>
                        <FontAwesomeIcon class="toolBox-icon" icon={faGithub} />
                        <p>Github</p>
                    </div>
                    <div>
                        <FontAwesomeIcon class="toolBox-icon" icon={faFigma} />
                        <p>Figma</p>
                    </div>
                    <div>
                        <i class="devicon-vscode-plain" style={{fontSize: "12vmin"}}></i>
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </div>
    )
}