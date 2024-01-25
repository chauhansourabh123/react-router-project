import React from "react";

function Contact() {
    return (
        <div className="container">
            <div className="row d-flex align-items-center g-lg-5 py-5 justify-content-center">
                <div className="col-lg-4 text-center text-lg-start bg-dark py-4 rounded-4 bg-opacity-10">
                    <h3 className="fw-bold lh-1 text-body-emphasis mb-1">Get in touch:</h3>
                    <p className="fs-6 fw-bold">Fill in the form to starta a conversation.</p>
                    <div className="col-8 d-flex">
                        <i className="bi bi-geo-alt px-2"></i>
                        <p>Acme Inc. Street, State, Postal Code</p>
                    </div>
                    <div className="col-8 d-flex">
                        <i className="bi bi-telephone px-2"></i>
                        <p>Acme Inc. Street, State, Postal Code</p>
                    </div>
                    <div className="col-8 d-flex">
                    <i className="bi bi-envelope px-2"></i>
                        <p>Acme Inc. Street, State, Postal Code</p>
                    </div>
                </div>
                <div className="col-md-10 col-lg-4">
                    <form className="p-2 border rounded-3 bg-body-tertiary">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="Full Name" />
                            <label htmlFor="floatingName">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-danger px-4" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;