import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import MovieResult from './MovieResult';
import Watchlist from './Watchlist';
import Movielist from './Movielist';

function App() {

const getWatchlistStorage = () => {
  let savedMovies = localStorage.getItem('saved-movies');
  if(savedMovies){
    return JSON.parse(localStorage.getItem('saved-movies'))
  }else{
    return [];
  }
};

const [movieObj, setMovieObj] = useState([]) //when you search for a movie
const [watchlist, setWatchlist] = useState(getWatchlistStorage) //you add watchlist movies here
const [changePage, setPage] = useState(false)



function switchPage(){
  setPage(prevState => !prevState)
}

// useEffect(() => {
//   let data = localStorage.getItem('saved-movies')
//   setWatchlist(JSON.parse(data))
// }, [])

useEffect(()=>{
  localStorage.setItem('saved-movies', JSON.stringify(watchlist))
  console.log(watchlist, 'watchlist')
}, [watchlist])


  return (
    <div>
        <Navbar pageState={changePage} handleClick={switchPage}/>
        {changePage === true ? null : <Searchbar setMovieObj={setMovieObj}/> }
        {changePage === true 
        ? <Watchlist 
            // movies={movieObj}
            watchlist={watchlist} 
            setWatchlist={setWatchlist}
        /> 
        : <Movielist 
            movies={movieObj} 
            watchlist={watchlist}
            setWatchlist={setWatchlist} 
        /> }
    </div>

  );
}

export default App;
