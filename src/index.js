import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Feed from "./components/Feed"

function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/register">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Feed />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
