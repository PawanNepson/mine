import React, { useState, useContext } from "react";
import Movies from "./Movies";
import { MovieContext } from "./MovieContext"

export default function MovieList() {
    const [movies, setMovies] = useContext(MovieContext)
    console.log(movies)
    return (
        <div>


            {
                movies.map((movie) => {
                    return (
                        <div key={Math.random()}>
                            <Movies movie1={movie.name} price={movie.price} />
                        </div>





                    )
                })
            }

        </div >
    )
}
