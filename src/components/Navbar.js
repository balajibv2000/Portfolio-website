export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-transperent">
            <div class="container-fluid">
                <a class="navbar-brand p-3" href="/">Balaji B V</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                    <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" href="/">Projects</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" href="/">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}



