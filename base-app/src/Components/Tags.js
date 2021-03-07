// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import TagsService from '../services/TagsService'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [tags, setTags] = useState([])
    const [hasError, setHasError] = useState(null)

    const loadMore = () => {
        setLoading(true)
        TagsService.getAll()
            .then((resp) => {
                setLoading(false)
                if (resp) {
                    const newTags = [...tags, ...resp]
                    setTags(newTags)
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
            <h1>Tags list</h1>
            {tags.map((tag, index) => (
                <article key={index}>
                    <h3>{tag.name}</h3>
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
