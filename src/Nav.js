import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

export const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>

            Number of Movies:{movies.length}

        </div>
    )
}
