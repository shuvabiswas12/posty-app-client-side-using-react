import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import StateContext from "../StateContext"
import PostForm from "./PostForm"

function Profile() {
  const history = useHistory()
  const appState = useContext(StateContext)
  const [posts, setPosts] = useState([])
  async function getAllPost() {
    const response = await fetch(`http://localhost:3000/${appState.user.userId}/posts`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    const entireData = await response.json()
    setPosts(entireData.data)
    console.log(`Data length: ${entireData.length}`)
  }

  async function handleDelete(postId) {
    e.preventDefault()
    const response = await fetch(`http://localhost:3000/${postId}/delete`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: appState.user.token,
      },
    })
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    if (appState.loggedIn) {
      getAllPost()
    } else {
      history.goBack()
    }
  }, [])
  return (
    <section id="main-container" className="feed">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-md-8 mt-5 mx-md-5 px-md-5 mb-4">
            <h3>{appState.user.username}</h3>
            <h6 className="text-black lead mt-1">This user has 12 post total and gain 2 likes.</h6>
          </div>
        </div>

        <div className="row justify-content-sm-center align-items-sm-center">
          <div className="col-md-10 g-4 box">
            <PostForm />

            <ul className="list-group list-group-flush py-3">
              {posts.map((post) => {
                return (
                  <li className="list-group-item py-4" key={post._id}>
                    <div className="d-md-flex">
                      <h6 className="me-4">
                        <strong>{appState.user.username}</strong>
                      </h6>
                      <p>
                        <small className="text-muted">{post.createdAt}</small>
                      </p>
                    </div>
                    <p className="post-body mt-1 mb-2">{post.body}</p>
                    <div className="d-flex">
                      <form onSubmit={() => handleDelete(post._id)} method="post">
                        <button className="btn-sm">Delete</button>
                      </form>
                      <p className="text-black-50 mt-1 fw-bold mx-3">
                        <i className="text-muted">0 likes</i>
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
