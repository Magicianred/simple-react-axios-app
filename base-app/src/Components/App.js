// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import PostService from '../services/PostService'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [hasError, setHasError] = useState(null)

  const loadMore = () => {
    setLoading(true)
    PostService.getAll()
      .then((resp) => {
        setLoading(false)
        if (resp) {
          const newPosts = [...posts, ...resp]
          setPosts(newPosts)
        }
      })
      .catch((err) => {
        setLoading(false)
        setHasError(err)
      })
  }

  useEffect(() => {
    loadMore()
  }, [])

  return (
    <div>
      <h1>Post list</h1>
      {posts.map((post, index) => (
        <article key={index}>
          <h2>{post.title}</h2>
          {/* <p>{post.text}</p>
            <p>
              <i>{post.createDate}</i>
            </p> */}
        </article>
      ))}
      {loading && <span>in caricamento...</span>}
      {!loading && <button onClick={loadMore}>Carica ancora...</button>}
      {!loading && hasError && <div>Si è verificato un errore</div>}
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
