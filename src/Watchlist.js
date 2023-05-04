import MovieResult from "./MovieResult";

export default function Watchlist({setWatchlist, watchlist}){
    
    const watchResults = watchlist.map(movie => {
        return(
    <MovieResult movie={movie}  setWatchlist={setWatchlist} watchlist={watchlist} isMovielist={false} />
        )
      })
    

    return(
        <>
        {watchResults}
        </>
        
    )
}