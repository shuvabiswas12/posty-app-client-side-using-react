import React, { useState } from "react"

function Signup() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState()

  function clearInputFields() {
    setUsername("")
    setPassword("")
    setConfirmPassword("")
    setName("")
    setEmail("")
  }

  async function register(e) {
    e.preventDefault()
    setErrors({})
    setSuccessMessage()

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, name, email, password, confirmPassword }),
      })
      const data = await response.json()

      console.log(data)

      if (response.status === 400) {
        setErrors(data)
        const error = new Error(response.data)
        throw error
      }
      setSuccessMessage(data.message)
      window.scrollTo(0, 0)
      clearInputFields()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section id="main-container">
      <div className="container">
        <div className="row flex-column justify-content-md-center align-items-md-center p-3">
          <div className="col-md-6 message-row mb-2" style={!successMessage ? { display: "none" } : { display: "block" }}>
            <h6 className="mt-3 text-center text-success">{successMessage}</h6>
          </div>

          <div className="col-md-6 signup-form-container box">
            <div className="signup-bar p-3">
              <h5 className="text-white">SIGNUP</h5>
            </div>
            <form action="" onSubmit={register} className="signup-form my-4 p-3" id="signup-form">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" placeholder="name" autoComplete="off" autoCapitalize="off" required />
                <p className="text-danger mb-2">
                  <small>{errors.name}</small>
                </p>
              </div>
              <div>
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="form-control" placeholder="username" autoComplete="off" autoCapitalize="off" style={{ textTransform: "lowercase" }} required />
                <p className="text-danger mb-2">
                  <small>{errors.username}</small>
                </p>
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-control" placeholder="email" autoComplete="off" required />
                <p className="text-danger mb-2">
                  <small>{errors.email}</small>
                </p>
              </div>
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" placeholder="password" autoComplete="off" required />
                <p className="text-danger mb-2">
                  <small>{errors.password}</small>
                </p>
              </div>
              <div>
                <label htmlFor="password" className="form-label">
                  Confirm Password
                </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" className="form-control" placeholder="Retype your password" autoComplete="off" required />
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
