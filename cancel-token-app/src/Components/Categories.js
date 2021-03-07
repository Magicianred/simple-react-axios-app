// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react'
import CategoriesService from '../services/CategoriesService'

const Categories = () => {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [hasError, setHasError] = useState(null)

    // handle cancel token
    const cancelTokenRef = useRef()
    const [cancelToken, setCancelToken] = useState()

    const loadMore = () => {
        setLoading(true)
        const [promise, cancelRequest] = CategoriesService.getAll()
        promise
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
        setCancelToken(() => cancelRequest)
    }

    useEffect(() => {
        loadMore()

        return function cleanup() {
            if (cancelTokenRef && cancelTokenRef.current) {
                cancelTokenRef.current()
            }
        }
    }, [])

    useEffect(() => {
        cancelTokenRef.current = cancelToken
    }, [cancelToken])

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

export default Categories
