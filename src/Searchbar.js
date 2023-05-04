import React, {useState} from "react";

const Searchbar = (props) => {
  const [inputVal, setInputVal] = useState('')
  // console.log(inputVal)
  
  const handleChange = (event) => {
      setInputVal(event.target.value)
  }

 const apiKey =  'f3616554';

//1. GET search result ids (an array of 5 id strings)
const getMovieIds = async () => {
const res = await fetch(`https://www.omdbapi.com/?s=${inputVal}&type=movie&apikey=${apiKey}`);
const data = await res.json(); 
let ids = [];
for (let i=0; i < 5; i++){
  ids.push(data.Search[i].imdbID)
}
   return ids;
}
//2. GET movie data for a movie id string (5 times)
const getMovieDetails = async(id)=>{
  let data;
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&type=movie&apikey=${apiKey}`)
   data = await res.json();
  return {
    poster: data.Poster,
    imdbID: data.imdbID,
    title: data.Title,
    imdbRating: data.imdbRating,
    runtime: data.Runtime,
    genre: data.Genre,
    plot: data.Plot    
  };
};

//3. 
const getSearchResults = async(e) => {
  e.preventDefault();
  let ids; // array
  try{
    ids = await getMovieIds();
  }catch(err){
    console.log('error fetching movie ids')
    props.setMovieObj(0);
    return;
  }

  let movieResults = [];
  try{
    for(let id of ids){
      const movieResult = await getMovieDetails(id);
      movieResults.push(movieResult)
    }
  }catch(err){
    console.log('error fetching movie details')
    throw err;
  }

  // console.log(movieResults, 'movieObj')
  props.setMovieObj(movieResults);

};

    return(
      <div id="cover">
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input type="text" placeholder="Search" onChange={handleChange}></input>
              </div>
            <div className="td" id="s-cover">
              <button id="search-btn" onClick={(e)=>getSearchResults(e)} type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default Searchbar;
