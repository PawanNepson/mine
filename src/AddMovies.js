import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";


export const AddMovies = () => {
    const [movies, setMovies] = useContext(MovieContext)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const addName = (e) => {
        setName(e.target.value)
    }
    const addPrice = (e) => {
        setPrice(e.target.value)
    }
    const ok = (e) => {
        e.preventDefault()
        // setMovies(Movies => [...Movies, { name: name, price: price }])
        setMovies((Movies) => {
            console.log(Movies)
            return [...Movies, { name: name, price: price }]
        })

    }
    return (
        <div>
            <form onSubmit={ok}>
                <input type="text" value={name} onChange={addName} />
                <input type="text" value={price} onChange={addPrice} />
                <button>Submit</button>
            </form>
        </div>
    )
}
