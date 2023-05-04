
import MovieResult from "./MovieResult";

const Movielist = ({movies, setWatchlist, watchlist}) => {

// if no movies, return <div> no search results <div/>
if(movies === 0) return <div id="no-results">Oops! No results found...Check spelling and try again</div>;

    const films = movies.map(movie => {
        return(
    <MovieResult
        movie={movie} 
        setWatchlist={setWatchlist} 
        watchlist={watchlist} 
        isMovielist={true} 
    />
        )
      })
    return (
        <>
        {films}
        </>
    );
};

export default Movielist;