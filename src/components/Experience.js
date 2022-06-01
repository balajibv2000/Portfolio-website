import CuriousJr from '../img/curiousJr.png'
import './css/Experience.css'

export default function Experience(){
    return(
        <div className="exp-container">
            <div className="exp-header">
            <h1 class="p-3">./experience</h1>
            </div>
            <div className="exp-body">
                <div className="exp-card">
                    <img src={CuriousJr} />
                    <h3>Software Developer | Intern</h3>
                    <p>November 2021 - Febuary 2022</p>
                </div>
            </div>
        </div>
    )
}