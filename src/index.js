import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { useImmerReducer } from "use-immer"
import "./index.css"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import NavbarGuest from "./components/NavbarGuest"

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("token")),
    user: {
      username: localStorage.getItem("username"),
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
    },
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.value
        return
      case "logout":
        draft.loggedIn = false
        return
      default:
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("token", state.user.token)
      localStorage.setItem("username", state.user.username)
      localStorage.setItem("userId", state.user.userId)
    } else {
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      localStorage.removeItem("userId")
    }
  })

  return (
    <React.StrictMode>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            {state.loggedIn ? <Navbar /> : <NavbarGuest />}
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
        </DispatchContext.Provider>
      </StateContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
