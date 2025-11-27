
export default function HomePage() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid" id="homepage-hero">
                <div className="container" id="homepage-hero-text">
                    <div className="overlay"> {/* darkening overlay */}</div>
                    <h1 className="display-4">Help Reintroduce Ryders Bill  (Int. 0967-2024)</h1>
                    <p className="lead">Our city has always led on progressive, compassionate change — let’s do the same for the horses who can’t speak for themselves.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>

                </div>
            </div>
            <div>
                <p id="ryders-law-bio"><blockquote>
                    <strong>Ryder’s Law (Int. 0967-2024)</strong><br></br>
                    “A bill to wind down the horse-drawn cab industry by prohibiting the issuance of new licenses
                    for the operation of horse-drawn cabs. The operation of such cabs would be prohibited beginning
                    June 1, 2026. This bill would require humane disposition of carriage horses, prohibiting their sale
                    or transfer for slaughter or use in another horse-drawn cab business.”
                </blockquote>

                    <p>
                        — <strong>Animal Legal Defense Fund (ALDF)</strong>, Ryder’s Law<br></br>
                        <a href="https://aldf.org/project/ryders-law/" target="_blank" rel="noopener noreferrer">
                            Source
                        </a>
                    </p>
                </p>
                <p id="fight-is-not-over">The fight is not over. Reintroducing this bill is possible — and with public support, we can make it happen. </p>
                <img id="ryders-law-image" src="public\carriage-horse-fallen-over-nyc-16x9--760x428.jpg" alt="Ryder in carriage"></img>
            </div>
            <div>
                <p id="council-members-header">Voted NO on Int. 0967-2024 (Carriage Horses & Horse-Drawn Cabs)</p>
            </div>
            <div className="container-fluid" id="council-members">
                <div className="card">
                    <img className="card-img-top" src="\public\Carmen De La Rosa.jpg" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">All vote information is taken from publicly available NYC Council records. This page reports voting actions only and does not state or imply motivations.</p>
                        <button>Email Council Member</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="\public\Oswald J Feliz.jpg" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">All vote information is taken from publicly available NYC Council records. This page reports voting actions only and does not state or imply motivations.</p>
                        <button>Email Council Member</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="\public\Justin Brannan.jpg" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">All vote information is taken from publicly available NYC Council records. This page reports voting actions only and does not state or imply motivations.</p>
                        <button>Email Council Member</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="\public\James F Gennaro.jpg" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">All vote information is taken from publicly available NYC Council records. This page reports voting actions only and does not state or imply motivations.</p>
                        <button>Email Council Member</button>
                    </div>
                </div>
            </div>
        </>


    );
}