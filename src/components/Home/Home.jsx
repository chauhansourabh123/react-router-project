import { React } from "react";

function Home() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row d-flex align-items-center justify-content-center py-4">
                <div className="col-10 col-sm-8 col-lg-4">
                    <img src="https://i.ibb.co/5BCcDYB/Remote2.png" className="img-fluid" alt="Bootstrap Themes" width="300" height="300" loading="lazy" />
                </div>
                <div className="col-lg-6 text-end col-lg-4">
                    <h2 className="fw-bold text-body-emphasis mb-1">Download Now</h2>
                    <h4 className="fs-5 fw-bold">Lorem Ipsum</h4>

                    <button type="button" className="btn btn-danger px-3 mt-4"><i className="bi bi-google-play px-1"></i>Download Now</button>

                </div>
            </div>

            <div className="px-4 py-2 mt-5 text-center">
                <img className="d-block mx-auto mb-4 img-fluid" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="" width="400" />
                <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Read More</button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Home
