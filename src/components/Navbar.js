import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState({})

  async function handleLogin(e) {
    e.preventDefault()
    setErrors({})
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    console.log(data)

    if (response.status == 400) {
      setErrors(data)
      const error = new Error(response.data)
      throw error
    }
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-bg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-white" to="/">
            <strong>Complex-app</strong>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/profile" className="nav-link fw-bold">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link fw-bold">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link fw-bold">
                  Register
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleLogin}>
              <div>
                <input onChange={(e) => setEmail(e.target.value)} className="form-control me-2" type="email" placeholder="Email" required />
              </div>
              <div>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control me-2" placeholder="Password" required />
              </div>
              <button className="btn btn-success" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
