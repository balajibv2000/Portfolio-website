import './css/ProjectItem.scss'

export default function ProjectItem(props) {

    const website = props.website

    return(
        <div class="card">
            <div class='main'>
            <img class='tokenImage' src={props.image} alt="projectImage" />
            <h2>{props.projectName}</h2>
            <p class='description'>{props.description}</p>
            <hr />
            <div class='lower'>
               {
                   website && <a href={website}><button>Website</button></a>
               }
                <a href={props.code}><button>Code</button></a>
            </div>
            </div>
        </div>
    )
}