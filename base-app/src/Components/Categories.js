// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import CategoriesService from '../services/CategoriesService'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [hasError, setHasError] = useState(null)

    const loadMore = () => {
        setLoading(true)
        CategoriesService.getAll()
            .then((resp) => {
                setLoading(false)
                if (resp) {
                    const newCategories = [...categories, ...resp]
                    setCategories(newCategories)
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
            <h1>Categories list</h1>
            {categories.map((category, index) => (
                <article key={index}>
                    <h2>{category.name}</h2>
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
