import { Movies } from "./components/Movies";
import { MovieDetails } from "./components/MovieDetails";
import { useState } from "react";
import "./scss/App.scss";

export function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    return (
        <>
            {!selectedMovie && <Movies handleMovieClick={setSelectedMovie} />}
            {selectedMovie && <MovieDetails movie={selectedMovie} cleanMovies={setSelectedMovie}/>}
        </>
    );
}
