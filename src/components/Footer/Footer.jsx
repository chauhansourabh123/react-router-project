import { React } from "react";
import { Link } from "react-router-dom";



function Footer() {
    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-1 my-2 border-top">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    </a>
                    <Link to="/" className="text-body-secondary link-underline-light">© 
                    <span className="text-dark fs-4 fw-bold">Your</span>
                    <span className="text-danger fs-4 fw-bold">Logo</span>
                    </Link>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h6>RESOURES</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                        <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h6>FOLLOW US</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="https://github.com/chauhansourabh123" target="_blank" className="nav-link p-0 text-body-secondary">Github</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Discord</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h6>LEGAL</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;