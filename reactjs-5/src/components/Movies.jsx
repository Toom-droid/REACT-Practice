import { useState, useEffect } from "react";

export function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovies();
    }, []);
    async function fetchMovies() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzNiZjgwYjY3OTI5YTY0YjJmYmJhNDgyOTg0OWE1ZiIsInN1YiI6IjY0N2E4MzUzMGUyOWEyMDBiZjFlNmFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L1XP6OPqG-fjo_u4qOkWk5pHvOkIimsWa34R7rWAZ9s'
            }
        }
        fetch("https://api.themoviedb.org/3/moviegi/popular", options)
            .then((response) => response.json())
            .then((json) => {
                let moviesResult = [];
                console.log(json);
            });
    }
}
