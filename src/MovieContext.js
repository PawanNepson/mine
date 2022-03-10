import React, { useState, createContext } from "react";

export const MovieContext = createContext();
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([{ name: "inception", id: 321, price: "$20" }, { name: "inception2", id: 32, price: "$200" }, { name: "inception3", id: 132, price: "$2000" }])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}