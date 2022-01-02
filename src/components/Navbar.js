import { HashLink as Link } from 'react-router-hash-link';
export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-transperent">
            <div class="container-fluid">
                <a class="navbar-brand p-3" href="/">./balaji_b_v</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                    <Link class="nav-link" to="#">Home</Link>
                    </li>
                    <li class="nav-item me-3">
                    <Link class="nav-link" smooth to="/#about" >About</Link>
                    </li>
                    <li class="nav-item me-3">
                    <Link class="nav-link" to="/#projects">Projects</Link>
                    </li>
                    <li class="nav-item me-3">
                    <Link class="nav-link" to="/#contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}



