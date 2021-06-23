import React, { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function Navbar() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  async function handleLogout() {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: appState.user.token,
        },
      })

      const data = await response.json()

      // it works if token is expired or not...
      console.log(data)
      appDispatch({ type: "logout", value: "" })
    } catch (err) {
      console.log(err)
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
                  {appState.user.username}
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold btn" onClick={handleLogout} style={{ border: "0" }}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
