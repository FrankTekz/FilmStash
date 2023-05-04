
import MovieResult from "./MovieResult";

const Movielist = ({movies, setWatchlist, watchlist}) => {

//movies = [{1}, {2}, {3}]
//movie = {}

// if no movies, return <div> no search results <div/>
if(movies === 0) return <div>No Results</div>;

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
//films = <MovieResult movie={1}/>, <MovieResult/>, <Movie/>
    return (
        <>
        {films}
        </>
    );
};

export default Movielist;