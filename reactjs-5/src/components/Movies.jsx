import { useState, useEffect } from "react";

export function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovies();
    }, []);
    
    async function fetchMovies() {
        const urlImage = 'https://image.tmdb.org/t/p/original'
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzNiZjgwYjY3OTI5YTY0YjJmYmJhNDgyOTg0OWE1ZiIsInN1YiI6IjY0N2E4MzUzMGUyOWEyMDBiZjFlNmFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L1XP6OPqG-fjo_u4qOkWk5pHvOkIimsWa34R7rWAZ9s",
            },
        };
        fetch("https://api.themoviedb.org/3/movie/popular", options)
        .then((response) => response.json())
        .then((json) => {
                let moviesResults = [];
                for (const movie of json.results) {
                    let movieImgPath = movie.poster_path;
                    let movieTitle = movie.title;
                    let movieDescription = movie.overview;
                    let movieID = movie.id;
                    let movieVote = movie.vote_average;
                    let movieRelease = movie.release_date

                    let movieImage = urlImage + movieImgPath

                    moviesResults.push({
                        movieImage,
                        movieTitle,
                        movieDescription,
                        movieID,
                        movieVote,
                        movieRelease
                    });
                    setMovies(moviesResults);
                }
            })
            .catch((error) => console.error(error));
    }

    function handleImageClick(movieImage, movieDescription, movieVote, movieTitle, movieRelease){
        
    }

    return (
        <main>
            {movies &&
                movies.map(({ movieImage,movieTitle,movieDescription,movieID,movieVote,movieRelease }) => (
                    <div className="movie-container" key={movieID}>
                        <h1>{movieTitle}</h1>
                        <img src={movieImage} alt={movieTitle} onClick={()=> handleImageClick(movieImage,movieDescription,movieVote,movieTitle,movieRelease)}/>
                        <p>Release: {movieRelease}</p>
                        <p>Valoration: {movieVote}</p>
                    </div>
                ))}
        </main>
    );
}
