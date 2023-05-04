import React, {useState} from "react";

const MovieResult = ({movie, setWatchlist, watchlist, isMovielist}) => {
    //movie = {movie details etc.};
    const {genre, imdbID, imdbRating, plot, poster, runtime, title} = movie;
    const [movieAdded, setMovieAdded] = useState(false)
    
    function inRange(x, min, max) {
        return ((x-min)*(x-max) <= 0);
    }
    
    const ratingStyle = () => {
        if (imdbRating <= 5.5){
            return('🔴')
        } else if (inRange(imdbRating, 5.6, 6.9) === true){
            return('🟠')
        } else if (inRange(imdbRating, 7, 7.9) === true){
            return('🟡')
        } else if (inRange(imdbRating, 8, 8.9) === true){
            return('🟢')
        } else if(imdbRating >= 9){
            return('🔵')
        }
    }

    function isAdded(){
        if (watchlist.find(mov => imdbID === mov.imdbID)){
            return true;
        }else{
             return false
        }

    }

    function addMovie(){
        if(!isAdded()){
            setWatchlist(previousList => [...previousList, movie])
            setMovieAdded(prevState => !prevState);
            //console.log(watchlist, 'watchlist');
        } else{
            return;
        }
    }


    
    function removeMovie(){
       
        setWatchlist(prevList=> {
            const updatedWatchlist = prevList.filter(watchMovie => imdbID !== watchMovie.imdbID)
            return [...updatedWatchlist];
        })
    }


    

    return(
        <div className="results">
        <div className="search-result">
            <img  className="poster-img" src={poster}/>
            <div className="search-text" id={imdbID}>
                <p id="title">{title}</p>
                <p>IMDb Rating {ratingStyle()} {imdbRating}</p>
               {isMovielist === true ? 
               <button id={isAdded() ? 'added' : 'add-movie'} onClick={addMovie}>
                    {isAdded() === true ? ' ☑ added' : '+ add movie'} 
                </button>
                : <button id='remove' onClick={removeMovie}>
                    - remove
                </button>
                
            }
            
                <div className="movie-info">
                    <p>Runtime: {runtime}</p>
                    <p>Genre: {genre}</p>
                </div>
                <p id="plot">{plot}</p>
            </div>
        </div>
        </div>
    )
}

export default MovieResult;