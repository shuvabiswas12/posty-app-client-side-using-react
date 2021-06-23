import React, { useContext, useEffect, useState } from "react"
import StateContext from "../StateContext"

function PostForm() {
  const appState = useContext(StateContext)
  const [isShowForm, setIsShowFrom] = useState(false)
  const [body, setBody] = useState()

  async function handlePost(e) {
    e.preventDefault()
    const response = await fetch("http://localhost:3000/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: appState.user.token,
      },
      body: JSON.stringify({ body }),
    })
    const data = await response.json()
    if (response.status === 400) {
      console.log(data)
    } else {
      console.log(data.message)
    }
  }

  useEffect(() => {
    if (appState.loggedIn) {
      setIsShowFrom(true)
    } else {
      setIsShowFrom(false)
    }
  }, [appState.loggedIn])

  return (
    <form method="post" onSubmit={handlePost} style={isShowForm ? { display: "block" } : { display: "none" }}>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} name="body" id="body" rows="4" className="form-control mt-4" placeholder="Write something whatever you want to show people!" autoComplete="off" autoCapitalize="on"></textarea>
      <button className="btn btn-warning my-2">Post</button>
    </form>
  )
}

export default PostForm
