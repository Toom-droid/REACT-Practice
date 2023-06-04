export function MovieDetails({ movie, cleanMovies }) {
    let movieImage = movie.movieImage;
    let movieDescription = movie.movieDescription;
    let movieRelease = movie.movieRelease;
    let movieTitle = movie.movieTitle;
    let movieVote = movie.movieVote;

    function handleClick() {
        cleanMovies(null);
    }
    return (
        <div className="movieDetails">
            <div className="MovieIMG">
                <img src={movieImage} alt={movieTitle} />
            </div>
            <div className="movieInfo">
                <h1>{movieTitle}</h1>
                <p>{movieDescription}</p>
                <p>{movieRelease}</p>
                <p>{movieVote}</p>
                <button
                    onClick={() => {
                        handleClick();
                    }}
                >
                    BACK
                </button>
            </div>
        </div>
    );
}
