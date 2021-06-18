import React from "react"

function Signup() {
    return (
        <section id="main-container">
            <div className="container">
                <div className="row justify-content-md-center align-items-md-center p-3">
                    <div className="col-md-6 signup-form-container box">
                        <div className="signup-bar p-3"><h5 className="text-white">SIGNUP</h5></div>
                        <form action="" className="signup-form my-4 p-3" id="signup-form">
                            <div>
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" id="username" className="form-control" placeholder="username"
                                       autoComplete="off" autoCapitalize="off" style={{textTransform: "lowercase"}}/>
                            </div>
                            <div>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="email"
                                       autoComplete="off" />
                            </div>
                            <div>
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="password"
                                       autoComplete="off" />
                            </div>
                            <button className="btn btn-success signup-btn mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup