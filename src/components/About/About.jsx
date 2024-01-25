import { React } from "react";

function About() {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row align-items-center justify-content-between g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0." className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">React development is carried out by passionate developers</h3>
                        <p className="fs-6">Quickly design and customize responsive mobile-first sites with Bootstrap, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary px-4">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About