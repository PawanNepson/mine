import React from "react";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import { AddMovies } from "./AddMovies";
import { Nav } from "./Nav";

export default function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovies />
        <MovieList />

      </div>

    </MovieProvider>
  )
}
