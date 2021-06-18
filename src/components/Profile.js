import React from "react"

function Profile() {
    return (
        <section id="main-container" className="feed">
            <div className="container">
                <div className="row align-items-md-center">
                    <div className="col-md-8 mt-5 mx-md-5 px-md-5 mb-4">
                        <h3>Dr. Bernadette Okuneva</h3>
                        <h6 className="text-black lead mt-1">This user has 12 post total and gain 2 likes.</h6>
                    </div>
                </div>

                <div className="row justify-content-sm-center align-items-sm-center">
                    <div className="col-md-10 g-4 box">
                        <from action="" method="post">
                    <textarea name="body" id="body" rows="4" className="form-control mt-4"
                              placeholder="Write something whatever you want to show people!" autoComplete="off"
                              autoCapitalize="on"></textarea>
                            <button className="btn btn-warning my-2">Post</button>
                        </from>

                        <ul className="list-group list-group-flush py-3">
                            <li className="list-group-item py-4">
                                <div className="d-md-flex">
                                    <h6 className="me-4"><strong>Dr. Bernadette Okuneva</strong></h6>
                                    <p><small className="text-muted">2 weeks ago</small></p>
                                </div>
                                <p className="post-body mt-1 mb-2">It is a long established fact that a reader will be
                                    distracted by the readable content of a
                                    page when looking at its layout. </p>
                                <div className="d-flex">
                                    <form action="" method="post">
                                        <button className="btn-sm">Like</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm mx-2">Unlike</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm">Delete</button>
                                    </form>
                                    <p className="text-black-50 mt-1 fw-bold mx-3">
                                        <i className="text-muted">0 likes</i>
                                    </p>
                                </div>

                            </li>
                            <li className="list-group-item py-4">
                                <div className="d-md-flex">
                                    <h6 className="me-4"><strong>Dr. Bernadette Okuneva</strong></h6>
                                    <p><small className="text-muted">2 weeks ago</small></p>
                                </div>
                                <p className="post-body mt-1 mb-2">It is a long established fact that a reader will be
                                    distracted by the readable content of a
                                    page when looking at its layout. </p>
                                <div className="d-flex">
                                    <form action="" method="post">
                                        <button className="btn-sm">Like</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm mx-2">Unlike</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm">Delete</button>
                                    </form>
                                    <p className="text-black-50 mt-1 fw-bold mx-3">
                                        <i className="text-muted">0 likes</i>
                                    </p>
                                </div>

                            </li>
                            <li className="list-group-item py-4">
                                <div className="d-md-flex">
                                    <h6 className="me-4"><strong>Dr. Bernadette Okuneva</strong></h6>
                                    <p><small className="text-muted">2 weeks ago</small></p>
                                </div>
                                <p className="post-body mt-1 mb-2">It is a long established fact that a reader will be
                                    distracted by the readable content of a
                                    page when looking at its layout. </p>
                                <div className="d-flex">
                                    <form action="" method="post">
                                        <button className="btn-sm">Like</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm mx-2">Unlike</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm">Delete</button>
                                    </form>
                                    <p className="text-black-50 mt-1 fw-bold mx-3">
                                        <i className="text-muted">0 likes</i>
                                    </p>
                                </div>

                            </li>
                            <li className="list-group-item py-4">
                                <div className="d-md-flex">
                                    <h6 className="me-4"><strong>Dr. Bernadette Okuneva</strong></h6>
                                    <p><small className="text-muted">2 weeks ago</small></p>
                                </div>
                                <p className="post-body mt-1 mb-2">It is a long established fact that a reader will be
                                    distracted by the readable content of a
                                    page when looking at its layout. </p>
                                <div className="d-flex">
                                    <form action="" method="post">
                                        <button className="btn-sm">Like</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm mx-2">Unlike</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm">Delete</button>
                                    </form>
                                    <p className="text-black-50 mt-1 fw-bold mx-3">
                                        <i className="text-muted">0 likes</i>
                                    </p>
                                </div>

                            </li>
                            <li className="list-group-item py-4">
                                <div className="d-md-flex">
                                    <h6 className="me-4"><strong>Dr. Bernadette Okuneva</strong></h6>
                                    <p><small className="text-muted">2 weeks ago</small></p>
                                </div>
                                <p className="post-body mt-1 mb-2 lead">It is a long established fact that a reader will
                                    be distracted by the readable content of a
                                    page when looking at its layout. </p>
                                <div className="d-flex">
                                    <form action="" method="post">
                                        <button className="btn-sm">Like</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm mx-2">Unlike</button>
                                    </form>
                                    <form action="" method="post">
                                        <button className="btn-sm">Delete</button>
                                    </form>
                                    <p className="text-black-50 mt-1 fw-bold mx-3">
                                        <i className="text-muted">0 likes</i>
                                    </p>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile